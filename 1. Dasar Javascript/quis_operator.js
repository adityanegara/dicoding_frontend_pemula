const scoreChecker = score =>{
    let result;
    if(score >= 90){
        result = 'Selamat! Anda mendapatkan nilai A.';
        console.log(result);
    }else if((score >= 80) && (score <=89)){
        result = 'Anda mendapatkan nilai B.';
        console.log(result);
    }else if((score >= 70) && (score <=79)){
        result = 'Anda mendapatkan nilai C.';
        console.log(result);
    }else if((score >= 60) && (score <=69)){
        result = 'Anda mendapatkan nilai D.';
        console.log(result);
    }else if(score < 60){
        result = 'Anda mendapatkan nilai E.';
        console.log(result);

    }
}

scoreChecker(59);