var idade = 22
if (idade < 12){
    console.log(`Menor de Idade`)
}else{
    console.log(`Maior de Idade`)
}

var idadeVotar = 71
if (idadeVotar < 16){
    console.log(`Sua idade é ${idadeVotar} não pode votar`)
}else{
    if(idadeVotar>=16 && idadeVotar<18  || idadeVotar > 70){
    console.log(`Sua idade é ${idadeVotar}, seu voto é opcional`)
}else{
    if(idadeVotar>18 && idadeVotar<=70){
    console.log(`Sua idade é ${idadeVotar}, seu voto é obrigatório`)
}
}
}

var idadeVotar = 12
if (idadeVotar < 16){
    console.log(`Sua idade é ${idadeVotar} não pode votar`)
}else if(idadeVotar < 18  || idadeVotar > 65){
       console.log(`Sua idade é ${idadeVotar}, seu voto é opcional`)
}else
    {
    console.log(`Sua idade é ${idadeVotar}, seu voto é obrigatório`)
}


