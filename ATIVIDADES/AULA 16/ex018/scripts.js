/*
num = document.getElementById("fnum")
tab = document.getElementById("flista")
*/
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero (n){
    if ( Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // -1 = indica que o valor não foi encontrado na lista
        return true
    }else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        //         alert("tudo ok ")
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor adicionado: ${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    if ( valores.length == 0) {
        window.alert("vazio")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos]> maior){
            maior = valores[pos]}
            if(valores[pos]<menor){
            menor = valores[pos]
        
        }
        }
        média = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> O total de números cadastrados são: ${tot}</p>`
        res.innerHTML += `<p> O Maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O Menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p> A média dos valor informado é ${média}</p>`

    }
}



/*
function adicionar() {
    if ( num.value.length <= 0 && num.value.length > 100){
        alert("Número invalido")
    }else{
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor adicionado: ${num.value}`
        lista.appendChild(item)
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    if ( valores.length == 0) {
        window.alert("Sem informações")
    } else {
        let tot = valores.length
      //  res.innerHTML = ''
        res.innerHTML = `<p> O total de números cadastrados são: ${tot}<p>` 
    }
}


*/