
num = 23344
function findZeroExpression(num) {
    if (num < 10) {
      return "not possible";
    }
  
    // Convert the number to an array of digits
    const digits = Array.from(String(num), Number);
  
    // Create an array to hold the signs (+ or -) between the digits
    const signs = new Array(digits.length - 1);
  
    // Try all possible combinations of signs
    const found = trySigns(digits, signs, 0);
  
    if (found) {
      // Build the zero expression string
      let expression = digits[0];
      for (let i = 0; i < signs.length; i++) {
        expression += signs[i] + digits[i+1];
      }
      return expression;
    } else {
      return "not possible";
    }
  }
  
  function trySigns(digits, signs, index) {
    // Base case: we have tried all signs
    if (index === signs.length) {
      return evaluate(digits, signs) === 0;
    }
  
    // Try a plus sign
    signs[index] = "+";
    if (trySigns(digits, signs, index + 1)) {
      return true;
    }
  
    // Try a minus sign
    signs[index] = "-";
    if (trySigns(digits, signs, index + 1)) {
      return true;
    }
  
    // Neither plus nor minus worked
    return false;
  }
  
  function evaluate(digits, signs) {
    let sum = digits[0];
    for (let i = 0; i < signs.length; i++) {
      if (signs[i] === "+") {
        sum += digits[i+1];
      } else {
        sum -= digits[i+1];
      }
    }
    return sum;
  }
  
  // Example usage:
  console.log(findZeroExpression(35132));  // "3-5+1+3-2"
  console.log(findZeroExpression(123));    // "not possible"
  