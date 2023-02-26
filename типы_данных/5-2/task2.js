function readNumber() {
    let num;
  
    do {
      num = prompt("enter number");
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  console.log(`number: ${readNumber()}`);