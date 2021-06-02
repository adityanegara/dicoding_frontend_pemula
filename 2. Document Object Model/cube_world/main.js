const cubeImageElement = document.getElementById("gambar");
const commingSoonButtonElement  = document.getElementsByTagName("button")[3];
const linksElement = document.getElementById("links");
const dicodingLink = document.getElementById("dicodingLink");
const googleLink = document.getElementById("googleLink");
const buttonElements = document.getElementsByTagName("button");
cubeImageElement.setAttribute("width", "250px");
cubeImageElement.setAttribute("height", "250px");
commingSoonButtonElement.setAttribute("disabled", "disabled");
dicodingLink.innerText = "Belajar Pemrograman Di Dicoding";
googleLink.innerHTML = "<i> Pencarian google</i>";

for(let button of buttonElements){
    button.style.borderRadius = "45px";
}