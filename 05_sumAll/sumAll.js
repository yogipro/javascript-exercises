const sumAll = function(a , b) {
    if (a == b) return a;
    if (typeof a != "number" || typeof b != "number") return "ERROR";
    if (a < 0 || b < 0) return "ERROR"
    let sum = ((Math.abs(b - a) + 1) * (a + b)) / 2 ;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
