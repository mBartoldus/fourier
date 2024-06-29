/**
 * A wave as represented by a series of samples.
 * When returned from a function, a curve in this library will be a ```Float32Array```.
 * However, as an argument any ```ArrayLike<number>``` will do.
 */
export type Curve = ArrayLike<number>

/**
 * A wave as represented by its real and imaginary coefficients.
 * When returned from a function, this library will use ```Float32Array```.
 * However, as an argument any ```ArrayLike<number>``` will do.
 */
export interface Coefficients {
    real: ArrayLike<number>
    imaginary: ArrayLike<number>
}

/**
 * Options for reconstructing a wave from its real and imaginary coefficients.
 * The length of the curve is determined by ```sampleRate```, which defaults to 100.
 */
export interface InverseFourierOptions extends Partial<Coefficients> {
    sampleRate?: number
}

/**
 * Options for analyzing a wave.
 * The number of coefficients in the output is determined by ```harmonics```, which defaults to 100.
 * The threshold by which small numbers are rounded to 0 is determined by ```threshold```, which defaults to 0.01.
 */
export interface FourierOptions {
    harmonics?: number
    threshold?: number
}
