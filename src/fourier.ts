import { maxHarmonics } from "./nyquist.ts"
import type { Curve } from "./types.ts"

/**
 * Analyzes a wave, as represented by an array of samples, and returns its real and imaginary coefficients.
 * - Can specify the number of ```harmonics``` to output, though harmonics above the nyquist limit will be 0.
 * - Can also specify the ```threshold``` by which small numbers are rounded to 0.
 */
export function fourier(curve: Curve, {
    harmonics = 100,
    threshold = 0.01
} = {}): { real: Float32Array, imaginary: Float32Array } {
    const real = new Float32Array(harmonics)
    const imaginary = new Float32Array(harmonics)
    const sampleRate = curve.length

    const analyzableHarmonics = Math.min(maxHarmonics(curve.length), harmonics)

    for (let h = 0; h < analyzableHarmonics; h++) {
        for (let i = 0; i < sampleRate; i++) {
            const phi = Math.PI * 2 * h * (i + 0.5) / sampleRate
            real[h] += Math.cos(phi) * curve[i]
            imaginary[h] -= Math.sin(phi) * curve[i]
        }
        real[h] *= 2 / sampleRate
        imaginary[h] *= 2 / sampleRate
        if (Math.abs(real[h]) < threshold) real[h] = 0
        if (Math.abs(imaginary[h]) < threshold) imaginary[h] = 0
    }
    return { real, imaginary }
}