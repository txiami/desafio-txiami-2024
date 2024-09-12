class RecintosZoo {

    constructor() {
        this.recintos = [{
            numero: 1, bioma: 'savana', tamanhoTotal: 10, ocupacaoAtual: 3, animais: ['MACACO'],
        }, {
            numero: 2, bioma: 'floresta', tamanhoTotal: 5, ocupacaoAtual: 0, animais: [],
        }, {
            numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, ocupacaoAtual: 2, animais: ['GAZELA'],
        }, {
            numero: 4, bioma: 'rio', tamanhoTotal: 8, ocupacaoAtual: 0, animais: [],
        }, {
            numero: 5, bioma: 'savana', tamanhoTotal: 9, ocupacaoAtual: 3, animais: ['LEAO'],
        },];

        this.animais = {
            LEAO: {
                tamanho: 3, biomas: ['savana'], carnivoro: true
            }, LEOPARDO: {
                tamanho: 2, biomas: ['savana'], carnivoro: true
            }, CROCODILO: {
                tamanho: 3, biomas: ['rio'], carnivoro: true
            }, MACACO: {
                tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false
            }, GAZELA: {
                tamanho: 2, biomas: ['savana'], carnivoro: false
            }, HIPOPOTAMO: {
                tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false
            },
        };
    }


    analisaRecintos(animal, quantidade) {


        if (!this.animais[animal]) {
            return {erro: 'Animal inválido'};
        }

        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
            return {erro: 'Quantidade inválida'};
        }

        const infoAnimal = this.animais[animal];
        const tamanhoNecessario = infoAnimal.tamanho * quantidade;

        const recintosViaveis = this.recintos.filter(recinto => {

            const biomasRecinto = recinto.bioma.split(' e ');
            const biomaAdequado = biomasRecinto.some(bioma => infoAnimal.biomas.includes(bioma));
            if (!biomaAdequado) return false;

            let espacoDisponivel = recinto.tamanhoTotal - recinto.ocupacaoAtual;

            if (infoAnimal.carnivoro && recinto.animais.length > 0 && !recinto.animais.includes(animal)) {
                return false;
            }
            let espacoOcupado = tamanhoNecessario;

            if (recinto.animais.length > 0 && !recinto.animais.includes(animal)) {
                espacoOcupado += 1;
            }

            return espacoDisponivel >= espacoOcupado;
        });

        if (recintosViaveis.length === 0) {
            return {erro: 'Não há recinto viável'};
        }

        const recintosOrdenados = recintosViaveis.sort((a, b) => a.numero - b.numero);
        const recintosMapeados = recintosOrdenados.map(recinto => {

            let espacoOcupado = tamanhoNecessario;
            if (recinto.animais.length > 0 && !recinto.animais.includes(animal)) espacoOcupado += 1;
            const espacoLivre = recinto.tamanhoTotal - (recinto.ocupacaoAtual + espacoOcupado);
            return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`;
        });

        return {recintosViaveis: recintosMapeados.slice(0, 3)};
    }


}

export {RecintosZoo as RecintosZoo};
