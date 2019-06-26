// create secretNumber
var secretNumber = 8;

// ask user to tebak angka
var tebak = Number(prompt("Coba tebak angka"));
alert(`Tebakan anda : ${tebak}`);

// check tebak angka
if (tebak === secretNumber) {
  alert("Tebakan anda benar!");
} else if (tebak < secretNumber) {
  alert("Tebakan anda terlalu rendah")
} else {
  alert("Tebakan anda terlalu tinggi")
}