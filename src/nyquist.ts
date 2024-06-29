/**
 * The nyquist frequency is half the sample rate.
 * The 0th coefficient is the DC offset, and therefore the maximum number of harmonics is:
 * ```(sampleRate/2)+1```
 */
export function maxHarmonics(sampleRate: number): number {
    return Math.max(Math.floor(sampleRate / 2) + 1, 1)
}

/**
 * The nyquist rate is twice the highest frequency.
 * The 0th coefficient is the DC offset, and therefore the minimum necessary sampleRate is:
 * ```2*(harmonics-1)```
 */
export function minSampleRate(harmonics: number): number {
    return Math.max((Math.ceil(harmonics) - 1) * 2, 1)
}
