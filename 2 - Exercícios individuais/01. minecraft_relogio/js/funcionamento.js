const hora = document.querySelector ('#hour')
const minuto = document.querySelector ('#minute')
const segundo = document.querySelector ('#second')
const dia = document.querySelector ('#date')
const mes = document.querySelector ('#month')
const ano = document.querySelector ('#year')
const texto = document.querySelector ('#mensagem')

setInterval(cronometro, 1000)

function cronometro() {
    let horario = new Date()
    let hour = horario.getHours()
    let minute = horario.getMinutes()
    let second = horario.getSeconds()
    let date = horario.getDate()
    let month = horario.getMonth() + 1
    let year = horario.getFullYear()

    hour < 10 ? hour = '0' + hour : hour
    minute < 10 ? minute = '0' + minute : minute
    second < 10 ? second = '0' + second : second
    month < 10 ? month = '0' + month : month
    date < 10 ? date = '0' + date : date

    if (hour >= 6 && hour < 12) {
        texto.textContent = "Bom dia!!"
        
    } else if (hour >= 12 && hour < 18) {
        texto.textContent = "Boa tarde!!"

    } else {
        texto.textContent = "Boa noite!!"
    }

    hora.textContent = hour
    minuto.textContent = minute
    segundo.textContent = second
    dia.textContent = date
    mes.textContent = month 
    ano.textContent = year
}