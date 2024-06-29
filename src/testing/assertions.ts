import { assertAlmostEquals } from "https://deno.land/std@0.209.0/assert/mod.ts";
import type { Curve, Coefficients } from "../types.ts";

export function assertSameCurve(actual: Curve, expected: Curve) {
    for(let i = 0; i<expected.length; i++)
        assertAlmostEquals(actual[i], expected[i], 0.01)
}

export function assertSameCoefficients(actual: Coefficients, expected: Coefficients) {
    assertSameCurve(actual.real, expected.real)
    assertSameCurve(actual.imaginary, expected.imaginary)
}