function CalculaViagem() {
    let LocalViagem = document.getElementById('iViagem').value;
    let KM = parseFloat(document.getElementById('iKMPercorridos').value);   
    let LitrosCombustivel = parseFloat(document.getElementById('iLitrosCombustivel').value);
    let ValorLitro = parseFloat(document.getElementById('iValorLitro').value);
    let resultado = '';
    var autonomia = KM/LitrosCombustivel;
    var ValorViagem = LitrosCombustivel * ValorLitro;
    var Kilimetro = ValorLitro/autonomia;

    resultado += 'A sua viagem a ' + LocalViagem + ' resultou a uma autonomia de ' + autonomia + 'KM/L e um valor de viagem no total de R$' + ValorViagem.toFixed(2) + ' , sendo R$' + Kilimetro + ' cada KM';
    document.getElementById('dresultado').innerHTML = resultado;
}