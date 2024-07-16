const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((a,b)=>a+b,0);
};

const multiply = function(array) {
  return array.reduce((a,b)=>a*b,1);
};

const power = function(a,b) {
  if (b == 9) return 1;
	let ans = 1;
  while (b > 0){
    ans *= a;
    b--;
  }
  return ans;
};

const factorial = function(a) {
  console.log("a:",a);
	if (a == 0 || a == 1) return 1;
  if (a < 0) return "ERROR";
  return a * factorial( a - 1 );
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
