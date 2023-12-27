function parimpa(n) {
    if ( n % 2 == 0){
        return 'par'
    }else {
        return 'impar'
    }
}
let res = parimpa(4)

console.log(res)
console.log(parimpa(7))


console.log('_______________________________________________')

function soma(n1, n2){
    return n1 + n2
}
console.log(soma(2, 7))

console.log('_______________________________________________')

function soma(n1=0, n2=0){ // usa o '=0' para caso haja possibilidade do valor não ser passado e não erro
    return n1 + n2
}
console.log(soma(2,))


console.log('_______________________________________________')

let v = function(x) { //função dentro de uma variável
    return x*2
}

console.log(v(5))

/* arrow function 
*/
console.log('_______________________________________________')

function fatorial (n) {
    let fat = 1
    for ( c = n; c>1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
console.log('_______________________________________________')


// RECURSIVIDADE

function fatorial2(m){
    if (m == 1) {
        return 1
    } else {
        return m * fatorial2(m-1)
    }
}
console.log(fatorial2(5))