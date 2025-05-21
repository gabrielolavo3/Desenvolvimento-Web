const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')

botao.addEventListener('click', gerarQR)

function gerarQR() {
    texto = url.value
    qr.innerHTML = ""

    code = new QRCode (qr, {
        text: texto,
        width: 400,
        height: 400,
        colorDark: 'white',
        colorLight: 'black'
    });
}
