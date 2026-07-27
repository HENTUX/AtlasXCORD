/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 HENTUX & AtlasXCORD Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import gitHash from "~git-hash";
import gitRemote from "~git-remote";

export { gitHash, gitRemote };

export const gitHashShort = gitHash.slice(0, 7);
export const VENCORD_USER_AGENT = `AtlasXCORD/${gitHash}${gitRemote ? ` (https://github.com/${gitRemote})` : ""}`;
export const VENCORD_USER_AGENT_HASHLESS = `AtlasXCORD${gitRemote ? ` (https://github.com/${gitRemote})` : ""}`;
