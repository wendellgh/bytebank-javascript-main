addEventListener('message', event => {
    conectaApi();
    setInterval(() => conectaApi(), 5000);
})

async function conectaApi() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/JPY-BRL");
    const conectaConvertida = await conecta.json();

    postMessage(conectaConvertida.JPYBRL);
}