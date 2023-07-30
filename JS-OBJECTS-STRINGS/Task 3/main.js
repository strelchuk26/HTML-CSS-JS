const string = "hello world!";

// 1
function getCountOfSpaces(string) {
    const count = string.split(' ').length - 1;
    return count;
}
console.log(`Count of spaces: ${getCountOfSpaces(string)}`);

// 2
function upperFitstSymb(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(`First symb to upper: ${upperFitstSymb(string)}`);

// 3
function getCountOfWords(string) {
    string = string.trim();
    const count = string.split(' ').length;
    return count;
}
console.log(`Count of words: ${getCountOfWords(string)}`);

// 4
function isPalindrome(string) {
    const cleanedStr = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
        if (cleanedStr[i] != cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("ledsa"));
console.log(isPalindrome("level"));

// 5
function stringToAbbr(string) {
    let abbr = "";
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        abbr += words[i].charAt(0).toUpperCase();
    }
    return abbr;
}
console.log(stringToAbbr("cascading style sheets"));