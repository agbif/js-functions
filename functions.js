console.log( Math.floor(9.73) );
console.log( Math.floor(77.21) );


// Random number between 0 and 0.999999
console.log( Math.random() ); 

console.log( Math.random() * 100 );

console.log( Math.floor(Math.random() * 100) );




// Math.random();









// Parameter -> the placeholder variable
//              in the DEFINITION of the function

  //                   Parameter
  //                       |
function genericHello (personName, amount) {
  console.log('We have a new guest!');
  console.log('Everyone say hello to ' + personName + '.');

  for (var i = 0; i < amount; i++) {
    console.log('Hi, ' + personName + '!');
  }
}

genericHello('John', 5);
genericHello('Maria', 3);
genericHello('Mary', 4);
genericHello('Carlos', 1);
// Argument -> the value of the placeholders
//             in the INVOKATION of the function


// ------------------------------------------------------

var myName = 'Nizar';

// Return value
console.log( myName.split("") );

function powerOf2 (x) {
  var result = x * x;
  return result;
}


console.log( powerOf2(10) );
console.log( powerOf2(4) );

console.log( 5 * 5 );
console.log( 30 - 20 );

