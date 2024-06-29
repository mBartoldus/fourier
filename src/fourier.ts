import { maxHarmonics } from "./nyquist.ts"
import type { Curve } from "./types.ts"

export function fourier(curve: Curve, {
    harmonics = 100,
    cutoff = 0.01
} = {}) {
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
        if (Math.abs(real[h]) < cutoff) real[h] = 0
        if (Math.abs(imaginary[h]) < cutoff) imaginary[h] = 0
    }
    return { real, imaginary }
}





// export function fourier(curve: Curve, {
//     coefficients = maxCoefficients(curve.length),
//     cutoff = 0.000001
// } = {}) {
//     const real = new Float32Array(coefficients)
//     const imaginary = new Float32Array(coefficients)

//     const sampleRate = curve.length
//     const nyquistFrequency = sampleRate / 2

//     for (let k = 0; k < nyquistFrequency; k++) {
//         let a = 0, b = 0

//         for (let n = 0; n < sampleRate; n++) {
//             const phi = Math.PI * 2 * k * n / sampleRate
//             a += curve[n] * Math.cos(phi)
//             b -= curve[n] * Math.sin(phi)
//         }

//         a *= 2
//         b *= 2

//         a /= sampleRate
//         b /= sampleRate

//         if (Math.abs(a) < cutoff) a = 0
//         if (Math.abs(b) < cutoff) b = 0

//         real[k + 1] = a
//         imaginary[k + 1] = b
//     }
//     return { real, imaginary }
// }

