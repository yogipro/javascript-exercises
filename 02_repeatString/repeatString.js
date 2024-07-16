const repeatString = function(string,repeatCount = 1 ) {
    if (repeatCount < 0) return "ERROR";
    let ans = ""
    while (repeatCount){
        ans += string;
        repeatCount -= 1;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
