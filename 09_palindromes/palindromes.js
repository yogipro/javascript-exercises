const reverseString = require("../03_reverseString/reverseString")
const palindromes = function (str) {
    let formatted = str.replace(/[\W]/g,"").toLowerCase() 
    return formatted == reverseString(formatted);
};

// Do not edit below this line
module.exports = palindromes;
