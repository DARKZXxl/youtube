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
    novidades.style.transition = '700ms'
    
}

function voltar() {
    pag1.style.display = 'block'

    pag2.style.display = 'none'
    tudo.style.backgroundColor = 'white'
    tudo.style.color = 'black'
    novidades.style.background = 'linear-gradient(#000000, #000000)padding-box,linear-gradient(90deg,#30dfd3, #7d3bdf, #e827db, #c022a0, #e53434, #e36b26) border-box'
    novidades.style.border = '1px solid transparent'
    novidades.style.color = 'white'
    novidades.style.transition = '700ms'
    
}