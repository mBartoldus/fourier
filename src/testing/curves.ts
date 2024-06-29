import { phi } from "../phi.ts"

export function sine(sampleRate: number) {
    const curve = new Float32Array(sampleRate)
    for (let i = 0; i < sampleRate; i++)
        curve[i] = Math.sin(phi(i, sampleRate))
    return curve
}

export function cosine(sampleRate: number) {
    const curve = new Float32Array(sampleRate)
    for (let i = 0; i < sampleRate; i++)
        curve[i] = Math.cos(phi(i, sampleRate))
    return curve
}

export function square(sampleRate: number) {
    const curve = new Float32Array(sampleRate)
    for (let i = 0; i < sampleRate / 2; i++)
        curve[i] = -1
    for (let i = sampleRate / 2; i < sampleRate; i++)
        curve[i] = 1
    return curve
}

export function sawtooth(sampleRate: number) {
    const curve = new Float32Array(sampleRate)
    for (let i = 0; i < sampleRate; i++)
        curve[i] = (2 * (i+0.5) / sampleRate) - 1
    return curve
}