import * as curves from './curves.ts'
import { assertSameCurve } from "./assertions.ts";

Deno.test('curves.sine', () => {
    const sampleRate = 10
    const actual = curves.sine(sampleRate)
    const expected = new Float32Array([
        0.3090,
        0.8090,
        1,
        0.8090,
        0.3090,
        -0.3090,
        -0.8090,
        -1,
        -0.8090,
        -0.3090
    ])
    assertSameCurve(actual, expected)
})


Deno.test('curves.cosine', () => {
    const sampleRate = 10
    const actual = curves.cosine(sampleRate)
    const expected = new Float32Array([
        0.9510,
        0.5877,
        0,
        -0.5877,
        -0.9510,
        -0.9510,
        -0.5877,
        0,
        0.5877,
        0.9510
    ])
    assertSameCurve(actual, expected)
})

Deno.test('curves.sawtooth', () => {
    const sampleRate = 4
    const actual = curves.sawtooth(sampleRate)
    const expected = new Float32Array([
        -0.75, -0.25, 0.25, 0.75
    ])
    assertSameCurve(actual, expected)
})

Deno.test('curves.square', () => {
    const sampleRate = 10
    const actual = curves.square(sampleRate)
    const expected = new Float32Array([
        -1, -1, -1, -1, -1,
        1, 1, 1, 1, 1
    ])
    assertSameCurve(actual, expected)
})
