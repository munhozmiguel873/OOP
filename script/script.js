class Foto {
    constructor(url, legenda, lat, lon) {
        this.url = url;
        this.legenda = legenda;
        this.localizacao = { lat, lon };
        this.dataCriacao = new Date();
    }
}

const btn = document.querySelector("#btn-adicionar");
const galeria = document.querySelector("#galeria");
console.log(btn);


btn.addEventListener('click', () => {
    const url = document.querySelector('#ipt-url').value;
    const legenda = document.querySelector('#ipt-title').value;
    const lat = parseFloat(document.querySelector('#ipt-lat').value) || 0;
    const lon = parseFloat(document.querySelector('#ipt-lon').value) || 0;

    if (!url || !legenda) return alert("Por favor, insira a URL e a legenda da foto.");

    const novaFoto = new Foto(url, legenda, lat, lon);

    const card = document.createElement('div');
    card.className = 'card-foto';
    card.innerHTML = `
        <img src="${novaFoto.url}" alt="${novaFoto.legenda}">
        <div class="card.info">
            <h3>${novaFoto.legenda}</h3>
            <p>${novaFoto.resumo}</p>
            <div>
                🎈${novaFoto.localizacao}
            </div>
         </div> 
 `;
    galeria.prepend(card);
    // Limpar forms
    document.querySelectorAll('input').forEach(i => i.value = "");
});