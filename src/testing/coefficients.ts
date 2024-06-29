
export function sine(harmonics: number) {
    const real = new Float32Array(harmonics)
    const imaginary = new Float32Array(harmonics)
    imaginary[1] = -1
    return { real, imaginary }
}

export function cosine(harmonics: number) {
    const real = new Float32Array(harmonics)
    const imaginary = new Float32Array(harmonics)
    real[1] = 1
    return { real, imaginary }
}

export function square(harmonics: number) {
    const real = new Float32Array(harmonics)
    const imaginary = new Float32Array(harmonics)
    for (let i = 1; i < harmonics; i += 2)
        imaginary[i] = (4 / Math.PI) / i
    return { real, imaginary }
}

export function sawtooth(harmonics: number) {
    const real = new Float32Array(harmonics)
    const imaginary = new Float32Array(harmonics)
    for (let i = 1; i < harmonics; i++)
        imaginary[i] = (2 / Math.PI) / i
    return { real, imaginary }
}
