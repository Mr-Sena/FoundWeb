/*
Case Sensitive: reconhe letras maisculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')// Não colocar # nessa situação, porém no seletor é obrigatório dependentemente da sua espécie
let email = document.querySelector('#email') /* Na situação foi descartado o window(opcional), e colocado # antes do email para o uso do Id. alternativa:
let email = window.document.querySelector(input#email)
se fosse uma classe seria .email */
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntooK = false
let mapa =  document.querySelector('#mapa')

//Alterando propriedades de estilizaçãoem JS (Ampliando uma barra de input para 100% do seu espaço disponível)
nome.style.width = '75%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML ='Nome inválido'
        txt.style.color = 'red'
        assuntoOk = false
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'Blue'
        assuntoOk = true
    }
}

function validaEmail() {
//Essa variável txt vai ocupar um espaço diferente na memória daquela variável definida na linha 22, simplesmente pelo escopo ser local. Não há sobrepos.
    let txt = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txt.innerHTML = 'E-mail válido'
        txt.style.color = 'red '
        emailOk = false
    } else {
        txt.innerHTML = 'E-mail válido'
        txt.style.color = 'blue'
        emailOk = true
    }
}

function validaAssunto() {
    let txt = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txt.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txt.style.color = 'red'
        txt.style.display = 'block'
        assuntooK = false
    } else {
        assuntooK = true
        txt.style.display = 'none'
    }
}

function enviar() {
    if (nomeOk && assuntooK && emailOk) {
        alert ('Formulário enviado com sucesso.')
    } else {
        alert ('Preencha o formulário corretamente.')
    }
}


function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}