import { assertAlmostEquals } from "https://deno.land/std@0.209.0/assert/mod.ts";
import type { Curve, Coefficients } from "../types.ts";

export function assertSameCurve(actual: Curve, expected: Curve, tolerance = 0.01) {
    for(let i = 0; i<expected.length; i++)
        assertAlmostEquals(actual[i], expected[i], tolerance)
}

export function assertSameCoefficients(actual: Coefficients, expected: Coefficients, tolerance = 0.01) {
    assertSameCurve(actual.real, expected.real, tolerance)
    assertSameCurve(actual.imaginary, expected.imaginary, tolerance)
}