const palindromes = function (string) {
    const PUNCTUATIONS = [",", ".", "!"];

    string = string.replaceAll(" ", "");
    PUNCTUATIONS.forEach(punctuation => {
        string = string.replaceAll(punctuation, "");
    });

    string = string.toLowerCase();

    const reversedString = string.split("").reverse().join("");

    return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
