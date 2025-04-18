function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let num = 13;
  if (isEven(num)) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
  