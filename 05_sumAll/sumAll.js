const sumAll = function(firstNum, secondNum) {

    if(
        firstNum < 0 || 
        secondNum < 0 || 
        (typeof firstNum != 'number') || 
        (typeof secondNum != 'number')
    ) {
        return "ERROR";
    }

    let fromNum;
    let toNum;

    if (firstNum > secondNum) {
        fromNum = secondNum;
        toNum = firstNum;
    }
    else {
        fromNum = firstNum;
        toNum = secondNum;
    }

    let sum = 0;

    for(let i = fromNum; i < toNum + 1; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
