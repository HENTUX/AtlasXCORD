import { Settings } from "@api/Settings";

let arabicModeSnapshot: boolean | undefined;

export function isArabicMode(): boolean {
    if (arabicModeSnapshot !== undefined) return arabicModeSnapshot;

    const pluginSettings = Settings.plugins as Record<string, Record<string, unknown>> | undefined;
    const value = pluginSettings?.Settings?.arabicMode === true;
    if (pluginSettings?.Settings != null) arabicModeSnapshot = value;
    return value;
}

export function t(ar: string, en: string): string {
    return isArabicMode() ? ar : en;
}