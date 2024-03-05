"use strict";
let x = 10;
x = 12;
console.log(x);
//inferencia x annotation
let y = 12;
//y = "teste"
let z = 12;
//tipos básicos
let firstName = "Mateus";
let age = 30;
const isAdmin = true;
//Strig!= strig
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toLocaleUpperCase());
myNumbers.push(5);
console.log(myNumbers);
//tuplas -> tuple
let myTyple;
myTyple = [5, "teste", ["a", "b"]];
//object literals -> {prop:value}
const user = {
    name: "Paulo",
    age: 21,
};
console.log(user);
console.log(user.name);
//any
//any
let a = 0;
a = "teste ";
a = true;
a = [];
//union type
let id = "10";
id = 200;
const userId = 10;
const productId = "0001";
const shirdId = 123;
//enum
//tamanho de roupas 
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Cmaisa gola V",
    size: Size.G,
};
console.log(camisa);
// literal types
let teste;
teste = "autenticado";
teste = null;
//funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello${name}`;
}
console.log(sayHelloTo("Matheus"));
function logger(msg) {
    console.log(msg);
}
logger("Teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("josé");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 10, n2: 77 }));
function mutiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 345,
    n2: 10
};
console.log(mutiplyNumbers(someNumbers));
