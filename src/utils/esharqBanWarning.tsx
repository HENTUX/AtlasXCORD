/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Notice } from "@components/Notice";
import { t } from "@utils/esharqI18n";

/**
 * A reusable bilingual "ΓÜá∩╕Å this may get you banned" notice for Esharq plugins whose
 * behaviour can violate Discord's Terms of Service (voice moderation bypass, fake nitro,
 * silent delete/edit, ΓÇª). Drop it at the top of a plugin's settings via an
 * `OptionType.COMPONENT` entry so the warning is visible before the user enables anything.
 *
 * Pass custom `ar`/`en` text for a plugin-specific message, or omit for the generic one.
 */
export function BanRiskWarning({ ar, en }: { ar?: string; en?: string; } = {}) {
    return (
        <Notice variant="warning">
            {t(
                ar ?? "╪¬╪¡╪░┘è╪▒: ┘é╪» ┘è╪«╪º┘ä┘ü ┘ç╪░╪º ╪º┘ä╪│┘ä┘ê┘â ╪┤╪▒┘ê╪╖ ╪«╪»┘à╪⌐ Discord ┘ê┘è╪╣╪▒┘æ╪╢ ╪¡╪│╪º╪¿┘â ┘ä┘ä╪¡╪╕╪▒. ╪º╪│╪¬╪«╪»┘à┘ç╪º ╪╣┘ä┘ë ┘à╪│╪ñ┘ê┘ä┘è╪¬┘â ╪º┘ä╪«╪º╪╡╪⌐.",
                en ?? "Warning: this behavior may violate Discord's Terms of Service and could get your account banned. Use at your own risk."
            )}
        </Notice>
    );
}