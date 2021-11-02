function clicar(){

var num = window.document.getElementById('senha')

var senha = Number(num.value)


if(senha == 366871){
    document.querySelector('input#senha').style.visibility = 'hidden'
    document.querySelector('div#login').style.visibility = 'hidden'
    document.querySelector('div#verificar').style.visibility = 'hidden'
    document.body.innerHTML = 'Eu disse que não era pra abrir, por enquanto não vai ter nada aqui, eu não terminei ainda, volte mais tarde'
}else{
    window.alert("Acesso Negado")

}



}