// find factorial using recursion
function factorial(num) {
  // base condition
  if(num <= 1) return 1;
  return num + factorial(num - 1);
}

const result =factorial(6);
console.log(result);