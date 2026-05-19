class Foto {
    constructor(url, legenda, resumo, lat, lon) {
        this.url = url;
        this.legenda = legenda;
        this.resumo = resumo;
        this.localizacao = { lat, lon };
        this.dataCriacao = new Date();
    }
}

function pegarLocalizacao() {
    navigator.geolocation.getCurrentPosition(
        (posicao) => {
            document.querySelector("#ipt-lat").value = posicao.coords.latitude;
            document.querySelector("#ipt-lon").value = posicao.coords.longitude;

            alert("Localização capturada com sucesso 📍");
        },
        () => {
            alert("Permissão negada ou erro ao capturar localização.");
        }
    );
}

const btn = document.querySelector("#btn-adicionar");
const galeria = document.querySelector("#galeria");

btn.addEventListener('click', () => {
    const url = document.querySelector('#ipt-url').value;
    const legenda = document.querySelector('#ipt-legenda').value;
    const resumo = document.querySelector('#ipt-resumo').value;

    const lat = parseFloat(document.querySelector('#ipt-lat').value) || 0;
    const lon = parseFloat(document.querySelector('#ipt-lon').value) || 0;

    if (!url || !legenda) {
        alert("Por favor, insira a URL e a legenda.");
        return;
    }

    const novaFoto = new Foto(url, legenda, resumo, lat, lon);

    const card = document.createElement('div');
    card.className = 'card-foto';

    card.innerHTML = `
        <img src="${novaFoto.url}" alt="${novaFoto.legenda}">
        
        <div class="card-info">
            <h3>${novaFoto.legenda}</h3>
            <p>${novaFoto.resumo}</p>

            <div class="card-footer">
                📍 Lat: ${novaFoto.localizacao.lat} | Lon: ${novaFoto.localizacao.lon}
            </div>

            <div class="card-small">
                🕒 ${novaFoto.dataCriacao.toLocaleString()}
            </div>

            <button class="btn-local" onclick="pegarLocalizacao()">
                📍 Usar minha localização
            </button>
        </div>
    `;

    galeria.prepend(card);

    document.querySelectorAll('input').forEach(i => i.value = "");
});