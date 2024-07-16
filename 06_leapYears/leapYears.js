const leapYears = function(year) {
    if (year == 0 || year < 0) return "ERROR";
    if (!year) return "ERROR";
    if (year % 400 == 0) return true
    else if (year % 4 == 0 && year % 100 != 0) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
