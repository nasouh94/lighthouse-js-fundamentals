/* const isEven =  function(num) {
  return num % 2 ===0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11)

console.log(tenIsEven);
console.log(elevenIsEven);

this code can be simplified by taking out the variables and returning the value directly with console.log
*/

const isEven = function(num){
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(12));
console.log(isEven(11));