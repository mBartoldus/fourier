export function phi(
    sample: number,
    sampleRate: number,
    harmonic = 1,
) {
    return Math.PI * 2 * harmonic * (sample + 0.5) / sampleRate
}