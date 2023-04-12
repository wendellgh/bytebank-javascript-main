const lista = document.querySelectorAll('[data-lista]');

function selecionaCotacao(nome, valor) {
    lista.forEach((listaEscolhida) => {
        if (listaEscolhida.id == nome) {
            imprimeCotacao(listaEscolhida, nome, valor)
        }
    })
}

function imprimeCotacao(lista, nome, valor) {
    lista.innerHTML = "";

    const plurais = {
        "dolar": "dolares",
        "iene": "ienes"
    }

    for (let multiplacador = 1; multiplacador <= 1000; multiplacador *= 10) {
        const listaItem = document.createElement('li');
        listaItem.innerHTML = `${multiplacador} ${multiplacador == 1 ? nome : plurais[nome]}: R$ ${(valor * multiplacador).toFixed(2)}`
        lista.appendChild(listaItem);
    }
}

export default selecionaCotacao;