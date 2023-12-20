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
            document.body.style.background = "#eae9f1"

        }else if (idade < 12 ){
            // criança
            img.setAttribute('src', 'CRIANCA M.PNG')
            document.body.style.background = "#c28f74"

        }else if ( idade < 17){
            // adolecente
            img.setAttribute('src', 'ADOLESCENTE M.PNG')
            document.body.style.background = "#773c52"

        }else if ( idade < 60){
            // adulto
            img.setAttribute('src', 'ADULTO M.PNG')
            document.body.style.background = "#d28c56"

        }else if ( idade >= 60){
            // idoso
            img.setAttribute('src', 'IDOSO M.PNG')
            document.body.style.background = "#dbcacf"

        }
    }else {
        gênero = 'Mulher'
        if(idade >= 0 && idade < 4) {
            // bebe
            img.setAttribute('src', 'BEBE F.PNG')
            document.body.style.background = "#c28f74"

        }else if (idade < 12 ){
            // criança
            img.setAttribute('src', 'CRIANCA F.PNG')
            document.body.style.background = "#e2a95a" 

        }else if ( idade < 17){
            // adolecente
            img.setAttribute('src', 'ADOLESCENTE F.PNG')
            document.body.style.background = "#d4a290"

        }else if ( idade < 60){
            // adulto
            img.setAttribute('src', 'ADULTO F.PNG')
            document.body.style.background = "#d9dceb"

        }else if( idade >= 60){
            // idoso
            img.setAttribute('src', 'IDOSO F.PNG')
            document.body.style.background = "#ddd3d4"
            
        }
    }
    res.innerHTML = `Detectamos: ${gênero} com a idade de: ${idade}`
    res.style.textAlign = 'center'
    res.appendChild(img)
    }
}
