/*
let amig = {}
let array = []

console.log(typeof amigo)
console.log(typeof array)
// array e objetos são da mesma classe, os dois são objetos
*/
let amigo = {nome:'José', 
sexo:'M', 
peso: 85.4,  // o valor décimal tem que ser com . (ponto)
engordar(p){
    this.peso += p
}} 

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)

