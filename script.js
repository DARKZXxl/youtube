var pag1 = document.getElementById('pag1')
var pag2 = document.getElementById('pag2')
var novidades = document.getElementById('novidades')
var tudo = document.getElementById('tudo')

function clicar() {
    pag1.style.display = 'none'

    pag2.style.display = 'block'
    tudo.style.backgroundColor = 'rgb(29, 29, 29'
    tudo.style.color = 'white'
    novidades.style.background = 'white'
    novidades.style.color = 'black'
    novidades.style.transition = '800ms'
    
}

function voltar() {
    pag1.style.display = 'block'

    pag2.style.display = 'none'
    tudo.style.backgroundColor = 'white'
    tudo.style.color = 'black'
    novidades.style.background = 'linear-gradient(#000000, #000000)padding-box,linear-gradient(90deg,#30dfd3, #7d3bdf, #e827db, #c022a0, #e53434, #e36b26) border-box'
    novidades.style.border = '1px solid transparent'
    novidades.style.color = 'white'
    tudo.style.transition = '1s'
    
}

var jogo = document.getElementById('pac')
var nome = document.getElementById('jogo')
var por = document.getElementById('porcento')

var mari = document.getElementById('mario')
var jogo1 = document.getElementById('jogo1')
var por2 = document.getElementById('porcento1')

var soni = document.getElementById('sonic')
var jogo2 = document.getElementById('jogo2')
var por3 = document.getElementById('porcento2')

function qual() {
    jogo.style.border = '2px solid blue'
    nome.style.color = 'blue'
    por.innerHTML = '9%'
    por.style.color = 'blue'
    nome.style.transition = '1s'
    nome.style.backgroundColor = ' #ffffff3e'
    nome.style.width = '17%'
    
    por2.innerHTML = '37%'
    jogo1.style.width = '30%'
    jogo1.style.backgroundColor = ' #ffffff3e'
    jogo1.style.transition = '500ms'
    por2.style.color = 'white'

    jogo2.style.transition = '1s'
    jogo2.style.backgroundColor = ' #ffffff3e'
    jogo2.style.width = '40%'
    por3.innerHTML = '54%'
    por3.style.color = 'white'
}

function mario() {
    mari.style.border = '2px solid blue'
    jogo1.style.color = 'blue'
    por2.innerHTML = '37%'
    por2.style.color = 'blue'
    jogo1.style.transition = '500ms'
    jogo1.style.backgroundColor = ' #ffffff3e'
    jogo1.style.width = '30%'

    nome.style.transition = '1s'
    nome.style.backgroundColor = ' #ffffff3e'
    nome.style.width = '17%'
    por.innerHTML = '9%'
    por.style.color = 'white'

    jogo2.style.transition = '1s'
    jogo2.style.backgroundColor = ' #ffffff3e'
    jogo2.style.width = '40%'
    por3.innerHTML = '54%'
    por3.style.color = 'white'
}

function sonic() {
    soni.style.border = '2px solid blue'
    jogo2.style.color = 'blue'
    por3.innerHTML = '54%'
    por3.style.color = 'blue'
    jogo2.style.transition = '1s'
    jogo2.style.backgroundColor = ' #ffffff3e'
    jogo2.style.width = '40%'

    nome.style.transition = '1s'
    nome.style.backgroundColor = ' #ffffff3e'
    nome.style.width = '17%'
    por.innerHTML = '9%'
    por.style.color = 'white'

    jogo1.style.transition = '500ms'
    jogo1.style.backgroundColor = ' #ffffff3e'
    jogo1.style.width = '30%'
    por2.innerHTML = '37%'

}