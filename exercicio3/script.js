let a = 10;
let b = 25;
let c = null;

console.log(`O valor de A é ${a} e o valor de B é ${b}`);

c = a;
a = b;
b = c;

console.log(`O novo valor de A é ${a}`);
console.log(`e o novo valor de B é ${b}.`);