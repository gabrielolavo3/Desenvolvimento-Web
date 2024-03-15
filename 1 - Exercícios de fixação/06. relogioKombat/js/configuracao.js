// DOM

const horas = document.querySelector ('#horas')
const minuto = document.querySelector ('#minutos')
const segundo = document.querySelector ('#segundos')

const data = document.querySelector ('#date')
const mes = document.querySelector ('#mes')
const ano = document.querySelector ('#ano')
const frase = document.querySelector ('#frase')
const alvo = document.querySelector ('img')

// Eventos

setInterval(temporizador, 1000)

// Funções

function temporizador() {
    let dia = new Date() 

    let hr = dia.getHours() 
    let min = dia.getMinutes() 
    let seg = dia.getSeconds()

    let dd = dia.getDate() 
    let mm = dia.getMonth() + 1
    let aa = dia.getFullYear()


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

    if (dd < 10) {
        dd = "0" + dd 
    }

    if (mm < 10) {
        mm = "0" + mm
    }

// 

    if (hr >= 5 && hr < 12) {
        frase.textContent = 'Bom dia'
        alvo.src = 'images/sol.png'
        
    } else if (hr >= 12 && hr < 18) {
        frase.textContent = 'Boa tarde'
        alvo.src = 'images/solTarde.png'
        
    } else {
        frase.textContent = 'Boa noite'
        alvo.src = 'images/lua.png'
    }

// Imprimindo na tela

    horas.textContent = hr 
    minuto.textContent = min
    segundo.textContent = seg

    data.textContent = dd 
    mes.textContent = mm 
    ano.textContent = aa
}