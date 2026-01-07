/* script.js */
const cabecalho = document.getElementById('menu-navegacao');
const botaoMenu = document.getElementById('btn-mobile-toggle');
const listaLinks = document.getElementById('menu-links');

// Função para mudar o estilo do menu ao rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        cabecalho.classList.add('cabecalho-rolagem');
    } else {
        cabecalho.classList.remove('cabecalho-rolagem');
    }
});

// Função para abrir/fechar menu mobile
botaoMenu.addEventListener('click', () => {
    botaoMenu.classList.toggle('menu-aberto');
    listaLinks.classList.toggle('ativo');
    
    // Bloqueia o scroll do corpo quando o menu está aberto
    const estaAberto = listaLinks.classList.contains('ativo');
    document.body.style.overflow = estaAberto ? 'hidden' : 'auto';
});

// Fecha o menu ao clicar em qualquer link
const links = document.querySelectorAll('.link-navegacao');
links.forEach(link => {
    link.addEventListener('click', () => {
        botaoMenu.classList.remove('menu-aberto');
        listaLinks.classList.remove('ativo');
        document.body.style.overflow = 'auto';
    });
});

// Observador de Interseção para revelar elementos ao scroll
const observadorRevelacao = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            // Adiciona a classe 'visivel' quando o elemento aparece na tela
            entrada.target.classList.add('visivel');
        }
    });
}, { 
    threshold: 0.1 // Dispara quando 10% do elemento está visível
});

// Seleciona todos os elementos que devem ser revelados
const elementosParaRevelar = document.querySelectorAll('.revelacao-automatica');

// Inicia a observação para cada um deles
elementosParaRevelar.forEach(elemento => {
    observadorRevelacao.observe(elemento);
});

/**
 * Script de Animação de Revelação (Scroll Reveal)
 * Aplicado aos elementos com a classe .js-reveal
 */
document.addEventListener("DOMContentLoaded", () => {
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que dispara a transição do CSS
                entry.target.classList.add('show');
                // Opcional: para de observar após a primeira animação
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.1 // Dispara quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver(revealCallback, revealOptions);

    // Seleciona todos os elementos que devem ser revelados
    const revealElements = document.querySelectorAll('.js-reveal');
    
    revealElements.forEach(el => observer.observe(el));
});