// Curso online - funcionando

function contar () {
    ini = document.getElementById('txti')
    fim = document.getElementById('txtf')
    passo = document.getElementById('txtp')
    res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] FALTAM DADOS')
    }else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if ( i < f) { // CONTAGEM CRESCENTE
            for ( c = i; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1f449}`
        }
    } else {
        // CONTAGEM REGRESSIVA
        for (c = i ; c >= f ; c -= p) {
            res.innerHTML += `${c} \u{1f449}`
        }

    }
    res.innerHTML += `\u{1f3c1}`
}
}



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