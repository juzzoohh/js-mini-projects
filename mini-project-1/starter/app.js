// Function

console.log(perpangkatan()); // akan terjadi error
console.log(sayHello()); // tidak error

// Function Definition
const perpangkatan = function(n){
  return n * n;
}

// Function Declaration 
function perpangkatan(n){
  return n * n;
}
console.log(perpangkatan(2));

// ES6 Arrow Function
const perpangkatan = (n) => {
  return n * n;
}

// versi singkat nya, sama saja waw (tapi tidak disarankan ketika kerja tim)
const perpangkatan = n => n * n;

// Function side-effect
function sayHello(){
  alert("Hello"); 

  return 0; 
}

// Default Value di dalam Function
function perpangkatan(n){
  if (n == undefined){
    return 2*2;
  }

  return n*n // ini tidak akan dijalankan jika kondisi IF terpenuhi
}

// Atau bisa juga seperti ini 
function perpangkatan(n = 2){ // defaulnya adalah 2
  return n*n 
}
console.log(perpangkatan())

// Diubah ke bentuk function ES6
const changeProjectHeadingTitle = (title) => {
  const projectTitle = document.querySelector("#project-title");
  if (typeof title === "string"){ // menegaskan tipe data nya
    projectTitle.textContent = title;
  } else {
    console.error("Argumen kamu bukan tipe data 'string'")
  }
}

changeProjectHeadingTitle("Javascript is cool!")