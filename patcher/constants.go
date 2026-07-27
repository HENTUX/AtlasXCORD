/*
 * SPDX-License-Identifier: GPL-3.0
 * AtlasC2 Patcher, a cross platform gui/cli app for installing AtlasC2
 * Copyright (c) 2026 HENTUX and AtlasC2 contributors
 */

package main

import (
	"atlas2c/buildinfo"
	"image/color"
)

const ReleaseUrl = "https://api.github.com/repos/HENTUX/AtlasXCORD/releases/latest"
const ReleaseUrlFallback = "https://github.com/HENTUX/AtlasXCORD/releases/latest"
const InstallerReleaseUrl = "https://api.github.com/repos/HENTUX/AtlasXCORD/releases/latest"
const InstallerReleaseUrlFallback = "https://github.com/HENTUX/AtlasXCORD/releases/latest"

var UserAgent = "AtlasC2/" + buildinfo.InstallerGitHash + " (https://github.com/HENTUX/AtlasXCORD)"

var (
	DiscordGreen  = color.RGBA{R: 0x2D, G: 0x7C, B: 0x46, A: 0xFF}
	DiscordRed    = color.RGBA{R: 0xEC, G: 0x41, B: 0x44, A: 0xFF}
	DiscordBlue   = color.RGBA{R: 0x58, G: 0x65, B: 0xF2, A: 0xFF}
	DiscordYellow = color.RGBA{R: 0xfe, G: 0xe7, B: 0x5c, A: 0xff}
	AtlasC2Purple = color.RGBA{R: 0x9B, G: 0x59, B: 0xB6, A: 0xFF}
)

var LinuxDiscordNames = []string{
	"Discord",
	"DiscordPTB",
	"DiscordCanary",
	"DiscordDevelopment",
	"discord",
	"discordptb",
	"discordcanary",
	"discorddevelopment",
	"discord-ptb",
	"discord-canary",
	"discord-development",
	// Flatpak
	"com.discordapp.Discord",
	"com.discordapp.DiscordPTB",
	"com.discordapp.DiscordCanary",
	"com.discordapp.DiscordDevelopment",
}
