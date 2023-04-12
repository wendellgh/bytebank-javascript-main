

async function conectaApi() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const conectaConvertida = await conecta.json();

    postMessage(conectaConvertida.USDBRL);
}

addEventListener("message", () => {
    conectaApi();
    setInterval(() => conectaApi(), 5000);
})