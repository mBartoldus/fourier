import { maxHarmonics, minSampleRate } from "./nyquist.ts";
import { assertStrictEquals } from "https://deno.land/std@0.209.0/assert/mod.ts";

Deno.test('maxHarmonics: should accurately calculate the number of safe harmonics for a given sampleRate', ()=>{
    assertStrictEquals(maxHarmonics(1), 1)
    assertStrictEquals(maxHarmonics(2), 2)
    assertStrictEquals(maxHarmonics(3), 2)
    assertStrictEquals(maxHarmonics(4), 3)
    assertStrictEquals(maxHarmonics(5), 3)
    assertStrictEquals(maxHarmonics(6), 4)
    assertStrictEquals(maxHarmonics(100), 51)
    assertStrictEquals(maxHarmonics(1000), 501)
})

Deno.test('minSampleRate: should accurately calculate the minimum sampleRate for a given number of harmonics', ()=>{
    assertStrictEquals(minSampleRate(1), 1)
    assertStrictEquals(minSampleRate(2), 2)
    assertStrictEquals(minSampleRate(3), 4)
    assertStrictEquals(minSampleRate(4), 6)
    assertStrictEquals(minSampleRate(100), 198)
    assertStrictEquals(minSampleRate(1000), 1998)
})