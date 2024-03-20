const botaoDia = document.querySelector('#modoclaro')
const botaoNoite = document.querySelector('#modoescuro')
const fundo = document.querySelector('body')

botaoDia.addEventListener('click', dia)
botaoNoite.addEventListener('click', noite)

function dia() {
    fundo.className = 'claro'    
}

function noite() {
    fundo.className = 'escuro'    
}