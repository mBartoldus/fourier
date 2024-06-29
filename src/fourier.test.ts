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