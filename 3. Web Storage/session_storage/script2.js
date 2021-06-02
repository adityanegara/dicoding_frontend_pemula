const SESSION_STORAGE_KEY = "ADITYA_PRESS_FREQUENCY";
const incrementButton = document.getElementById('incrementButton');
const clearButton = document.getElementById('clear');
const countDisplay = document.getElementById('count');

const checkBrowserSupportStorage = () =>{
    if(typeof(Storage) !== "undefined"){
        return true;
    }else{
        return false;
    }
}

const checkSessionStorageKey = (key) =>{
    if(sessionStorage.getItem(key) !== null){
        return true;
    }else{
        return false;
    }
}

if(checkBrowserSupportStorage){
   
    if(checkSessionStorageKey(SESSION_STORAGE_KEY) === false){
 
        sessionStorage.setItem(SESSION_STORAGE_KEY, 0);
    }else{
        countDisplay.innerText = sessionStorage.getItem(SESSION_STORAGE_KEY);

        incrementButton.addEventListener('click', function(){
            let count = sessionStorage.getItem(SESSION_STORAGE_KEY);
            count++;
            sessionStorage.setItem(SESSION_STORAGE_KEY, count);
            countDisplay.innerText = sessionStorage.getItem(SESSION_STORAGE_KEY);
        });

        clearButton.addEventListener('click', function(){
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
            countDisplay.innerText = 0;
        });
    }
}else{
    alert("Browser yang anda gunakan tidak mendukung web storage");
}