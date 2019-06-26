// create secretNumber
var secretNumber = 8;

// ask user to tebak angka
var tebak = Number(prompt("Coba tebak angka"));
alert(`Tebakan anda : ${tebak}`);

// check tebak angka
if (tebak === secretNumber) {
  alert("Tebakan anda benar!");
}
// cek jika tebakan terlalu rendah dari secretNumber
else if (tebak < secretNumber) {
  alert("Tebakan anda terlalu rendah")
}
// cek jika tebakan terlalu tinggi dari secretNumber
else {
  alert("Tebakan anda terlalu tinggi")
}