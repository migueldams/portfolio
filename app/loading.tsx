// app/loading.tsx  ← fichier spécial Next.js App Router
'use client'

import React, { useEffect, useRef, useState } from 'react'

function Loading() {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(true)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        // --- Progression simulée fluide ---
        // Monte vite jusqu'à 85%, puis s'arrête d'attendre le vrai chargement
        intervalRef.current = setInterval(() => {
            setProgress(prev => {
                if (prev >= 85) {
                    clearInterval(intervalRef.current!)
                    return prev
                }
                // Ralentit progressivement pour paraître naturel
                const step = Math.max(0.5, (85 - prev) * 0.06)
                return Math.min(prev + step, 85)
            })
        }, 100)

        // --- Attend que toutes les images + ressources soient chargées ---
        const handleFullyLoaded = () => {
            clearInterval(intervalRef.current!)

            // Monte à 100% rapidement
            setProgress(100)

            // Fade-out puis retire le composant du DOM
            setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.style.opacity = '0'
                }
                setTimeout(() => setVisible(false), 500)
            }, 300)
        }

        if (document.readyState === 'complete') {
            handleFullyLoaded()
        } else {
            window.addEventListener('load', handleFullyLoaded)
        }

        return () => {
            clearInterval(intervalRef.current!)
            window.removeEventListener('load', handleFullyLoaded)
        }
    }, [])

    if (!visible) return null

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
            style={{ transition: 'opacity 0.5s ease' }}
        >
            {/* Logo / nom — adapte selon ton projet */}
            <div className="mb-10 flex flex-col items-center gap-3">
                <span
                    className="text-amber-500 text-5xl font-black tracking-widest uppercase"
                    style={{
                        animation: 'pulse 2s ease-in-out infinite',
                    }}
                >
                    Miguel
                </span>
                <span className="text-white/40 text-xs tracking-[0.3em] uppercase">
                    Portfolio
                </span>
            </div>

            {/* Barre de progression */}
            <div className="w-48 h-4 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{
                        width: `${progress}%`,
                        transition: 'width 0.1s linear',
                        boxShadow: '0 0 8px rgba(245,158,11,0.8)',
                    }}
                />
            </div>

            {/* Pourcentage */}
            <p className="mt-4 text-white/30 text-xs tabular-nums">
                {Math.round(progress)}%
            </p>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.5; }
                }
            `}</style>
        </div>
    )
}

export default Loading