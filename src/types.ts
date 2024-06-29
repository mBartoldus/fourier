export type Curve = ArrayLike<number>

export interface Coefficients {
    real: ArrayLike<number>
    imaginary: ArrayLike<number>
}

export interface InverseFourierOptions extends Partial<Coefficients> {
    sampleRate?: number
}

export interface FourierOptions {
    harmonics?: number
    cutoff?: number
}
