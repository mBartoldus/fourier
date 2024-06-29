import type { InverseFourierOptions } from "./types.ts"
import { phi } from "./phi.ts"

export function inverseFourier({
    real = [],
    imaginary = [],
    sampleRate = 100
}: InverseFourierOptions) {
    const curve = new Float32Array(sampleRate)
    const harmonics = Math.max(real.length, imaginary.length)
    for (let i = 0; i < sampleRate; i++) {
        for (let h = 0; h < harmonics; h++) {
            const p = phi(i, sampleRate, h)
            curve[i] += Math.cos(p) * (real[h] ?? 0)
            curve[i] -= Math.sin(p) * (imaginary[h] ?? 0)
        }
    }
    return curve
}