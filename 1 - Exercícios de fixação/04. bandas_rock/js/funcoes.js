// DOM

const silhueta = document.querySelector('#forma')

const botao1 = document.querySelector('#rockpop')
const botao2 = document.querySelector('#feminino')
const botao3 = document.querySelector('#metal')
const botao4 = document.querySelector('#classico')

// Eventos

botao1.addEventListener('click', beatlesband)
botao2.addEventListener('click', heartband)
botao3.addEventListener('click', black)
botao4.addEventListener('click', led)

// Funções

function heartband() {
    silhueta.src='images/heart.jpg'
}

function beatlesband() {
    silhueta.src='images/beatles.webp'
}

function black() {
    silhueta.src='images/black-sabbath.jpg'
}

function led() {
    silhueta.src='images/led-zepellin.webp'
}