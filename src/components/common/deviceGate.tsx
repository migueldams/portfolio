// components/DeviceGuard.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { checkDevice, type DeviceReport } from '@/hooks/CheckDevice';

function BlockScreen({ report }: { report: DeviceReport }) {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black px-8">
            {/* Icône */}
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="4" width="32" height="40" rx="4" stroke="#f59e0b" strokeWidth="2.5"/>
                    <circle cx="24" cy="38" r="2" fill="#f59e0b"/>
                    <path d="M24 13v10" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M24 26v2" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
            </div>

            {/* Titre */}
            <h1 className="mb-3 text-center text-2xl font-bold text-white">
                Appareil non supporté
            </h1>
            <p className="mb-8 max-w-sm text-center text-sm text-white/50">
                Ce portfolio utilise des animations 3D avancées qui nécessitent
                un ordinateur de bureau pour une expérience optimale.
            </p>

            {/* Raisons détaillées */}
            <div className="w-full max-w-sm rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">
                    Détails
                </p>
                <ul className="flex flex-col gap-2">
                    {report.reasons.map((reason, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                            {reason}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <p className="mt-10 text-xs text-white/20">
                miguel.dev — Desktop only
            </p>
        </div>
    );
}

export function DeviceGuard({ children }: { children: React.ReactNode }) {
    // null = vérification pas encore faite (SSR safe)
    const [report, setReport] = useState<DeviceReport | null>(null);

    useEffect(() => {
        // Uniquement côté client
        setReport(checkDevice());
    }, []);

    // Pendant l'hydratation SSR → on affiche rien (évite flash)
    if (report === null) return null;

    if (report.blocked) return <BlockScreen report={report} />;

    return <>{children}</>;
}