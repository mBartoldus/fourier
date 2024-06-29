import { assertSameCurve, assertSameCoefficients } from "./assertions.ts";
import { assertThrows } from "https://deno.land/std@0.209.0/assert/mod.ts";

Deno.test('assertSameCurve', () => {
    const expected = new Float32Array(100)
    for (let i = 0; i < expected.length; i++)
        expected[i] = (Math.random() * 2) - 1
    const actual = [...expected]
    assertSameCurve(actual, expected)

    const unexpected = [...expected]
    unexpected[5] = -100
    assertThrows(() => assertSameCurve(actual, unexpected))
})

Deno.test('assertSameCoefficients', () => {
    const expected = new Float32Array(100)
    for (let i = 0; i < expected.length; i++)
        expected[i] = (Math.random() * 2) - 1
    const actual = [...expected]
    assertSameCoefficients({
        real: actual,
        imaginary: actual
    }, {
        real: expected,
        imaginary: expected
    })

    const unexpected = [...expected]
    unexpected[5] = -100
    assertThrows(() => assertSameCoefficients({
        real: actual,
        imaginary: actual
    }, {
        real: unexpected,
        imaginary: unexpected
    }))
})