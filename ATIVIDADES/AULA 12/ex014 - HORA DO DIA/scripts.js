function carregar() {
var msg = document.querySelector("div#msg")
var img = document.querySelector("div#imagem")
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var seg = data.getSeconds()
msg.innerHTML = `Agora são ${hora}:${min}:${seg}`

if(hora < 12){
    //BOM DIA
    imagem.src = "manhã.png"
    document.body.style.background = "#0081d8"

}else if ( hora > 18){
    //BOA NOITE
    imagem.src = "noite.png"
    document.body.style.background = "#1a3643"
}else {
    //BOA TARDE
    imagem.src = "tarde.png"
    document.body.style.background = "#b2cee5"
}
}