import { inverseFourier } from "./inverseFourier.ts"
import { assertSameCurve } from "./testing/assertions.ts";
import { curves, coefficients, waveforms } from './testing/waves.ts'

for (const w of waveforms)
    Deno.test(`inverseFourier: should produce ${w}`, () => {
        const sampleRate = 100
        const harmonics = 10000
        const expected = curves[w](sampleRate)
        const actual = inverseFourier({ ...coefficients[w](harmonics), sampleRate })
        assertSameCurve(actual, expected)
    })

Deno.test('inverseFourier: should handle DC offset', () => {
    const sampleRate = 100
    const expected = new Float32Array(sampleRate).fill(1)
    const actual = inverseFourier({ real: [1, 0], sampleRate })
    assertSameCurve(actual, expected)
})