// lib/device-check.ts
export type DeviceReport = {
    blocked: boolean;
    reasons: string[];
    details: {
        isMobile: boolean;
        ram: number | null;
        cores: number | null;
        connection: string | null;
    };
};

export function checkDevice(): DeviceReport {
    const reasons: string[] = [];

    // --- 1. Détection mobile / tablette (triple vérification) ---
    const ua = navigator.userAgent;
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isTouchDevice = navigator.maxTouchPoints > 1;
    const isSmallScreen = window.screen.width <= 1024;
    const isMobile = isMobileUA || (isTouchDevice && isSmallScreen);
    if (isMobile) reasons.push("Appareil mobile ou tablette non supporté");

    // --- 2. RAM (API pas dispo sur Firefox/Safari → null = on laisse passer) ---
    const ram = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? null;
    if (ram !== null && ram < 4) reasons.push(`RAM insuffisante (${ram} GB détectés, 4 GB requis)`);

    // --- 3. CPU cores ---
    const cores = navigator.hardwareConcurrency ?? null;
    if (cores !== null && cores < 4) reasons.push(`CPU trop faible (${cores} cores détectés, 4 requis)`);

    // --- 4. Connexion réseau ---
    type NetInfo = { effectiveType?: string };
    const connection = (navigator as Navigator & { connection?: NetInfo }).connection ?? null;
    const slowTypes = ["slow-2g", "2g", "3g"];
    const connType = connection?.effectiveType ?? null;
    if (connType && slowTypes.includes(connType)) {
        reasons.push(`Connexion trop lente (${connType.toUpperCase()} détecté)`);
    }

    return {
        blocked: reasons.length > 0,
        reasons,
        details: { isMobile, ram, cores, connection: connType },
    };
}