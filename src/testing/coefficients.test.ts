import * as coefficients from './coefficients.ts'
import { assertSameCoefficients } from "./assertions.ts";

Deno.test('coefficients.sine', () => {
    const harmonics = 10
    const actual = coefficients.sine(harmonics)
    const expected = {
        real: new Float32Array(harmonics),
        imaginary: new Float32Array(harmonics)
    }
    expected.imaginary[1] = -1
    assertSameCoefficients(actual, expected)
})

Deno.test('coefficients.cosine', () => {
    const harmonics = 10
    const actual = coefficients.cosine(harmonics)
    const expected = {
        real: new Float32Array(harmonics),
        imaginary: new Float32Array(harmonics)
    }
    expected.real[1] = 1
    assertSameCoefficients(actual, expected)
})

Deno.test('coefficients.sawtooth', () => {
    const harmonics = 10
    const expected = {
        real: new Float32Array(harmonics),
        imaginary: new Float32Array([
            0,
            0.6366,
            0.3183,
            0.2122,
            0.1591,
            0.1273,
            0.1061,
            0.0909,
            0.0795,
            0.0707
        ])
    }
    const actual = coefficients.sawtooth(10)
    assertSameCoefficients(actual, expected)
})

Deno.test('coefficients.square', () => {
    const harmonics = 10
    const expected = {
        real: new Float32Array(harmonics),
        imaginary: new Float32Array([
            0,
            1.2732,
            0,
            0.4244,
            0,
            0.2546,
            0,
            0.1819,
            0,
            0.1414
        ])
    }
    const actual = coefficients.square(10)
    assertSameCoefficients(actual, expected)
})