const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')

botao.addEventListener('click', gerarQR)
url.addEventListener('keydown', (event)=> {
    if (event.key == 'Enter') {
        gerarQR()
    }
})

function gerarQR() {
    texto = url.value

    if (texto) {
        code = new QRCode (qr, {
            text: texto,
            width: 400,
            height: 400,
            colorDark: 'white',
            colorLight: 'black'
        })
    } 
    else {
        qr.innerHTML = ''
    }
}
