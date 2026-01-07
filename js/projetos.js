const dadosProjetos = [
    {
        id: 1,
        titulo: "Espro Junino",
        data: "Junho de 2025",
        foco: "Colaboradores e Equipe",
        fotos: [""],
        ativ: "Integração e Cultura Popular",
        parc: "Marketing e T.I",
        desc: "O Espro Junino foi idealizado como o primeiro evento da ONG para promover a união e a valorização da cultura popular. Através de um esforço conjunto, cada setor contribuiu para um café comunitário temático: o Marketing cuidou da decoração e mini churros, a T.I colaborou na organização da mesa e salgados (junto ao RH), enquanto os setores de P.D, SST, Líderes e Professores garantiram os demais alimentos, bebidas e descartáveis. O foco principal foi fortalecer os laços internos e criar um ambiente acolhedor e organizado para todos os colaboradores."
    }
    
  
];

const wrapper = document.getElementById('masterScroll');
const target = document.getElementById('modais-target');

function renderizarConteudo() {
    dadosProjetos.forEach((p) => {
        // Injetar Card
        wrapper.innerHTML += `
            <article class="pj-card-item" onclick="abrirM('modal${p.id}')">
                <img src="${p.fotos[0]}" class="pj-card-img" alt="${p.titulo}">
                <div class="pj-card-overlay">
                    <h3>${p.titulo}</h3>
                    <div style="font-size: 11px; color: #29acc7; font-weight: 800;">VER DETALHES →</div>
                </div>
            </article>`;

        // Injetar Modal
        target.innerHTML += `
            <div class="pj-modal-overlay" id="modal${p.id}" onclick="clickFora(event, 'modal${p.id}')">
                <div class="pj-modal-box">
                    <div class="pj-fechar" onclick="fecharM('modal${p.id}')">✕</div>
                    <div class="pj-modal-hero" id="hero-${p.id}">
                        ${p.fotos.length > 1 ? `<button class="pj-seta-modal pj-prev" onclick="mudarFoto('${p.id}', -1)">❮</button>` : ''}
                        ${p.fotos.map((img, i) => `<img src="${img}" class="${i === 0 ? 'active' : ''}">`).join('')}
                        ${p.fotos.length > 1 ? `<button class="pj-seta-modal pj-next" onclick="mudarFoto('${p.id}', 1)">❯</button>` : ''}
                        <div class="pj-indicadores">
                            ${p.fotos.map((_, i) => `<div class="pj-tracinho ${i === 0 ? 'ativo' : ''}"></div>`).join('')}
                        </div>
                    </div>
                    <div class="pj-modal-text-content">
                        <h2>${p.titulo}</h2>
                        <div class="pj-info-grid">
                            <div class="pj-info-item"><strong>Data</strong><span>${p.data}</span></div>
                            <div class="pj-info-item"><strong>Atividade</strong><span>${p.ativ}</span></div>
                            <div class="pj-info-item"><strong>Foco</strong><span>${p.foco}</span></div>
                            <div class="pj-info-item"><strong>Parceria</strong><span>${p.parc}</span></div>
                        </div>
                        <p class="pj-desc">${p.desc}</p>
                    </div>
                </div>
            </div>`;
    });
}

function scrollP(dir) { wrapper.scrollBy({ left: dir * 350, behavior: 'smooth' }); }

function abrirM(id) {
    const m = document.getElementById(id);
    if (m) {
        m.classList.add('ativo');
        document.body.style.overflow = 'hidden'; // Trava scroll do site
    }
}

function fecharM(id) {
    const m = document.getElementById(id);
    if (m) {
        m.classList.remove('ativo');
        document.body.style.overflow = 'auto'; // Libera scroll do site
    }
}

function clickFora(e, id) { if (e.target.classList.contains('pj-modal-overlay')) fecharM(id); }

function mudarFoto(id, dir) {
    const container = document.getElementById(`hero-${id}`);
    const fotos = container.querySelectorAll('img');
    const tracinhos = container.querySelectorAll('.pj-tracinho');
    let ativo = 0;
    fotos.forEach((img, i) => { if (img.classList.contains('active')) ativo = i; });

    fotos[ativo].classList.remove('active');
    tracinhos[ativo].classList.remove('ativo');
    let novo = (ativo + dir + fotos.length) % fotos.length;
    fotos[novo].classList.add('active');
    tracinhos[novo].classList.add('ativo');
}

// Tecla ESC para fechar
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const mAtivo = document.querySelector('.pj-modal-overlay.ativo');
        if (mAtivo) fecharM(mAtivo.id);
    }
});

renderizarConteudo();