const fibonacci = function(n,memo={}) {
    if (n in memo) return memo[n];
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;
    memo[n] = fibonacci(n - 1 , memo) + fibonacci(n - 2,memo);
    return memo[n];
};

// Do not edit below this line
module.exports = fibonacci;
