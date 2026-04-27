'use client'

import { useDevicePerformance } from '@/hooks/useDevicePerformences'
import { ReactNode } from 'react'

interface DeviceGateProps {
    children: ReactNode
    threshold?: number  // Score minimum pour accéder, défaut 40/100
}

export function DeviceGate({ children, threshold = 40 }: DeviceGateProps) {
    const { level, score } = useDevicePerformance(threshold)

    // Pendant la vérification : rien (le Loading.tsx prend le relais)
    if (level === 'checking') return null

    // Appareil trop faible : page de blocage
    if (level === 'low') return <LowEndBlocker score={score} />

    return <>{children}</>
}

function LowEndBlocker({ score }: { score: number }) {
    return (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-8 text-center">
            {/* Icône minimaliste */}
            <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border-2 border-amber-500/60 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                    </div>
                </div>
                {/* Score en arc */}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-white/30 tabular-nums tracking-widest">
                    {score}/100
                </span>
            </div>

            <h1 className="text-white text-2xl font-bold mb-3">
                Appareil non compatible
            </h1>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed mb-8">
                Ce portfolio utilise des animations avancées qui nécessitent
                un appareil plus récent pour une expérience optimale.
            </p>

            {/* Suggestions */}
            <div className="flex flex-col gap-2 w-full max-w-xs">
                {[
                    'Ouvrir sur un PC ou Mac',
                    'Utiliser Chrome ou Safari récent',
                    'Fermer les autres onglets',
                ].map((tip) => (
                    <div key={tip} className="flex items-center gap-3 text-left px-4 py-3 rounded-lg border border-white/5 bg-white/[0.03]">
                        <div className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                        <span className="text-white/50 text-xs">{tip}</span>
                    </div>
                ))}
            </div>

            {/* Lien de contournement discret */}
            <button
                onClick={() => window.location.search = '?bypass=1'}
                className="mt-10 text-[11px] text-white/15 hover:text-white/30 transition-colors underline underline-offset-4 cursor-pointer"
            >
                Continuer quand même
            </button>
        </div>
    )
}