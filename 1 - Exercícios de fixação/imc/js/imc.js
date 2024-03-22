// dom

const peso = document.querySelector ('#peso')
const altura = document.querySelector ('#altura')
const botao = document.querySelector('#calculate')
const resultado = document.querySelector('#result')

// evento

botao.addEventListener('click', ()=> {

    // Desativa o formulário
    event.preventDefault()

    p = peso.value // Recebe o que tá na caixa
    a = altura.value/100

    imc = p / (a**2) // Numero elevado ao quadrado

   resultado.textContent = `O seu IMC é ${imc.toFixed(2)}` // Template
})