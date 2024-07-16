const reverseString = function(str) {
    if (str == "") return "";
    if (!str) return "Error";
    let ans = ""
    for (let i = str.length - 1 ; i >= 0 ; i--){
        ans += str[i]
    }
    return ans;
    /* 
        edgy kid's solution
        they love the bad one liners :)
        return str.split("").reverse().join("");
    */
};

// Do not edit below this line
module.exports = reverseString;
