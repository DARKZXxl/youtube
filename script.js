var pag1 = document.getElementById('pag1')
var pag2 = document.getElementById('pag2')
var novidades = document.getElementById('novidades')
var tudo = document.getElementById('tudo')
var la = document.getElementById('lateral')
var sumir = document.getElementById('icons')
var buto = document.getElementById('button')
var body = document.getElementById('body')
var foo = document.getElementById('footer')
var jogos = document.getElementById('jogos')
var pag3 = document.getElementById('pag3')
var bul = document.getElementById('bulsola')
var sd = document.getElementById('sd')

function clicar() {
    pag1.style.display = 'none'

    pag2.style.display = 'block'
    tudo.style.backgroundColor = 'rgb(29, 29, 29'
    tudo.style.color = 'white'
    novidades.style.background = 'white'
    novidades.style.color = 'black'
    novidades.style.transition = '500ms'
    jogos.style.backgroundColor = '#ffffff3e'
    jogos.style.color = 'white'
    pag3.style.display = 'none'
    pag4.style.display = 'none'
    pag5.style.display = 'none'
    pag6.style.display = 'none'
    
}

function jo() {
    pag1.style.display = 'none'
    jogos.style.backgroundColor = 'white'
    jogos.style.color = 'black'
    tudo.style.backgroundColor = '#ffffff3e'
    tudo.style.color = 'white'
    jogos.style.transition = '500ms'
    novidades.style.background = 'linear-gradient(#000000, #000000)padding-box,linear-gradient(90deg,#30dfd3, #7d3bdf, #e827db, #c022a0, #e53434, #e36b26) border-box'
    novidades.style.border = '1px solid transparent'
    novidades.style.color = 'white'
    pag3.style.display = 'block'
    pag2.style.display = 'none'
    pag4.style.display = 'none'
    pag6.style.display = 'none'
}

function voltar() {
    pag1.style.display = 'block'

    pag2.style.display = 'none'
    tudo.style.backgroundColor = 'white'
    tudo.style.color = 'black'
    novidades.style.background = 'linear-gradient(#000000, #000000)padding-box,linear-gradient(90deg,#30dfd3, #7d3bdf, #e827db, #c022a0, #e53434, #e36b26) border-box'
    novidades.style.border = '1px solid transparent'
    novidades.style.color = 'white'
    tudo.style.transition = '800ms'
    jogos.style.backgroundColor = '#ffffff3e'
    jogos.style.color = 'white'
    pag4.style.display = 'none'
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


function entrarb() {
    la.style.width = '70%'
    foo.style.display = 'none'
    la.style.overflowY = 'scroll'
    la.style.transition = '1s'
    sd.style.display = 'block'
    la.style.marginLeft = '-5px'
    
}

function sai() {
    foo.style.display = 'inline-block'
    la.style.width = '0px'
    sd.style.display = 'none'
    la.style.transition = '0ms'
    la.style.marginLeft = '-25px'
}

var shor = document.getElementById('shor')
var pag4 = document.getElementById('pag4')
var home = document.getElementById('home')
var is = document.getElementById('is')
var pag5 = document.getElementById('pag5')
var pag6 = document.getElementById('pag6')
var vo = document.getElementById('vo')


function sho() {
    pag1.style.display = 'none'
    pag4.style.display = 'block'
    shor.src = 'img/icons8-shorts-do-youtube.png'
    home.src = 'img/icons8-casa-50.png'
    pag2.style.display = 'none'
    pag3.style.display = 'none'
    buto.style.display = 'none'
    bul.style.display = 'none'
    pag5.style.display = 'none'
     is.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO3XsQ2CUBSF4VvpBE5h4wx2DuAszmJn5RIkFjCApYYhHMDmNxhpDCaYJ4975XwtyX05Oe9CMBMReQfMgCvDqyxDkEuGIOWgQWQi+zDs3pBvH/oqf96W5ACciKfqChKSfQpiQaAgzqBGnEGNOIMa6Qk4AhuL3ghwfo0qgGXqPA9BGndgDyxS544dpHUDdsA8df7YQVo1sE09w0OQVvPLsEo856n/g+8PmESQOvrVukVf9vs/vH6L6B/EA7BOnTN6kFxQEGdQI86gRpxhMo1EYx1BKuIpM10AETEnHmo3wltDHUm6AAAAAElFTkSuQmCC'
    vo.style.height = '23px'
    vo.style.border = 'none'
    pag6.style.display = 'none'
}

function ho() {
    pag1.style.display = 'block'
    home.src = 'img/icons8-casa-24.png'
    shor.src = 'img/icons8-shorts-do-youtube (1).svg'
    pag2.style.display = 'none'
    pag3.style.display = 'none'
    buto.style.display = 'block'
    bul.style.display = 'block'
    is.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO3XsQ2CUBSF4VvpBE5h4wx2DuAszmJn5RIkFjCApYYhHMDmNxhpDCaYJ4975XwtyX05Oe9CMBMReQfMgCvDqyxDkEuGIOWgQWQi+zDs3pBvH/oqf96W5ACciKfqChKSfQpiQaAgzqBGnEGNOIMa6Qk4AhuL3ghwfo0qgGXqPA9BGndgDyxS544dpHUDdsA8df7YQVo1sE09w0OQVvPLsEo856n/g+8PmESQOvrVukVf9vs/vH6L6B/EA7BOnTN6kFxQEGdQI86gRpxhMo1EYx1BKuIpM10AETEnHmo3wltDHUm6AAAAAElFTkSuQmCC'
    vo.style.height = '23px'
    vo.style.border = 'none'
}

function ins() {
    is.src = 'img/icons8-subscrição-24.png'
    home.src = 'img/icons8-casa-50.png'
    shor.src = 'img/icons8-shorts-do-youtube (1).svg'
    pag1.style.display = 'none'
    pag5.style.display = 'block'
    pag4.style.display = 'none'
    vo.style.height = '23px'
    vo.style.border = 'none'
    pag6.style.display = 'none'
    buto.style.display = 'none'
    bul.style.display = 'none'
}

function voc() {
    vo.style.border = '3px solid white'
    vo.style.borderRadius = '50%'
    vo.style.height = '19px'
    pag1.style.display = 'none'
    pag6.style.display = 'block'
    pag5.style.display = 'none'
    is.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO3XsQ2CUBSF4VvpBE5h4wx2DuAszmJn5RIkFjCApYYhHMDmNxhpDCaYJ4975XwtyX05Oe9CMBMReQfMgCvDqyxDkEuGIOWgQWQi+zDs3pBvH/oqf96W5ACciKfqChKSfQpiQaAgzqBGnEGNOIMa6Qk4AhuL3ghwfo0qgGXqPA9BGndgDyxS544dpHUDdsA8df7YQVo1sE09w0OQVvPLsEo856n/g+8PmESQOvrVukVf9vs/vH6L6B/EA7BOnTN6kFxQEGdQI86gRpxhMo1EYx1BKuIpM10AETEnHmo3wltDHUm6AAAAAElFTkSuQmCC'
    shor.src = 'img/icons8-shorts-do-youtube (1).svg'
    pag4.style.display = 'none'
    buto.style.display = 'none'
    bul.style.display = 'none'
    home.src = 'img/icons8-casa-50.png'

}
