// DOM

const nome = document.querySelector ('#nome')
const nota1 = document.querySelector ('#primeiraNota')
const nota2 = document.querySelector ('#segundaNota')
const nota3 = document.querySelector ('#terceiraNota')
const botao = document.querySelector ('#btn')
const conclusao = document.querySelector ('#resultado')

// EVENTOS E FUNÇÃO

botao.addEventListener ('click', ()=> {
    n1 = Number (nota1.value)
    n2 = Number (nota2.value)
    n3 = Number (nota3.value)

    media = (n1 + n2 + n3) / 3

    situacao = media >= 5 ? "aprovado(a)" : "reprovado(a)"

    conclusao.textContent = `Sr(a) ${nome.value}, sua média foi ${media.toFixed(1)}. Você foi ${situacao}`

})