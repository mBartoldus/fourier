/**
 * The nyquist frequency is half the sample rate.
 */
export function maxHarmonics(sampleRate: number): number {
    return Math.max(Math.floor(sampleRate / 2), 1)
}

/**
 * The nyquist rate is twice the highest frequency.
 */
export function minSampleRate(harmonics: number): number {
    return Math.max((Math.ceil(harmonics)) * 2, 1)
}
