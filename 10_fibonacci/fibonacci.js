const fibonacci = function (n) {

    n = +n;

    if (n < 0) {
        return "OOPS";
    }

    const fibArray = [];
    for (let i = 0; i <= n; i++) {
        if (i > 1) {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
            continue;
        }
        fibArray.push(i);
    }

    return fibArray[n];
};

// Do not edit below this line
module.exports = fibonacci;
