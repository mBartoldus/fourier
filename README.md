A small library for performing discrete fourier transforms and inverse fourier
transforms.

## fourier
The fourier function returns the real and imaginary coefficients of a given curve.
```javascript
// a sine wave whose wavelength spans the array
const sine = new Float32Array(100);
for (let i = 0; i < sine.length; i++)
    sine[i] = Math.PI * 2 * i / sine.length

fourier(sine, { harmonics: 2 })
// returns {
//     real: [0, 0],
//     imaginary: [0, -1]
// }
```
if the number of harmonics is not specified, the function will return 100 harmonics by default.
```javascript
fourier(sine)
// returns {
//     real: [0, 0, 0, 0, 0, 0, 0, 0 ...],
//     imaginary: [0, -1, 0, 0, 0, 0 ...]
// }
```

## inverseFourier
The inverseFourier function reconstructs a curve from the given real and/or imaginary coefficients.
```javascript
// imaginary coefficients of a square wave
const imaginary = new Float32Array(100)
for (let i = 1; i < imaginary.length; i += 2)
    imaginary[i] = (4 / Math.PI) / i

inverseFourier({ imaginary, sampleRate: 4 })
// returns [-1, -1, 1, 1]
```
If the sampleRate is not specified, the function will return an array of length 100 by default.
```javascript
inverseFourier({ imaginary })
// returns [-1, -1, -1, -1, -1, -1, -1, ...]
```
