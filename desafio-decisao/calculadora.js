const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro número: ", function (resposta1) {
  const num1 = parseFloat(resposta1);

  rl.question("Digite o segundo número: ", function (resposta2) {
    const num2 = parseFloat(resposta2);

    rl.question("Digite o operador (+, -, *, /): ", function (operador) {
      let resultado;

      if (operador === "+") {
        resultado = num1 + num2;
      } else if (operador === "-") {
        resultado = num1 - num2;
      } else if (operador === "*") {
        resultado = num1 * num2;
      } else if (operador === "/") {
        if (num2 === 0) {
          console.log("Erro: divisão por 0 não é permitida.");
          rl.close();
          return;
        }
        resultado = num1 / num2;
      } else {
        console.log("Operador Inválido");
        rl.close();
        return;
      }

      console.log(`${num1} ${operador} ${num2} = ${resultado}`);
      rl.close();
    });
  });
});
