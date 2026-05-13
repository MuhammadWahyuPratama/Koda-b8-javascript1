// Membuat program hitung luas dan keliling lingkaran

const r = 21
let pi

if (r % 22 / 7 == 0) {
    pi = 22 / 7
} else {
    pi = 3.14
}

const luasLingkaran = pi * r * r
const kelilingLingkaran = 2 * pi * r


console.log(luasLingkaran)
console.log(kelilingLingkaran)
