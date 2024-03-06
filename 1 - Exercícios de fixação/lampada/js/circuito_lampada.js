// Const -> Constante, imutável
// LET -> Variável mutável

// Parte 1: DOM -> Determina quais objetos do HTML vão participar do JS

const lampada = document.querySelector('#lampada') // # é para ID e . é para DIV| Document faz procura no HTML
const bt01 = document.querySelector('#btligar')
const bt02 = document.querySelector('#btdesligar')

// Parte 2: Eventos -> É o passo a passo do que deve acontecer para ter uma ação

bt01.addEventListener('click', ligar) // Define que ao clicar o bt01, vai executar a função ligar
bt02.addEventListener('click', desligar)
lampada;addEventListener('dblclick', quebrar)

// Parte 3: Funções

function ligar() {
    lampada.src = 'images/acesa.gif'
}
function desligar() {
    lampada.src = 'images/apagada.gif'
}

function quebrar() {
    lampada.src = 'images/quebrada.jpg'
}