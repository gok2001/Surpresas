const mensagemTexto = "Desde que eu te conheci, meus dias tem sido mais leves, mais doces... então, só falta uma coisa pra tudo ficar perfeito:";
let i = 0;

const mensagemElemento = document.getElementById('mensagem');
const perguntaElemento = document.getElementById('pergunta');

function digitarTexto() {
    if (i < mensagemTexto.length) {
        document.getElementById('mensagem').innerHTML += mensagemTexto.charAt(i);
        i++;
        setTimeout(digitarTexto, 75);
    } else {
        setTimeout(() => {
            mensagemElemento.classList.add('fade-out');

            setTimeout(() => {
                mensagemElemento.style.display = 'none';
                perguntaElemento.style.display = 'block';
                perguntaElemento.classList.add('fade-in');
            }, 1000);
        }, 500);
    }
}

window.onload = digitarTexto;

function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('floating-heart');
    coracao.innerText = '🩷';

    coracao.style.left = `${Math.random() * 100}vw`;

    const tamanho = Math.random() * 1.5 + 0.5;
    coracao.style.fontSize = `${tamanho}rem`;

    const duracao = Math.random() * 3 + 3;
    coracao.style.animationDuration = `${duracao}s`;

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, duracao * 1000);
}

let coracaoIntervalo = setInterval(criarCoracao, 400);

document.addEventListener('DOMContentLoaded', () => {
    const sim = document.getElementById('sim');
    const nao = document.getElementById('nao');
    let tamanho = 1;
    let fugindo = false;

    sim.addEventListener('click', () => {
        clearInterval(coracaoIntervalo);

        const container = document.querySelector('.container');
        const pergunta = document.getElementById('pergunta');

        if (pergunta) pergunta.remove();

        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerText = '💖';

        const titulo = document.createElement('h1');
        titulo.innerText = 'EEEEEEE! Eu sabia! 🥰';

        const texto = document.createElement('p');
        texto.innerText = 'Agora somos oficialmente namorados! 💕';

        const confete = document.createElement('div');
        confete.className = 'confete';
        confete.innerText = '🎉🎊💞';

        container.appendChild(heart);
        container.appendChild(titulo);
        container.appendChild(texto);
        container.appendChild(confete);

        document.title = 'Agora estamos namorando! 💖'
    });

    nao.addEventListener('mouseover', () => {
        if (!fugindo) {
            fugindo = true;
            const rect = nao.getBoundingClientRect();
            nao.style.position = 'fixed';
            nao.style.left = `${rect.left}px`;
            nao.style.top = `${rect.top}px`;
        }

        const maxX = window.innerWidth - nao.offsetWidth;
        const maxY = window.innerHeight - nao.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        nao.style.left = `${x}px`
        nao.style.top = `${y}px`

        tamanho += 0.2;
        sim.style.transform = `scale(${tamanho})`;

        if (tamanho > 2) {
            nao.textContent = "Tem certeza? 🥺";
        }
        if (tamanho > 3) {
            nao.textContent = "Por favorzinho 🙏";
        }
    });
});