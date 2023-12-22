
// CURSO
function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
   
    if ( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert(`[ERRO!] Faltam dados!` )
    } else {
        res.innerHTML = "Contando..."
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
       
        for ( c = i ; c <= f ; c += p){ // (c=c+p) isso é igual isso: (c+=p)
            res.innerHTML += `${c} \1F449	`
        
    }
}
}
res.style.textAlign = 'center' 


/* MEU CÓDIGO
function contar() {
    var ini = document.getElementById('txti').value
    var fim = document.getElementById('txtf').value
    var passo = document.getElementById('txtp').value
    var res = document.getElementById('res')

    if ( ini === 0 || fim === 0 || passo === 0 ) {
        window.alert(`[ERRO!] Faltam dados!` )
    } else {
        res.innerHTML = "Contando..."
            for ( c = ini ; c <= fim ; c += passo){ // (c=c+p) isso é igual isso: (c+=p)
            res.innerHTML += `${c} \1F449	` // Atalho para \ = Alt + 92.
        
    }
    }
}

// CHATGPT

function contar() {
    var ini = +document.getElementById('txti').value;
    var fim = +document.getElementById('txtf').value;
    var passo = +document.getElementById('txtp').value;
    var res = document.getElementById('res');

    if (ini === 0 || fim === 0 || passo === 0 || isNaN(ini) || isNaN(fim) || isNaN(passo)) {
        window.alert("[ERRO!] Faltam dados ou dados inválidos!");
    } else {
        res.innerHTML = "Contando...";
        
        for (var c = ini; c <= fim; c += passo) {
            console.log(c);
            // Faça algo com cada valor de 'c', se necessário
        }
    }
}
 */