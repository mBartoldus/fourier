import type { InverseFourierOptions } from "./types.ts"
import { phi } from "./phi.ts"

/**
 * Recreates a wave, a represented by an array of samples, from its real and imaginary coefficients.
 * - Can specify the ```sampleRate``` (the length of the returned ```Float32Array```).
 */
export function inverseFourier({
    real = [],
    imaginary = [],
    sampleRate = 100
}: InverseFourierOptions): Float32Array {
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