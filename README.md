<p align="center">
  <img src="https://i.imgur.com/mCAszJv.png" width="400">
</p>

<h1 align="center">
  <img src="https://i.imgur.com/AqYP7Vj.png" width="30">
  AtlasXCORD
</h1>

<p align="center">
  <a href="https://guns.lol/ovd">
    <img src="https://i.imgur.com/22FKvmB.png" width="40" alt="guns.lol">
    <img src="https://i.imgur.com/X5HVTzL.png" width="20" alt="Portfolio">
  </a>
  <a href="https://github.com/HENTUX/AtlasXCORD">
    <img src="https://img.shields.io/badge/GitHub-HENTUX-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

<p align="center">
  <b>168 custom plugins • Based on Equicord/Vencord • Built for power users</b>
</p>

---

> **WARNING** — This project is intended for **educational and advanced users only**. You must be **18+ years old** to use, fork, or contribute to this repository. Misuse of this software (e.g. raiding, harassment, self-botting in violation of Discord TOS) is strictly prohibited. The developers assume **no liability** for any account termination, damage, or consequences resulting from the use of this software. By using AtlasXCORD, you accept full responsibility for your actions.

---

## What is AtlasXCORD?

AtlasXCORD is a powerful Discord client mod based on Equicord with **168 custom plugins**, source patches, and a dedicated patcher. It gives you full control over your Discord experience.

## Features

- **168 Custom Plugins** — SilentDelete, SilentEdit, AutoPingAll, messageKeeper, SelfBot, and much more
- **Source Patches** — Popover fix, git updater fix, double-load guard
- **AtlasC2 Patcher** — One-click install GUI/CLI patcher with custom icons
- **Stable/PTB/Canary** — Supports all Discord branches
- **Regular Updates** — Active development

## Quick Install (AtlasC2 Patcher)

1. Download `AtlasC2.exe` from [Releases](https://github.com/HENTUX/AtlasXCORD/releases) or the `patcher/` folder
2. **Close Discord completely** (check system tray!)
3. Run `AtlasC2.exe` → Select your Discord → Click Install
4. Reopen Discord — done!

## Manual Install

```bash
git clone https://github.com/HENTUX/AtlasXCORD.git
cd AtlasXCORD
pnpm install
pnpm build desktop
npx @electron/asar pack "dist/desktop" "app.asar"
```
Copy `app.asar` to `%LOCALAPPDATA%\Discord\app-X.X.XXXX\resources\app.asar`

---

## Plugins (168)

<details>
<summary><b>Click to expand full plugin list</b></summary>

| Plugin | Plugin | Plugin |
|--------|--------|--------|
| `AppleMusicRPC` | `Shazam` | `TraktRichPresence` |
| `VoiceChatMention` | `ViewMembersWithRole` | `autoDeleteDms` |
| `autoPingAll` | `avatarImageMenu` | `bannersEverywhereFocusPause` |
| `bd_accountswitcher` | `bd_usernamehistory` | `bd_yabdp4nitro` |
| `BetterInbox` | `BigFileUploadEnhanced` | `blacklist` |
| `Boo` | `botRoleColor` | `channelScratchpad` |
| `characterCounterEnhanced` | `christmasCounter` | `completeDiscordQuest` |
| `ConsoleWatcher` | `crashHandlerEnhanced` | `customPluginsUpdater` |
| `customServerBanners` | `CustomStreamPreview` | `customUserCommands` |
| `deleteExportMessages` | `DirectMessageOpener` | `DiscordArabicizer` |
| `discordDevBanner` | `discordLyricsSpotifyStatus` | `dynamicChannelBackground` |
| `EmbedBuilder` | `esharqDiagnostics` | `Fake-Def` |
| `fakeProfile` | `fakeServerBoost` | `fixupSocialEmbeds` |
| `followGod` | `FriendFreaky` | `GalleryMode` |
| `guildCopier` | `laisse` | `localChannelAliases` |
| `localMessageEditor` | `MediaScroller` | `messageCleaner` |
| `messageKeeper` | `multiInstance` | `NitroSniper` |
| `noDefaultHangStatus` | `notifyUserChanges` | `passwordManager` |
| `PerformanceBoost` | `personalBadges` | `PlatformEmulator` |
| `prettyChannelNames` | `RPCStats` | `screenShareDevices` |
| `SelfBot` | `selfDestruct` | `Signature` |
| `silentDelete` | `SilentEdit` | `slowmodeAssistant` |
| `soundboardGod` | `soundboardPermissionsBypass.web` | `SpotifyRichPresencePP` |
| `streamWatcherIndicator` | `TempMessage` | `TokenCopier` |
| `tokenLogin` | `tosuRpc` | `UltimateProfileBadgeEditor` |
| `userPfpServerAvatarFix` | `vAnalyzer` | `vc-junkCleanup` |
| `viewRawEnhanced` | `voiceChannelLogger` | `YoutubeRPC` |
| `antiDeleteMessage` | `antiNickname` | `audioLimiter` |
| `autonickname` | `autoUnmute` | `autoVaporwave` |
| `avatarGrabber` | `betterScreenshare.desktop` | `boldText` |
| `calendar` | `channelWallpaper` | `clapText` |
| `clickSparkles` | `compactCompose` | `crtEffect` |
| `deepsearch` | `define` | `doNotLeak` |
| `doubleEmoji` | `DynamicIslande` | `fakeAccount` |
| `fakeDeafen` | `fakeDM` | `fakeFriends` |
| `fakePerm` | `fastDiscord` | `fastPFP` |
| `fastPing` | `fixScreenshare` | `friendsInVoice` |
| `gifConvertor` | `glassPanels` | `gridFloor` |
| `lastOnlineTracker` | `lazyMessageRender` | `leetText` |
| `liveWallpaper` | `lyricsStatus` | `memberListExport` |
| `messageStatistics` | `MetadataViewer` | `MicPro` |
| `myBadges` | `myToken` | `neonGlow` |
| `noDMWhileStreaming` | `noTelemetry` | `pastelMentions` |
| `philsPluginLibrary` | `pollMaker` | `profanityFilter` |
| `ProfileVisibility` | `quietHours` | `readableSpoilers` |
| `realtimeTimestamps` | `recentChannelSwitcher` | `scamLinkDetector` |
| `shipCalc` | `showID` | `silentGroupCall` |
| `smallCaps` | `smartBidi` | `smoothmessages` |
| `smoothType` | `soundcloudRichPresence` | `spaceOut` |
| `SpoofMessage` | `starfield` | `starify` |
| `streamProof` | `summarizeAI` | `sunsetChat` |
| `tempMail` | `textScreenshot` | `tsunderetalk` |
| `vaporScrollbar` | `vaporwaveText` | `vibeCheck` |
| `voiceChannelSearch` | `voiceGuard` | `voiceSettings` |
| `WebCordHardened` | `wikiLookup` | `ZeroWidthSanitizer` |
| `_micProEngine` | | |

</details>

---

## Source Patches

| File | Fix |
|------|-----|
| `src/plugins/_api/messagePopover.ts` | Fixed regex for popover buttons |
| `src/main/updater/git.ts` | Fixed git updater asar detection |
| `src/main/settings.ts` | Added removeHandler guards |
| `src/main/patcher.ts` | Double-load guard |

---

## Credits

- [Vencord](https://github.com/Vendicated/Vencord) — Original base
- [Equicord](https://github.com/Equicord/Equicord) — Plugin framework
- [HENTUX](https://guns.lol/ovd) — AtlasXCORD maintainer

---

<p align="center">
  <sub>Made with passion by <a href="https://guns.lol/ovd">HENTUX</a></sub>
</p>

---

<p align="center">
  <sub>&copy; 2026 HENTUX. All rights reserved. Unauthorized reproduction, redistribution, or use of this software is strictly prohibited.</sub>
</p>
<p align="center">
  <sub>This software is provided "as is" without warranty of any kind. Use at your own risk.</sub>
</p>
<p align="center">
  <sub>18+ only. By using this software you agree to take full responsibility for your actions.</sub>
</p>
