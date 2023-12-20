/* console.log('tudo bem')
Repetição com teste no início
Repetição com teste no final
*/


// Repetição com teste no início

var c = 1
var quantidade = 10
while ( c <= quantidade) {
    console.log (`contador: ${c}`)
    c++
}

console.log('________________________________________________________________________')

var d = 1


// Repetição com teste no final

do {
    console.log(`contador: ${d}`)
    d++
}while( d <= quantidade)

console.log('________________________________________________________________________')

//Repetição com variável de controle

for (var c=1; c<=10; c++){ // não precisa escrever var
    console.log(`contador: ${c}`)
}

console.log('________________________________________________________________________')

for (i=1; i<=10; i++){ // sem var
    console.log(`contador do i: ${i}`)
}