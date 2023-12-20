function verificar(){
var data = new Date()
var ano = data.getFullYear() // pega o ano com 4 digitos
var fAno = document.getElementById('txtano')
var res = document.querySelector("div#res")


if (fAno.value.length == 0 || Number(fAno.value)>ano)
{
    alert("[ERRO]Verifique os dados e tente novamente!")
/* } else{
    alert("tudo ok")
} */
}else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    // res.innerHTML = `Idade calculada: ${idade}`
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        gênero = 'Homem'
        if(idade >= 0 && idade < 4) {
            // bebe
            img.setAttribute('src', 'BEBE M.PNG')
        }else if (idade < 12 ){
            // criança
            img.setAttribute('src', 'CRIANCA M.PNG')
        }else if ( idade < 17){
            // adolecente
            img.setAttribute('src', 'ADOLESCENTE M.PNG')
        }else if ( idade < 60){
            // adulto
            img.setAttribute('src', 'ADULTO M.PNG')
        }else if ( idade >= 60){
            // idoso
            img.setAttribute('src', 'IDOSO M.PNG')
        }
    }else {
        gênero = 'Mulher'
        if(idade >= 0 && idade < 4) {
            // bebe
            img.setAttribute('src', 'BEBE F.PNG')
        }else if (idade < 12 ){
            // criança
            img.setAttribute('src', 'CRIANCA F.PNG')
        }else if ( idade < 17){
            // adolecente
            img.setAttribute('src', 'ADOLESCENTE F.PNG')
        }else if ( idade < 60){
            // adulto
            img.setAttribute('src', 'ADULTO F.PNG')
        }else if( idade >= 60){
            // idoso
            img.setAttribute('src', 'IDOSO F.PNG')
        }
    }
    res.innerHTML = `Detectamos: ${gênero} com a idade de: ${idade}`
    res.style.textAlign = 'center'
    res.appendChild(img)
    }
}
