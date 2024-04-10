const imagem = document.querySelector('#imagem')
const sinopse = document.querySelector('#texto')
const btn1 = document.querySelector('#filme1')
const btn2 = document.querySelector('#filme2')
const btn3 = document.querySelector('#filme3')
const btn4 = document.querySelector('#filme4')

btn1.addEventListener ('click', ()=> {
    sinopse.textContent = 'Homem-Aranha: Através do Aranhaverso, é a continuação do vencedor do Oscar Homem-Aranha: No Aranhaverso, de 2018, que acompanha Miles Morales (Shameik Moore), o simpático Homem-Aranha do Brooklyn. Neste novo capítulo, Miles está de volta para uma nova missão em sua agitada vida como super herói. No novo filme, Morales é transportado para uma aventura épica através do multiverso, e deve unir forças com a mulher-aranha Gwen Stacy (Hailee Steinfeld) e um novo time de Pessoas-Aranha, formado por heróis de diversas dimensões. No entanto, tudo muda quando os heróis entram em conflito sobre como lidar com uma nova ameaça, e Miles se vê em um impasse. E para piorar ainda mais a situação, eles precisam enfrentar um vilão muito mais poderoso do que qualquer coisa que já tenham encontrado antes. Agora, para salvar as pessoas que ele mais ama no mundo, Miles deve redefinir o que significa ser um super herói.'
    imagem.src = 'images/aranhaverso2.jpg'
})

btn2.addEventListener ('click', ()=> {
    sinopse.textContent = 'Deadpool 2” traz novamente o irreverente Wade Wilson/Deadpool, interpretado por Ryan Reynolds, em mais uma jornada recheada de humor ácido e ação explosiva. Após sofrer uma perda pessoal devastadora, Wade busca encontrar seu propósito e decide formar uma equipe de heróis pouco convencionais para proteger um jovem mutante chamado Russell Collins, também conhecido como Punho de Fogo. Essa tarefa, no entanto, não será fácil, uma vez que Deadpool precisa enfrentar o poderoso soldado do futuro, Cable, que viaja no tempo para eliminar o jovem mutante. Para ajudá-lo nessa missão, Deadpool forma o grupo conhecido como X-Force, composto por personagens peculiares como Dominó, Bedlam, Shatterstar e outros.'
    imagem.src = 'images/deadpool2.jpg'
})

btn3.addEventListener ('click', ()=>{
    sinopse.textContent = 'Jack (Edward Norton) é um executivo jovem, trabalha como investigador de seguros, mora confortavelmente, mas ele está ficando cada vez mais insatisfeito com sua vida medíocre. Para piorar ele está enfrentando uma terrível crise de insônia, até que encontra uma cura inusitada para o sua falta de sono ao frequentar grupos de auto-ajuda. Nesses encontros ele passa a conviver com pessoas problemáticas como a viciada Marla Singer (Helena Bonham Carter) e a conhecer estranhos como Tyler Durden (Brad Pitt). Misterioso e cheio de ideias, Tyler apresenta para Jack um grupo secreto que se encontra para extravasar suas angústias e tensões através de violentos combates corporais.'
    imagem.src = 'images/clubedaluta.webp'
})

btn4.addEventListener ('click', ()=> {
    sinopse.textContent = 'Oppenheimer é um filme histórico de drama dirigido por Christopher Nolan e baseado no livro biográfico vencedor do Prêmio Pulitzer, Prometeu Americano: O Triunfo e a Tragédia de J. Robert Oppenheimer, escrito por Kai Bird e Martin J. Sherwin. Ambientado na Segunda Guerra Mundial, o longa acompanha a vida de J. Robert Oppenheimer (Cillian Murphy), físico teórico da Universidade da Califórnia e diretor do Laboratório de Los Alamos durante o Projeto Manhattan - que tinha a missão de projetar e construir as primeiras bombas atômicas. A trama acompanha o físico e um grupo formado por outros cientistas ao longo do processo de desenvolvimento da arma nuclear que foi responsável pelas tragédias nas cidades de Hiroshima e Nagasaki, no Japão, em 1945'
    imagem.src = 'images/opperheimer.webp'
})