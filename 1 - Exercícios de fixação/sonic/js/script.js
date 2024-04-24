// Dev - Gabriel Santos Olavo

const sonic = document.querySelector('.sonic')
const pipe = document.querySelector ('.pipe')
const tails = document.querySelector ('.tails')
const eggman = document.querySelector ('.eggman')
const score = document.querySelector ('.scoreboard')

const jump = () => {
    sonic.classList.add('jump')
    sonic.src = 'images/sonic_pulo.gif'

    setTimeout(() => {
        sonic.classList.remove('jump')
        sonic.src = 'images/sonic.gif'

    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '')

    console.log (sonicPosition)

    if (pipePosition <= 120 && pipePosition > 0 && sonicPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        sonic.style.animation = 'none'
        sonic.style.left = `${sonicPosition}px`

        eggman.src = 'images/eggman_smile.gif'
        sonic.src = 'images/game_over_sonic.gif'
        sonic.style.width = '110px'
        sonic.style.marginLeft = '50px'

        clearInterval(loop)
    }

    if (pipePosition >= 1 && sonicPosition >= 80) { 
       Number (contador++);
        score.textContent = contador +1 
    }

    
}, 10)

document.addEventListener('keydown', jump)