const localStorageKey = "ADITYA_PRESS_FREQUENCY";
const incrementButton = document.getElementById("incrementButton");
const clearButton = document.getElementById("clear");
const countDisplay = document.getElementById("count");

const checkSupportStorage = () =>{
    if(typeof(Storage) !== "undefined"){
        return true;
    }else{
        return false;
    }
}

const checkLocalStorageItem = (item) =>{
    if(localStorage.getItem(item)){
        return true;
    }else{
        return false;
    }
}


if(checkSupportStorage){
    console.log("storage can");
    if(checkLocalStorageItem(localStorageKey) != true){
        localStorage.setItem(localStorageKey, 0);
    }else{
        countDisplay.innerText = localStorage.getItem(localStorageKey);

        incrementButton.addEventListener('click', function(){
            let count = localStorage.getItem(localStorageKey);
            count++;
            localStorage.setItem(localStorageKey, count);
            countDisplay.innerText = localStorage.getItem(localStorageKey);
        })

        clearButton.addEventListener('click', function(){
            localStorage.removeItem(localStorageKey);
            countDisplay.innerText = 0;
        });
    }
}else{
    alert("Browser Tidak Support");
}


