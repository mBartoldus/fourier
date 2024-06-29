import { fourier } from "./fourier.ts"
import { assertSameCoefficients } from "./testing/assertions.ts";
import { curves, coefficients, waveforms } from './testing/waves.ts'

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