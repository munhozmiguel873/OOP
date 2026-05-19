class Foto {
    constructor(url, legenda, descricao, lat, lon) {
        this.url = url;
        this.legenda = legenda;
        this.descricao = descricao;
        this.localizacao = { lat, lon };
        this.dataCriacao = new Date();
    }
}

const btn = document.querySelector("#btn-adicionar");
const galeria = document.querySelector("#galeria");

btn.addEventListener('click', () => {
    const url = document.querySelector('#ipt-url').value;
    const legenda = document.querySelector('#ipt-title').value;
    const descricao = document.querySelector('#ipt-desc').value;
    const lat = parseFloat(document.querySelector('#ipt-lat').value) || 0;
    const lon = parseFloat(document.querySelector('#ipt-lon').value) || 0;

    if (!url || !legenda) {
        return alert("Por favor, insira a URL e a legenda da foto.");
    }

    const novaFoto = new Foto(url, legenda, descricao, lat, lon);

    const card = document.createElement('div');
    card.className = 'card-foto';

    card.innerHTML = `
        <img src="${novaFoto.url}" alt="${novaFoto.legenda}">
        
        <div class="card-info">
            <h3>${novaFoto.legenda}</h3>
            <p>${novaFoto.descricao}</p>

            <div>
                🎈 Lat: ${novaFoto.localizacao.lat}, Lon: ${novaFoto.localizacao.lon}
            </div>
        </div>
    `;

    galeria.prepend(card);

    // limpar inputs
    document.querySelectorAll('input').forEach(i => i.value = "");
});