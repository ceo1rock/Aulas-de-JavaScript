
let num = [5, 8, 4]
num[3] = 6 // adicionará o número 6 no indice 3, que ainda não existe e será automaticamente criado
num.push(7) // .push  sempre adiciona no final da lista
num[7] = 1 // caso um dado seja inserido em um indice muito maior que a lista, o mesmo irá para a posição informada entre (), e ficará os espaço vagos, nesse caso <2 empty items>, dois espaços para inserir dados

num.push(99)

num[6] = 3 
num.push(999)

num[5] = 2
console.log(`O tamanho do nosso array é ${num.length}`) // do lado do length não tem parentenses em JS, outras linguagens têm, 

num.sort()
console.log(num)

/*
for(inicialização; teste lógico; incremento){
    console.log() 
}
*/

num.sort() // Metodo interno para organizar os dados em ordem
console.log(`Dados em ordem: ${num}`)
/* // Para exibir o valor de acordo com o índice 
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
*/

for(let pos =0; pos < num.length; pos++) {
    console.log(num[pos])
}
