


// PARTE DO SLIDE

$(document).ready(function(){
    $('.banner').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1, // Exibe 1 imagem ao mesmo tempo
        slidesToScroll: 2,
        adaptiveHeight: true,
        centerMode: true, // Habilita o modo centralizado
        centerPadding: '35px', // Aumenta o espaçamento em volta da imagem central
    });
});

(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//FIM DA PARTE DO SLIDE

const frases = [
    "Eu amo Você",
    "Amo a Gente",
    "Eu & Você",
    "Você & Eu",
    "Nós & Nós"
];

let index = 0;
let caractereAtual = 0;
const fraseElement = document.getElementById('frase-text');

function escreverCaractere() {
    const fraseAtual = frases[index];
    const palavras = fraseAtual.split(" ");
    const ultimaPalavra = palavras[palavras.length - 1];
    const fraseSemUltimaPalavra = palavras.slice(0, -1).join(" ") + " "; // Mantém o espaço

    if (caractereAtual < fraseSemUltimaPalavra.length + ultimaPalavra.length) {
        if (caractereAtual < fraseSemUltimaPalavra.length) {
            fraseElement.innerHTML = fraseSemUltimaPalavra.substring(0, caractereAtual + 1);
        } else {
            fraseElement.innerHTML = fraseSemUltimaPalavra + 
                `<span style="color: red;">${ultimaPalavra.substring(0, caractereAtual - fraseSemUltimaPalavra.length + 1)}</span>`;
        }
        caractereAtual++;
        setTimeout(escreverCaractere, 200);
    } else {
        setTimeout(mostrarProximaFrase, 1000);
    }
}

function mostrarProximaFrase() {
    fraseElement.classList.remove('visible');

    index = (index + 1) % frases.length;
    caractereAtual = 0;

    setTimeout(() => {
        fraseElement.classList.add('visible');
        escreverCaractere();
    }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarProximaFrase();
});
//parte da cartaconst bgImage = document.getElementById('bgImage');
const bgImage = document.getElementById('bgImage');
        const focusedImage = document.getElementById('focusedImage');
        const pausedImage = document.getElementById('pausedImage');
        const overlay = document.getElementById('overlay');

        bgImage.addEventListener('click', function() {
            focusedImage.style.display = 'block';
            overlay.style.display = 'block';
            bgImage.classList.add('blur');

            setTimeout(() => {
                focusedImage.style.display = 'none';
                pausedImage.style.display = 'block';
            }, 3000); // Troca após 3 segundos
        });

        overlay.addEventListener('click', function() {
            focusedImage.style.display = 'none';
            pausedImage.style.display = 'none';
            overlay.style.display = 'none';
            bgImage.classList.remove('blur');
        });

//CONTADOR DE TEMPO
function atualizarContagem() {
    const dataInicial = new Date('2021-11-11'); // Data de início
    const dataAtual = new Date();
    const diff = dataAtual - dataInicial;

    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));

    document.getElementById('anos').innerText = `${anos} anos`;
    document.getElementById('dias').innerText = `${dias} dias`;
}

atualizarContagem();
setInterval(atualizarContagem, 1000 * 60 * 60 * 24); // Atualiza a cada 24 horas

//MUSICA
$(document).ready(function(){
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});