let x: number = 10;

x = 12;

console.log(x);

//inferencia x annotation

let y = 12;
//y = "teste"
let z:number = 12;

//tipos básicos
let firstName: string ="Mateus"
let age:number = 30
const isAdmin: boolean = true

//Strig!= strig
console.log(typeof firstName)

firstName = "João"
console.log(firstName);

//object
const myNumbers:number [] = [1,2,3]
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toLocaleUpperCase());
myNumbers.push(5)
console.log(myNumbers);

//tuplas -> tuple
let myTyple:[number,string,string[]]

myTyple = [5, "teste",["a","b"]]

//object literals -> {prop:value}
const user: {name: string, age : number} = {
    name:"Paulo" ,
    age:21,

};

console.log(user);
console.log(user.name);

//any
//any
let a: any = 0;
a = "teste ";
a = true ;
a = [];


//union type
let id: string | number = "10"
id = 200


//type alias 
type myIdType = number | string

const userId: myIdType = 10 
const productId: myIdType = "0001"
const shirdId: myIdType = 123


//enum
//tamanho de roupas 
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}
const camisa = {
    name:"Cmaisa gola V",
    size: Size.G,
};
console.log(camisa);

// literal types
 let teste :"autenticado"|null;

teste = "autenticado";
teste = null;

//funcoes

function sum(a:number, b:number){
    return a + b
}
console.log(sum(12, 12));

function sayHelloTo(name : string): string{
    return`Hello${name}`
}
console.log(sayHelloTo("Matheus"));


function logger (msg: string ): void{
    console.log(msg);

}
logger("Teste");

function greeting(name: string, greet?: string): void{

if(greet){
    console.log(`Olá ${greet} ${name}`);
 return;
    
   
}
console.log(`Olá ${name}`);
}
greeting("josé");
greeting("Pedro","Sir" );

//interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums:MathFunctionParams){
return nums.n1 + nums.n2

}
console.log(sumNumbers({n1:10,n2:77}))

function mutiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2
}

const someNumbers:MathFunctionParams = {
 n1: 345,
 n2: 10   
}

console.log(mutiplyNumbers(someNumbers));