import { useEffect, useState } from 'react'

export type PerformanceLevel = 'checking' | 'low' | 'ok'

interface DeviceSignals {
    score: number
    details: {
        cpu: number
        ram: number
        network: number
        benchmark: number
    }
}

// Benchmark JS : mesure le temps pour 10 000 opérations
function runBenchmark(): number {
    const start = performance.now()
    let x = 0
    for (let i = 0; i < 10_000; i++) x += Math.sqrt(i) * Math.random()
    const elapsed = performance.now() - start
    // < 5ms → excellent (100), > 50ms → nul (0)
    return Math.max(0, Math.min(100, 100 - (elapsed - 5) * (100 / 45)))
}

function getSignals(): DeviceSignals {
    // CPU : ≥ 4 cœurs = 100, 2 = 50, 1 = 0
    const cores = navigator.hardwareConcurrency ?? 2
    const cpu = Math.min(100, (cores / 4) * 100)

    // RAM : ≥ 4 Go = 100, 2 = 50, < 1 = 0 (API arrondit à 0.25/0.5/1/2/4/8)
    const ram = Math.min(100, ((navigator as any).deviceMemory ?? 2) / 4 * 100)

    // Réseau : 4g/wifi = 100, 3g = 50, 2g/slow-2g = 0
    const conn = (navigator as any).connection
    const effectiveType: string = conn?.effectiveType ?? '4g'
    const networkMap: Record<string, number> = {
        '4g': 100, '3g': 50, '2g': 10, 'slow-2g': 0
    }
    const network = networkMap[effectiveType] ?? 100

    const benchmark = runBenchmark()

    // Pondération : benchmark + CPU sont les plus critiques pour les animations
    const score =
        cpu       * 0.25 +
        ram       * 0.20 +
        network   * 0.15 +
        benchmark * 0.40

    return { score, details: { cpu, ram, network, benchmark } }
}

export function useDevicePerformance(threshold = 40): {
    level: PerformanceLevel
    score: number
} {
    const [level, setLevel] = useState<PerformanceLevel>('checking')
    const [score, setScore] = useState(0)

    useEffect(() => {
        // Délai court pour laisser le navigateur s'initialiser
        const timer = setTimeout(() => {
            const { score } = getSignals()
            setScore(Math.round(score))
            setLevel(score >= threshold ? 'ok' : 'low')
        }, 300)

        return () => clearTimeout(timer)
    }, [threshold])

    return { level, score }
}