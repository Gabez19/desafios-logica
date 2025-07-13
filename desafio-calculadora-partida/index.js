function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // estrutura de decisão
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Mensagem de retorno
    return `O Herói tem um saldo de vitórias de ${saldoVitorias} e está no nível ${nivel}.`;
}

// valores
let resultado = calcularRank(75, 10);
console.log(resultado);

// O Herói tem um saldo de vitórias de 65 e está no nível Ouro.