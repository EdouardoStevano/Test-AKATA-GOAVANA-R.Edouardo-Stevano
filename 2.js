function noConsecutiveDigits(N){
    let J = 0;
    J= N + 1 ;

    /* 
    * methodes à modifer : J > 990
    * methodes exactes : J ne doit pas contenir le même chiffre
    */  

    for (let k = 0; J > 990; k++) {
        J = J + k; 
        return ("N : " + N + ", J : " + J)
    }

    return ("N : " + N + ", J : " + J)
}

noConsecutiveDigits(990)