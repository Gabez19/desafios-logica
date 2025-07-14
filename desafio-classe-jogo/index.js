class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // vai imprimir uma frase diferente dependendo do tipo de herói.
    atacar() {
        // objeto que associa cada tipo a UM ataque correspondente
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            ninja: "shuriken",
            monge: "artes marciais"
        };

        // pega o tipo atual do herói e usa como chave para buscar o ataque
        const ataque = ataques[this.tipo];

        // se o tipo existir, exibi a frase
        if (ataque) {
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        } else {
            console.log("Tipo de herói desconhecido");
        }
    }
}

// isso é a instância de classe
const h1 = new Heroi("Inky", 452, "mago");
h1.atacar(); // O mago atacou usando magia