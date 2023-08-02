/* 
EX 004
let idade =prompt("Qual sua idade");
 console.log(idade)
let nome =prompt("qualo seu nome ")
console.log(`Muito prazer ${nome} voce tem ${idade} anos `)

EX 005
let nome ="Vinicius "
const num=7854
var bol=false
EX 006
console.log(typeof nome)
console.log(typeof num)
console.log(typeof bol)

EX 007
let idade = prompt("Idade: ")
if (idade>=18){
    console.log("Pode entrar")
}else{
    console.log("Não pode entrar")
}

EX008 
const nome="eliovaldo"
if ("Vini"==nome){
    console.log(`Saudações ${nome}`)
}else{
    console.log("Não te conheço")
}

//EX009
console.log(Math.pow(2,2))
console.log(Math.pow(2,2))
console.log(Math.pow(18,2))


//EX010
 const vel=100
 if (vel>80){
    console.log("Voce foi multado" )
 }else{
    console.log("Sem multa")
 }

 //EX011
const idade=28;
const cnh=true;

if (idade>=18 && cnh==true){
    console.log("Pode dirigir")
}else if (idade>=18 && cnh==false{
    console.log("Não pode dirigir, mas pode tirar cnh")
}else{
    console.log("Não pode dirigir")

//EX012

let c=0;

while (c<=10){
    console.log(c);
    c++
}

//EX013

for(let num=100;num>=50;num--){
    console.log(num)
}
//EX014

for (let n=0;n<=50;n++){

    if(n==0){
        console.log("0 é não é par nem impar")
    }
    else if(n%2==0){
        console.log(`O número ${n} é par `) 
    }else{
        console.log(`O número ${n} é impar `)
    }
}


//EX015
let primo=11;
let divisores=0;

for (i=1;i<=primo;i++){
    if(primo%i==0){
        console.log(`${primo} é divisivel por ${i}`)
        divisores++
    }
}
if(divisores==2){
    console.log(" é primo")
}else{
    console.log(" Não É primo")
}


//EX016
function ola(){
    console.log("hello, World")
}
ola()


//EX017
function idade (num){
    console.log(`Voce tem ${num} anos`)
}
idade(18)

//EX018
function soma(a,b){
    return console.log(`A soma de ${a} + ${b} = ${a+b}`)
}

soma(7,10)


//EX019

function aleatorio(max){
   return= Math.round(Math.random()*max)
}
console.log(aleatorio(10))
console.log(aleatorio(5))
console.log(aleatorio(8))
console.log(aleatorio(40))
console.log(aleatorio(6))


//EX020

function autoEscola(idade){
    if (idade>=18){
        console.log("Voce pode fazer auto escola ")
    }else{
        console.log("Voce NÃO pode fazer auto escola ")
    }
}

autoEscola(20)
autoEscola(5)
autoEscola(18)



//EX021
 function tipo(dado){
    if( typeof(dado)=='number'){
        console.log("iSSO é um number")
    }else if ((typeof(dado)=='string')){
        console.log("iSSO é uma STRING ")
    }else if ((typeof(dado)=='boolean'))
    console.log("iSSO é um boolean ")
 }
tipo("matheus")
tipo("AANDERE")
tipo(22)
tipo(25.65)
tipo(true)
tipo(false)


//EX022
function numeroPositivo(n){
    return Math.abs(n)
}
console.log(numeroPositivo(-89))
console.log(numeroPositivo(-4))
console.log(numeroPositivo(-895))
console.log(numeroPositivo(-465))


//EX023
function mensagem (texto){
    if (texto.lenght > 10){
        console.log("Texto muito longo")
    }else{
        console.log("Texto dentro do limite ")
    }
}

console.log(mensagem("Saudações mu nome é jonas "))
console.log(mensagem("Saudações"))
console.log(mensagem("olá"))
console.log(mensagem("Saudações mu nome é jonas venho de um gar longe "))


//EX024
function potencia (base,expoente){
    return Math.pow(base,expoente)
}
console.log(potencia(2,5))
console.log(potencia(3,3))
console.log(potencia(4,2))
console.log(potencia(8,0))


//EX025

function contador (num){
    while(num>=0){
        if(num%2==0){
            console.log(num)
        }
        num--
    }
}

console.log(contador(20))
console.log(contador(7))
console.log(contador(5))


coding exercise
function soma(a,b,c){
    const resultado= a + b + c
    return resultado
}
console.log(soma(5,10,15))



//coding exercise
function faixaEtaria (idade){
    if (idade <12 ){
        console.log("oLÁ CRIANÇA")
    }else if(idade>=12 && idade <25){
        console.log("Jovem")
    }else{
        console.log("Adulto")
    }
}

const crianca=5
const adulto=45
console.log(faixaEtaria(crianca))
console.log(faixaEtaria(adulto))

*/

//??????
function isPalindrome(frase){
    const separado= frase.split(' ')
    const junto=separado.join('')
    let inverso
    const i=junto.length
    while(i>-1){
        console.log(i)
    }
}

isPalindrome("VINICIUS CALEFO assarice")

//let str = 'Life, the universe and everything. Answer:';

//console.log(`${str} ${str.length}`);
// Expected output: "Life, the universe and everything. Answer: 42"
