const dadosNoticias = [
    {
        id: 1,
        titulo: "Consciência Negra: Branquitude e Antirracismo",
        data: "12 de Novembro de 2025",
        categoria: "Conscientização",
        fotos: [
            "/assets/img/noticias/consciencia-negra-1.jpg",
            "/assets/img/noticias/consciencia-negra-2.jpg",
            "/assets/img/noticias/consciencia-negra-3.jpg"
        ],
        autor: "Redação Vozes",
        tempo: "1 min de leitura",
        resumo: "Palestra com Klayson Ferreira promove debate essencial sobre branquitude e o papel do olhar crítico no antirracismo.",
        desc: "No dia 12 de novembro, recebemos o psicólogo e capoeirista Klayson Ferreira para uma palestra transformadora em alusão à Consciência Negra. O debate trouxe à tona a urgência de discutirmos a branquitude e seu impacto estrutural na sociedade. Klayson reforçou que o antirracismo exige que a maioria volte o olhar para si mesma, analisando privilégios e desconstruindo preconceitos normalizados. Foi um momento fundamental de aprendizado para buscarmos, juntos, uma equidade real e efetiva."
    },

    {
        id: 2,
        titulo: "Setembro Amarelo: Cuidado e Saúde Mental",
        data: "17 de Setembro de 2025",
        categoria: "Saúde",
        fotos: [
            "/assets/img/noticias/setembro-amarelo-1.jpg",
            "/assets/img/noticias/setembro-amarelo-2.jpg",
            "/assets/img/noticias/setembro-amarelo-3.jpg",
            "/assets/img/noticias/setembro-amarelo-4.jpg"
        ],
        autor: "Redação Vozes",
        tempo: "1 min de leitura",
        resumo: "Palestra vital sobre valorização da vida, rede de apoio e a importância de ouvir e acolher o próximo.",
        desc: "Recebemos Cristiane e Américo para um diálogo essencial sobre o Setembro Amarelo. Aprendemos que cuidar da saúde mental começa no reconhecimento dos nossos sentimentos e na escuta ativa do próximo. O encontro reforçou que ninguém precisa caminhar sozinho: fortalecer nossas redes de apoio e saber quando buscar ajuda (como o CVV 188) são atos de amor próprio e coletivo. Saúde mental importa todos os dias!"
    },

    {
        id: 3,
        titulo: "PDI: Plano de Desenvolvimento Individual com Rodonaves",
        data: "24 de Agosto de 2025",
        categoria: "Carreira",
        fotos: [
            
            "/assets/img/noticias/rodonaves-1.jpg",
            "/assets/img/noticias/rodonaves-2.jpg",
            "/assets/img/noticias/rodonaves-3.jpg",
            "/assets/img/noticias/rodonaves-3.jpg"
        ],
        autor: "Redação Vozes",
        tempo: "1 min de leitura",
        resumo: "Leonardo Goes, da Rodonaves, compartilha estratégias valiosas sobre crescimento pessoal e profissional através do PDI.",
        desc: "Tivemos a honra de receber Leonardo Goes, analista de recursos humanos da empresa Rodonaves, para uma palestra inspiradora sobre o Plano de Desenvolvimento Individual (PDI). Foi um momento de muito aprendizado e troca de experiências, onde refletimos sobre como investir no nosso próprio crescimento. Leonardo nos motivou a olhar para o futuro com estratégia, reforçando que a evolução contínua é a chave para o sucesso profissional e pessoal. Gratidão por essa parceria transformadora!"
    },

    {
        id: 4,
        titulo: "De Olho no Futuro: Palestra com Paloma Lopes",
        data: "04 de Junho de 2025",
        categoria: "Carreira",
        fotos: [
            "/assets/img/noticias/paloma-lopes-1.jpg",
            "/assets/img/noticias/paloma-lopes-2.jpg"
        ],
        autor: "Redação Vozes",
        tempo: "1 min de leitura",
        resumo: "A advogada Paloma Lopes inspira jovens com sua trajetória de determinação, força e conquistas na carreira jurídica.",
        desc: "A Dra. Paloma Lopes trouxe uma dose extra de inspiração para o Projeto De Olho no Futuro. Com um relato potente sobre sua trajetória no Direito, ela mostrou aos nossos participantes que os desafios podem ser vencidos com foco e coragem. Sua história é um exemplo vivo de que a educação e a determinação são as ferramentas principais para transformar sonhos em realidade. Uma manhã de força e representatividade!"
    },

    {
        id: 5,
        titulo: "Vivência no Canteiro de Obras do Rodoanel",
        data: "28 de Maio de 2025",
        categoria: "Experiência",
        fotos: [
            "/assets/img/noticias/rodoanel-1.jpg",
            "/assets/img/noticias/rodoanel-2.jpg",
            "/assets/img/noticias/rodoanel-3.jpg",
            "/assets/img/noticias/rodoanel-4.jpg"
        ],
        autor: "Redação Vozes",
        tempo: "1 min de leitura",
        resumo: "Equipe da ONG visita as obras do Rodoanel para uma imersão em engenharia e infraestrutura.",
        desc: "Nossa equipe vivenciou um dia de aprendizado prático em um dos maiores canteiros de obras do estado. A visita técnica ao Rodoanel expandiu nosso repertório sobre engenharia e segurança, mas acima de tudo, reforçou nossa missão: preparar nossos jovens para sonhar alto e construir novos caminhos. Agradecemos aos profissionais que compartilharam conhecimento e inspiraram nosso time com tanta generosidade."
    },

    {
        id: 6,
        titulo: "Reflexão e Conscientização – Maio Laranja",
        data: "21 de Maio de 2025",
        categoria: "Conscientização",
        fotos: [
            "/assets/img/noticias/maio-laranja-1.jpg",
            "/assets/img/noticias/maio-laranja-2.jpg",
            "/assets/img/noticias/maio-laranja-3.jpg",
            "/assets/img/noticias/maio-laranja-4.jpg"
        ],
        autor: "Redação Vozes",
        tempo: "1 min de leitura",
        resumo: "Oficina especial de enfrentamento ao abuso infantil com dinâmica de capoeira e resgate histórico do Caso Araceli.",
        desc: "Em apoio à campanha Maio Laranja, realizamos uma oficina sensível conduzida por Kleyson. Iniciamos com uma dinâmica de capoeira para criar um ambiente de acolhimento e leveza. Durante o encontro, relembramos o 'Caso Araceli' como um alerta necessário sobre a proteção de nossas crianças. Foi um momento de fortalecer nossa rede de proteção com muita empatia, seriedade e compromisso social."
    },

    {
        id: 7,
        titulo: "Projeto Via de Mão Dupla",
        data: "07 de Maio de 2025",
        categoria: "Educação",
        fotos: [
            "/assets/img/noticias/via-de-mao-dupla-1.jpg",
            "/assets/img/noticias/via-de-mao-dupla-2.jpg",
            "/assets/img/noticias/via-de-mao-dupla-3.jpg"
        ],
        autor: "Redação Vozes",
        tempo: "1 min de leitura",
        resumo: "Educação ambiental e conscientização sobre os impactos da construção do Rodoanel na fauna e flora local.",
        desc: "Recebemos os palestrantes Roberto, Daniel e Rodrigo para uma imersão sobre os impactos ecológicos do Rodoanel. A palestra 'Via de Mão Dupla' trouxe reflexões profundas sobre como grandes obras afetam o ecossistema. O ponto alto foi o contato direto com exemplares da fauna, proporcionando uma experiência educativa prática que reforçou a importância de protegermos nossa biodiversidade."
    },
    
];

const ntWrapper = document.getElementById('noticiasScroll');
const ntTarget = document.getElementById('modais-noticias-target');

function carregarNoticias() {
    dadosNoticias.forEach((n) => {
        // Injetar Card no Carrossel
        ntWrapper.innerHTML += `
            <article class="nt-card" onclick="abrirN('modalN${n.id}')">
                <img src="${n.fotos[0]}" class="nt-capa" alt="${n.titulo}">
                <div class="nt-info">
                    <span class="nt-tag">${n.categoria}</span>
                    <h3>${n.titulo}</h3>
                    <p class="nt-resumo">${n.resumo}</p>
                    <div style="font-size: 11px; color: #29acc7; font-weight: 800; margin-top: auto;">LER MAIS →</div>
                </div>
            </article>`;

        // Injetar Modal no final do Body
        ntTarget.innerHTML += `
            <div class="nt-modal" id="modalN${n.id}" onclick="clickForaN(event, 'modalN${n.id}')">
                <div class="nt-modal-inner">
                    <div class="nt-fechar" onclick="fecharN('modalN${n.id}')">✕</div>
                    
                    <div class="nt-modal-hero" id="heroN-${n.id}">
                        ${n.fotos.length > 1 ? `<button class="nt-seta-modal nt-modal-prev" onclick="mudarFotoN('${n.id}', -1)">❮</button>` : ''}
                        ${n.fotos.map((img, i) => `<img src="${img}" class="${i === 0 ? 'active' : ''}" alt="Foto da notícia">`).join('')}
                        ${n.fotos.length > 1 ? `<button class="nt-seta-modal nt-modal-next" onclick="mudarFotoN('${n.id}', 1)">❯</button>` : ''}
                        
                        <div class="nt-indicadores">
                            ${n.fotos.map((_, i) => `<div class="nt-tracinho ${i === 0 ? 'ativo' : ''}"></div>`).join('')}
                        </div>
                    </div>

                    <div class="nt-modal-body">
                        <span class="nt-tag">${n.categoria}</span>
                        <h2>${n.titulo}</h2>
                        <div class="nt-grid">
                            <div class="nt-info-item"><strong>Publicado em</strong><span>${n.data}</span></div>
                            <div class="nt-info-item"><strong>Autor</strong><span>${n.autor}</span></div>
                            <div class="nt-info-item"><strong>Leitura</strong><span>${n.tempo}</span></div>
                        </div>
                        <p class="nt-desc-texto">${n.desc}</p>
                    </div>
                </div>
            </div>`;
    });
}

// Controle do Carrossel Principal
function scrollN(dir) {
    ntWrapper.scrollBy({ left: dir * 370, behavior: 'smooth' });
}

// Abrir e Fechar Modal
function abrirN(id) {
    const m = document.getElementById(id);
    if (m) {
        m.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function fecharN(id) {
    const m = document.getElementById(id);
    if (m) {
        m.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function clickForaN(e, id) {
    if (e.target.classList.contains('nt-modal')) fecharN(id);
}

// Troca de Fotos dentro do Modal (Sincronizada com Tracinhos)
function mudarFotoN(id, dir) {
    const container = document.getElementById(`heroN-${id}`);
    const fotos = container.querySelectorAll('img');
    const tracinhos = container.querySelectorAll('.nt-tracinho');
    let ativo = 0;

    fotos.forEach((img, i) => {
        if (img.classList.contains('active')) ativo = i;
    });

    fotos[ativo].classList.remove('active');
    if (tracinhos.length > 0) tracinhos[ativo].classList.remove('ativo');

    let novo = (ativo + dir + fotos.length) % fotos.length;

    fotos[novo].classList.add('active');
    if (tracinhos.length > 0) tracinhos[novo].classList.add('ativo');
}

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const mAtivo = document.querySelector('.nt-modal.active');
        if (mAtivo) fecharN(mAtivo.id);
    }
});

// Inicializar
carregarNoticias();