// menu de opções
// mostrar um menu com 4 opções numéricas, o user escolhe uma (de 1 a 4), o programa responde, se for inválido, avisa.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("--- Menu ---");
console.log("1 - Ver Saldo");
console.log("2 - Depositar");
console.log("3 - Sacar");
console.log("4 - Sair");

rl.question("Escolha uma opção (1 a 4): ", function (resposta) {
    const opcao = parseInt(resposta);

    switch (opcao) {
        case 1:
            console.log("Seu saldo é R$ 1000.");
            break;
        case 2:
            console.log("Depósito realizado com sucesso.");
            break;
        case 3:
            console.log("Saque efetuado.");
            break;
        case 4:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção Inválida. Tente de novo.");
    }
    
    rl.close();
});
