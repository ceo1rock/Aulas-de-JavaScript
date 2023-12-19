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
            img.setAttribute('src', '01 - BEBE M')
        }else if (idade < 12 ){
            // criança
            img.setAttribute('src', '02 - CRIANÇA M')
        }else if ( idade < 17){
            // adolecente
            img.setAttribute('src', '03 - ADOLECENTE M')
        }else if ( idade < 60){
            // adulto
            img.setAttribute('src', '04 - ADULTO M')
        }else if ( idade >= 60){
            // idoso
            img.setAttribute('src', '05 - IDOSO M')
        }
    }else {
        gênero = 'MUlher'
        if(idade >= 0 && idade < 4) {
            // bebe
            img.setAttribute('src', '01 - BEBE F')
        }else if (idade < 12 ){
            // criança
            img.setAttribute('src', '02 - CRIANÇA F')
        }else if ( idade < 17){
            // adolecente
            img.setAttribute('src', '03 - ADOLECENTE F')
        }else if ( idade < 60){
            // adulto
            img.setAttribute('src', '04 - ADULTO F')
        }else if( idade >= 60){
            // idoso
            img.setAttribute('src', '05 - IDOSO F')
        }
    }
    res.innerHTML = `Detectamos: ${gênero} com a idade de: ${idade}`
    res.style.textAlign = 'center'
    res.appendChild(img)
    }
}
