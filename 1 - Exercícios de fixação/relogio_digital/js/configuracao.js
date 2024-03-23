// DOM

const horas = document.querySelector ('#horas')
const minuto = document.querySelector ('#minutos')
const segundo = document.querySelector ('#segundos')

// Eventos

setInterval(temporizador, 1000) // Função e tempo de acontecer (1000 -> 1s)

// Funções

function temporizador() {
    // Let é uma variável mutável
    let dia = new Date() // New Date armazena horas, minutos, segundos, dia, mês e ano do WINDOWS
    let hr = dia.getHours() // HR pegar de DIA a hora do SO
    let min = dia.getMinutes() // MIN pegar de DIA o minuto do SO
    let seg = dia.getSeconds()


    // Corrigindo o bug da hora
    
        if (hr < 10) {
            hr = "0" + hr
        }
        if (min < 10) {
            min = "0" + min
        }
        if (seg < 10) {
            seg = "0" + seg
        }

    // Imprimindo na tela

        horas.textContent = hr // textContent muda o texto do HTML
        minuto.textContent = min
        segundo.textContent = seg
}