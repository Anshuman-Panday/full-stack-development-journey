// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');

const bigNumber = 233445565656453434n;

console.log (id === anotherId);

// Reference (Non primitive)

// Arrays, Objects, Functions

const heroes = ['shaktiman','naagraj','doga'];
let myObj = {
  name: 'Ansh',
  age: 28
}

const myFunction = function() {
  console.log('Hello World');
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = 'anshumanpanday007'

let anothername = myYoutubename
anothername = 'Ansh'

console.log(myYoutubename);
console.log(anothername);

let userone = {
  email: 'anshu@google.com',
  upi: 'ansh@sbi'
}

let usertwo = userone

usertwo.email = 'anshuman@google.com';
usertwo.upi = 'anshuman@sbi';

console.log(userone);
console.log(usertwo);