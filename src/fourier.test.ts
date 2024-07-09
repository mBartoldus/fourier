import { fourier } from "./fourier.ts"
import { assertSameCoefficients, assertSameCurve } from "./testing/assertions.ts";
import { curves, coefficients, waveforms } from './testing/waves.ts'
import { inverseFourier } from "./inverseFourier.ts";

for (const w of waveforms)
    Deno.test(`fourier: should analyze ${w}`, () => {
        const sampleRate = 1000
        const harmonics = 100
        const expected = coefficients[w](harmonics)
        const actual = fourier(curves[w](sampleRate), { harmonics })
        assertSameCoefficients(actual, expected)
    })

Deno.test('fourier: should handle DC offset', () => {
    const flat = new Float32Array(100).fill(1)
    const actual = fourier(flat, { harmonics: 5 })
    const expected = {
        real: [1, 0, 0, 0, 0],
        imaginary: [0, 0, 0, 0, 0],
    }
    assertSameCoefficients(actual, expected)
})

Deno.test('fourier: should accurately recreate coefficients from inverseFourier', () => {
    const sampleRate = 100
    const harmonics = 50
    const expected = coefficients.square(harmonics)
    const curve = inverseFourier({ ...expected, sampleRate })
    const actual = fourier(curve, { harmonics })
    assertSameCoefficients(actual, expected)
})

Deno.test('fourier: should accurately recreate coefficients from random inverseFourier', () => {
    const sampleRate = 100
    const harmonics = 5
    const expected = {
        real: new Float32Array(harmonics),
        imaginary: new Float32Array(harmonics),
    }
    for (let h = 0; h < harmonics; h++) {
        expected.real[h] = (Math.random() * 2) - 1
        expected.imaginary[h] = (Math.random() * 2) - 1
    }
    expected.imaginary[0] = 0

    const curve = inverseFourier({ ...expected, sampleRate })
    const actual = fourier(curve, { harmonics })
    assertSameCoefficients(actual, expected)
})

Deno.test('fourier: should round to a given precision', () => {
    const sampleRate = 100
    const harmonics = 50
    const curve = inverseFourier({
        real: [1.45, 0, 0, 0, 0],
        imaginary: [0, -0.999999, 0, 0, 0],
        sampleRate
    })
    const rondedTo1 = fourier(curve, { harmonics, roundToNearest: 1 })
    assertSameCoefficients(rondedTo1, {
        real: [1, 0, 0, 0, 0],
        imaginary: [0, -1, 0, 0, 0],
    }, 0)
    const roundedToHalf = fourier(curve, { harmonics, roundToNearest: 0.5 })
    assertSameCoefficients(roundedToHalf, {
        real: [1.5, 0, 0, 0, 0],
        imaginary: [0, -1, 0, 0, 0],
    }, 0)
})

Deno.test('fourier: should set coefficients within a given threshold to zero', () => {
    const sampleRate = 100
    const harmonics = 50
    const curve = inverseFourier({
        real: [0.5, 0, 0, 0, 0],
        imaginary: [0, -1, 0, 0.1, 0],
        sampleRate
    })
    const actual = fourier(curve, { harmonics, roundToNearest: 0.1, threshold: 0.2 })
    assertSameCoefficients(actual, {
        real: [0.5, 0, 0, 0, 0],
        imaginary: [0, -1, 0, 0, 0],
    }, 0)
})