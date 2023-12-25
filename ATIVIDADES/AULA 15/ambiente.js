let num = [7,5,3]
console.log(num[1])
num.push = 55
console.log(num)

num[4]= 7
console.log(num)

num[7]=99
console.log(num.length)

num.push = 77
num.push = 79
// num.push(79)
console.log(num)
num.sort()
console.log(num)

/* for(inicialização; teste lógico; incremento){
    console.log() 
}*/

for(let pos =0; pos<num.length; pos++) {
    console.log(num[pos])
}


let valores = [8,3,7,4,9,2]
// console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

for(let pos = 0; pos < valores.length; pos++) {
    console.log(pos)
}
