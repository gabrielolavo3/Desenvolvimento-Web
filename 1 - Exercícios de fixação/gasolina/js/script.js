const distancia = document.querySelector ('#distancia')
const consumo = document.querySelector ('#consumo')
const preco = document.querySelector ('#preco')
const botao = document.querySelector ('#btn')
const resultado = document.querySelector ('#resultado')

// Evento e função

botao.addEventListener('click', ()=>{
    
    // Adquirindo o valor de cada div

    d = Number (distancia.value) // Number = Int
    c = Number (consumo.value)
    p = Number (preco.value )

    calculo = (d/c) * p

    resultado.textContent = `O gasto total para a viagem será de R$ ${calculo.toFixed(2)}`

})