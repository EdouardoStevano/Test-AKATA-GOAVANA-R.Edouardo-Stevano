function noConsecutiveDigits(N) {
    let J = N + 1;

    function hasConsecutiveDigits(num) {
        const numStr = num.toString();
        for (let i = 0; i < numStr.length - 1; i++) {
            if (numStr[i] === numStr[i + 1]) {
                return true;
            }
        }
        return false;
    }

    while (hasConsecutiveDigits(J)) {
        J++;
    }

    return "N : " + N + ", J : " + J;
}

console.log(noConsecutiveDigits(990));
