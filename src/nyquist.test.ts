import { maxHarmonics, minSampleRate } from "./nyquist.ts";
import { assertStrictEquals } from "https://deno.land/std@0.209.0/assert/mod.ts";

Deno.test('maxHarmonics: should accurately calculate the number of safe harmonics for a given sampleRate', ()=>{
    assertStrictEquals(maxHarmonics(1), 1)
    assertStrictEquals(maxHarmonics(2), 1)
    assertStrictEquals(maxHarmonics(3), 1)
    assertStrictEquals(maxHarmonics(4), 2)
    assertStrictEquals(maxHarmonics(5), 2)
    assertStrictEquals(maxHarmonics(6), 3)
    assertStrictEquals(maxHarmonics(100), 50)
    assertStrictEquals(maxHarmonics(1000), 500)
})

Deno.test('minSampleRate: should accurately calculate the minimum sampleRate for a given number of harmonics', ()=>{
    assertStrictEquals(minSampleRate(0), 1)
    assertStrictEquals(minSampleRate(1), 2)
    assertStrictEquals(minSampleRate(2), 4)
    assertStrictEquals(minSampleRate(3), 6)
    assertStrictEquals(minSampleRate(4), 8)
    assertStrictEquals(minSampleRate(100), 200)
    assertStrictEquals(minSampleRate(1000), 2000)
})