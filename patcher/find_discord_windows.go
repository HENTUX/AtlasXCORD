/*
 * SPDX-License-Identifier: GPL-3.0
 * AtlasC2 Patcher, a cross platform gui/cli app for installing AtlasC2
 * Copyright (c) 2026 HENTUX and AtlasC2 contributors
 */

package main

import (
	"errors"
	"os"
	path "path/filepath"
	"strings"
	"sync"
	"time"
	"unsafe"

	"golang.org/x/sys/windows"
)

var windowsNames = map[string]string{
	"stable": "Discord",
	"ptb":    "DiscordPTB",
	"canary": "DiscordCanary",
	"dev":    "DiscordDevelopment",
}

var killLock sync.Mutex

func ParseDiscordNew(p, branch string, isFlatpak bool) *DiscordInstall {
	return nil
}

func ParseDiscord(p, branch string) *DiscordInstall {
	entries, err := os.ReadDir(p)
	if err != nil {
		if !errors.Is(err, os.ErrNotExist) {
			Log.Warn("Error during readdir "+p+":", err)
		}
		return nil
	}

	isPatched := false
	appPath := ""
	var latestVer []int
	for _, dir := range entries {
		if !dir.IsDir() || !strings.HasPrefix(dir.Name(), "app-") {
			continue
		}
		resources := path.Join(p, dir.Name(), "resources")
		if !ExistsFile(resources) {
			continue
		}
		dirIsPatched := ExistsFile(path.Join(resources, "_app.asar"))
		if !dirIsPatched && !ExistsFile(path.Join(resources, "app.asar")) {
			continue
		}
		ver := ParseAppVersion(dir.Name())
		if ver == nil {
			continue
		}
		if appPath == "" || CompareAppVersion(ver, latestVer) > 0 {
			appPath = path.Join(resources, "app")
			isPatched = dirIsPatched
			latestVer = ver
		}
	}

	if appPath == "" {
		return nil
	}

	if branch == "" {
		branch = GetBranch(p)
	}

	return &DiscordInstall{
		path:             p,
		branch:           branch,
		appPath:          appPath,
		isPatched:        isPatched,
		isFlatpak:        false,
		isSystemElectron: false,
	}
}

func FindDiscords() []any {
	var discords []any

	appData := os.Getenv("LOCALAPPDATA")
	if appData == "" {
		Log.Error("%LOCALAPPDATA% is empty???????")
		return discords
	}

	for branch, dirname := range windowsNames {
		p := path.Join(appData, dirname)
		if discord := ParseDiscord(p, branch); discord != nil {
			Log.Debug("Found Discord install at ", p)
			discords = append(discords, discord)
		}
	}
	return discords
}

func PreparePatch(di *DiscordInstall) {
	killLock.Lock()
	defer killLock.Unlock()

	name := windowsNames[di.branch]
	Log.Debug("Trying to kill", name)

	// Kill main process
	pid := findProcessIdByName(name + ".exe")
	if pid != 0 {
		proc, err := os.FindProcess(int(pid))
		if err == nil {
			Log.Debug("Killing main process", name, "pid", pid)
			err = proc.Kill()
			if err != nil {
				Log.Warn("Failed to kill", name+":", err)
			} else {
				Log.Debug("Waiting for", name, "to exit")
				_, _ = proc.Wait()
			}
		}
	}

	// Also kill any remaining Discord-related processes
	for _, suffix := range []string{".exe"} {
		for _, procName := range []string{name, name + " (1)", name + " (2)"} {
			pid = findProcessIdByName(procName + suffix)
			if pid != 0 {
				proc, err := os.FindProcess(int(pid))
				if err == nil {
					Log.Debug("Killing extra process", procName, "pid", pid)
					_ = proc.Kill()
					_, _ = proc.Wait()
				}
			}
		}
	}

	// Wait a bit for file handles to release
	Log.Debug("Waiting 500ms for file handles to release...")
	time.Sleep(500 * time.Millisecond)
}

func FixOwnership(_ string) error {
	return nil
}

// https://github.com/Vencord/Installer/issues/9

func CheckScuffedInstall() bool {
	username := os.Getenv("USERNAME")
	programData := os.Getenv("PROGRAMDATA")
	for _, discordName := range windowsNames {
		if ExistsFile(path.Join(programData, username, discordName)) {
			HandleScuffedInstall()
			return true
		}
	}
	return false
}

func findProcessIdByName(name string) uint32 {
	snapshot, err := windows.CreateToolhelp32Snapshot(windows.TH32CS_SNAPPROCESS, 0)
	if err != nil {
		return 0
	}

	procEntry := windows.ProcessEntry32{Size: uint32(unsafe.Sizeof(windows.ProcessEntry32{}))}
	for {
		err = windows.Process32Next(snapshot, &procEntry)
		if err != nil {
			return 0
		}
		if windows.UTF16ToString(procEntry.ExeFile[:]) == name {
			return procEntry.ProcessID
		}
	}
}
