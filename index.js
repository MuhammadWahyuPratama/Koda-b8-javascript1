// Membuat program hitung luas dan keliling lingkaran


function hitungLingkaran(r) {
    let pi
    if (typeof r !== "number") {
        console.log("r must be a number")
        return
    }


    if (r % 22 / 7 == 0) {
        pi = 22 / 7
    } else {
        pi = 3.14
    }


    const luasLingkaran = pi * r * r
    const kelilingLingkaran = 2 * pi * r


    console.log(luasLingkaran)
    console.log(kelilingLingkaran)

}

hitungLingkaran(21)