const frases = [
    'Seu sorriso é meu lugar favorito 🌟',
    'Você me faz querer ser melhor todos os dias 💗',
    'Estar com você é como viver dentro de um abraço quentinho ☁️',
    'Se eu pudesse, te colocava num potinho só meu 🫶',
    'Você é meu pensamento favorito do dia 🥰',
    'Você é meu pensamento bom de todos os dias ☀️',
    'Você ilumina até meus dias nublados',
    'Sua voz é meu som favorito 🎶',
    'Desde que te conheci, a vida tem gosto de abraço 🤗',
    'Você é o detalhe que faltava no meu mundo ✨',
    'Com você, tudo é mais bonito 💐',
    'Meu coração sorri quando vê você 😊',
    'Você transforma qualquer lugar em lar 🏡',
    'Seu olhar me dá paz 😌',
    'Cada momento com você é um presente 🎁',
    'Você é poesia em forma de gente 📖❤️',
    'Você é meu milagre diário 🌟',
    'Tudo em você me encanta 🌸',
    'O tempo para quando estou com você ⏳',
    'Você é a razão do meu melhor sorriso 😍'
]

let indice = 0
const fraseElement = document.getElementById('frase')
const botao = document.getElementById('proxima')

botao.addEventListener('click', () => {
    fraseElement.style.opacity = 0
    setTimeout(() => {
        fraseElement.textContent = frases[indice]
        fraseElement.style.opacity = 1
        indice = (indice + 1) % frases.length
    }, 300)
})

function criarCoracao() {
    const coracao = document.createElement('div')
    coracao.classList.add('coracao')
    coracao.textContent = '💖'
    coracao.style.left = `${Math.random() * 100}%`
    document.querySelector('.coracoes').appendChild(coracao)
    setTimeout(() => coracao.remove(), 5000)
}
setInterval(criarCoracao, 800)