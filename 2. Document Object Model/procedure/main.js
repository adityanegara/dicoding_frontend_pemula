const daftar = document.getElementById("daftar");
const lastElement = document.createElement("li");
const firstElement = document.createElement("li");


const itemAwal = document.getElementById("awal");
lastElement.innerText = "Selamat menikmati!";
firstElement.innerText = "Nyalakan Kompor!";
daftar.appendChild(lastElement);
daftar.insertBefore(firstElement, itemAwal);

