let num = [5, 8, 4]
num[3] = 6 // adicionará o número 6 no indice 3, que ainda não existe e será automaticamente criado
num.push(7) // .push  sempre adiciona no final da lista
num[7] = 1 // caso um dado seja inserido em um indice muito maior que a lista, o mesmo irá para a posição informada entre (), e ficará os espaço vagos, nesse caso <2 empty items>, dois espaços para inserir dados

num.push(99)
console.log(num)

num[6] = 3 
num.push(999)
console.log(num)

num[5] = 2
console.log(num)
console.log(num.length) // do lado do length não tem parentenses em JS, outras linguagens têm, 


num.sort()
console.log(num)

/*
for(inicialização; teste lógico; incremento){
    console.log() 
}
*/

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
/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(pos)
}

*/