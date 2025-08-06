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

        const svgWrapper = document.createElement('div');
        svgWrapper.className = 'svg-heart-wrapper';
        svgWrapper.innerHTML = `
            <svg viewBox="-20 -20 552 552" class="svg-heart">
                <path class="heart-stroke" d="
                    M256,116.3
                    L226.7,86.8
                    C176.3,34.8,94.8,26.7,40.3,73.1
                    C-17.5,127.2,-16.1,230.8,55.5,304.4
                    L236,489.7
                    C241.7,495.5,248.8,498.4,256,498.4" 
                    fill="none" stroke="#ff69b4" />

                    <path class="heart-stroke" d="
                    M256,116.3
                    L285.3,86.8
                    C335.7,34.8,417.2,26.7,471.7,73.1
                    C529.5,127.2,528.1,230.8,456.5,304.4
                    L276,489.7
                    C270.3,495.5,263.2,498.4,256,498.4" 
                    fill="none" stroke="#ff69b4" />

                <foreignObject x="60" y="140" width="390" height="230" class="heart-content" style="opacity: 0;">
                    <div xmlns="http://www.w3.org/1999/xhtml" class="svg-texto">
                        <h1>EEEEEEE! Eu sabia! 🥰</h1>
                        <p>Agora somos oficialmente namorados! 💕</p>
                    </div>
                </foreignObject>
            </svg>
        `;


        document.title = 'Agora estamos namorando! 💖'
        const confete = document.createElement('div');
        confete.className = 'confete';
        confete.innerText = '🎉🎊💞';
        
        container.appendChild(svgWrapper);
        container.appendChild(confete);
        
        setTimeout(() => {
            const textoHeart = svgWrapper.querySelector('.heart-content');
            if (textoHeart) {
                textoHeart.style.opacity = '1';
                textoHeart.style.transition = 'opacity 1s ease-in-out';
            }

            function soltarFogos() {
                confetti({
                    particleCount: 100,
                    spread: 100,
                    origin: { y: Math.random() * 0.6 + 0.2 }
                });
            }
            let intervaloFogos = setInterval(soltarFogos, 1800);
        }, 1000);
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