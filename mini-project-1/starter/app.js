// JavaScript Built-in Functions Reference
alert("Ini adalah sebuah alert ");

let str = "JavaScript";
console.log(str.charAt(4));

// Control Flow

let yourName = String(prompt("Hai, tolong tulis namamu dibawah ini yaa"));
alert(`Halo ${yourName} Selamat datang di website saya yaa`);

Conditional Execution
let yourYearOfBirth = Number(prompt("tuliskan berapa tahun kelahiran kamu? (yyyy)"))
if (2025 - yourYearOfBirth < 17){
  alert("Kamu belum cukup umur, silahkan keluar dari website ini");
} else if (2025 - yourYearOfBirth >= 17 && 2025 - yourYearOfBirth <= 40){
  alert("Selamat, kamu sudah dewasa dan cukup umur untuk mengakses website ini")
} else {
  alert("batas umur input hanya 40 tahun")
}

// Ternary Operator
? = jika memenuhi maka
: = jika tidak terpenuhi maka

// if else method
let yourYearOfBirth = Number(prompt("tuliskan berapa tahun kelahiran kamu? (yyyy)"))
if (2025 - yourYearOfBirth < 17){
  alert("Kamu belum cukup umur, silahkan keluar dari website ini");
} else {
  alert("kamu diizinkan")
}
// Ternary Method
2025 - yourYearOfBirth < 17 ? alert("Kamu belum cukup umur, silahkan keluar dari website ini") : alert("kamu diizinkan");


// Swict Case

let cuacaHariIni = prompt("Tolong tuliskan cuaca hari ini (hujan/cerah/mendung)");

switch (cuacaHariIni) {
  case "mendung":
    alert("Lebih baik kamu segera cari tempat teduh");
    break;
  case "hujan":
    alert("berteduh sejenak saja untuk menghindari hujan");
    break;
  case "cerah":
    alert("Silahkan lanjutkan aktifitas jika diluar ruangan");
    break;
  default:
    alert("Tolong input dengan pilihan (hujan/cerah/mendung)");
}

// Looping
let count = 0;

while = dicek dahulu apakah terpenuhi atau tidak. jika tidak maka tidak dilakukan
while (count <= 12){
  console.log(count);

  count = count + 2;
}

do while = melakukan dahulu, baru di cek apakah terpenuhi atau tidak, jika terpenuhi maka lanjut
do {
    console.log(count);

    count = count + 2;
} while(count <= 12)

// For Loop

for (let i = 0; i <= 100; i = i +2) {
  console.log(i)
}

for (let i = "*"; i.length <= 10; i= i+ "*") {
  console.log(i)
}
const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title baru dari JS File"