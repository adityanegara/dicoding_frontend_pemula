const welcome = (message) =>{
    alert(message);
    const contentElement = document.querySelector('.contents');
    contentElement.removeAttribute('hidden');
}

const increment = () =>{
    const countElement = document.getElementById('count');
    countElement.innerText++;
    if(countElement.innerText == 7){
        const hiddenMessage = document.createElement("h4");
        hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi";
        const image = document.createElement("img");
        image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");
        const contents = document.querySelector(".contents");
        contents.appendChild(hiddenMessage).appendChild(image);

    }
}

const test = () =>{
    console.log("test");
}

// document.body.onload = welcome('Hello world');
// document.getElementById('incrementButton').onclick = increment;
document.getElementById("incrementButton").addEventListener('click', increment);
document.getElementById("incrementButton").addEventListener('click', test());
window.addEventListener('load', welcome("Hello World"));
