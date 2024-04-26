// DOM

const pesquisa = document.querySelector ('.input-cidade')
const botao = document.querySelector ('.botao-busca')
const nome_cidade = document.querySelector ('.cidade')
const temp = document.querySelector ('.temp')
const previsao = document.querySelector ('.texto-previsao')
const key = '7d9b9be9d59fd0ae7ea39039e0df4963'

botao.addEventListener ('click', buscarcidade)

async function buscarcidade() { // Cria uma função para consuno de API | Todas para API deve ser async

    // o Fetch faz o acesso da API | O atributo await faz o fetch deixar de ser imediato


    const cidade = pesquisa.value
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)

    // Lang muda o idioma e units=metric muda a escala de temperatura para celsius
    .then(tradutor => tradutor.json()) // Faz o retorno de outra linguagem para json

    console.log(dados)

    nome_cidade.textContent = `Tempo em ${dados.name}`
    temp.textContent = `${(dados.main.temp).toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`

}