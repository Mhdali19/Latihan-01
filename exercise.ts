// Soal 1 
// Menghitung Luas Persegi Panjang
// Rumus = panjang * lebar 

let panjang = 15; 
let lebar = 4; 
let areaRectangle = panjang * lebar;
console.log(`Luas Persegi Panjang Adalah ${areaRectangle}`); 

// Soal 2
// Menghitung Keliling Persegi Panjang 
// Rumus = 2 * (panjang + lebar)

let panjangForKeliling = 3; 
let lebarForKeliling = 5; 
let perimeterRectangle = 2 * (panjangForKeliling + lebarForKeliling);
console.log(`Keliling Persegi Panjang Adalah ${perimeterRectangle}`); 

// Soal 3
// Menghitung diameter, circumference and area of a circle.
// Rumus = diameter = 2 * radius, circumference = 2 * n * radius, area = n * (radius ** 2)

let n = 3.141592653589793; 

let radius = 5; 
let diameter = 2 * radius; 
let circumference = 2 * n * radius;

let area = n * (radius ** 2); 
console.log(`
    Diameter = ${diameter}, 
    Circumference = ${circumference},
    Area = ${area}.
    `)

// Soal 4 
// Menghitung angleofTriangle
// Rumus = angleofTriangle = 180 - (a +  b)

let as = 80; 
let ba = 65; 
let angleOfTriangle = 180 - (as + ba); 
console.log(angleOfTriangle); 

// Soal 5 
// Mengonversi hari ke Tahun Bulan Hari 
// 400 Hari 
//  1 Tahun = 365 hari 
//  1 Bulan = 30 hari 

let days = 366; 

const tahun = 365; 
const bulan = 30; 

let jumlahTahun = Math.floor(days / tahun);

let sisaHari = days % tahun; 

let jumlahBulan = Math.floor(sisaHari / bulan); 

let jumlahHari = sisaHari % bulan; 

console.log(`${days} hari adalah ${jumlahTahun} Tahun, ${jumlahBulan} Bulan, ${jumlahHari} Hari`)

// Soal 6 
// Selisih Antar Dua Tanggal 
// Mendefinisikan dua tanggal langsung

const date1: Date = new Date(2022, 0, 22);
const date2: Date = new Date(2022, 0, 20); 

const timeDifference: number = date1.getTime() - date2.getTime();

const dayDifference: number = timeDifference / (1000 * 60 * 60 * 24);

console.log(dayDifference); 


 