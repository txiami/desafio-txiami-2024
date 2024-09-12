class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanhoTotal: 10, ocupacaoAtual: 3, animais: ['MACACO'] },
            { numero: 2, bioma: 'floresta', tamanhoTotal: 5, ocupacaoAtual: 0, animais: [] },
            { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, ocupacaoAtual: 2, animais: ['GAZELA'] },
            { numero: 4, bioma: 'rio', tamanhoTotal: 8, ocupacaoAtual: 0, animais: [] },
            { numero: 5, bioma: 'savana', tamanhoTotal: 9, ocupacaoAtual: 3, animais: ['LEAO'] }
        ];

        this.animais = {
            LEAO: { tamanho: 3, biomas: ['savana'], carnivoro: true },
            LEOPARDO: { tamanho: 2, biomas: ['savana'], carnivoro: true },
            CROCODILO: { tamanho: 3, biomas: ['rio'], carnivoro: true },
            MACACO: { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
            GAZELA: { tamanho: 2, biomas: ['savana'], carnivoro: false },
            HIPOPOTAMO: { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
        };
    }

    validaAnimal(animal) {
        if (!this.animais[animal]) {
            return { erro: 'Animal inválido' };
        }
        return null;
    }

    validaQuantidade(quantidade) {
        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
            return { erro: 'Quantidade inválida' };
        }
        return null;
    }

    verificaBiomaAdequado(biomasRecinto, biomasAnimal) {
        return biomasRecinto.some(bioma => biomasAnimal.includes(bioma));
    }

    calculaEspacoNecessario(recinto, infoAnimal, tamanhoNecessario) {
        let espacoOcupado = tamanhoNecessario;

        // Se houver animais diferentes no recinto, adiciona 1 ao espaço ocupado
        if (recinto.animais.length > 0 && !recinto.animais.includes(infoAnimal)) {
            espacoOcupado += 1;
        }

        return espacoOcupado;
    }

    filtraRecintosViaveis(animal, quantidade) {
        const infoAnimal = this.animais[animal];
        const tamanhoNecessario = infoAnimal.tamanho * quantidade;

        return this.recintos.filter(recinto => {
            const biomasRecinto = recinto.bioma.split(' e ');
            const biomaAdequado = this.verificaBiomaAdequado(biomasRecinto, infoAnimal.biomas);

            if (!biomaAdequado) return false;

            const espacoDisponivel = recinto.tamanhoTotal - recinto.ocupacaoAtual;

            // Verificar se o recinto é adequado para o tipo de animal
            if (infoAnimal.carnivoro) {
                if (recinto.animais.length > 0 && !recinto.animais.includes(animal)) {
                    return false; // Impedir carnívoros diferentes ou alocar com herbívoros
                }
            } else {
                if (recinto.animais.some(a => this.animais[a].carnivoro)) {
                    return false; // Não permitir herbívoros com carnívoros
                }
            }

            return espacoDisponivel >= tamanhoNecessario;
        });
    }

    mapearRecintosViaveis(recintos, animal, quantidade) {
        const infoAnimal = this.animais[animal];
        const tamanhoNecessario = infoAnimal.tamanho * quantidade;

        return recintos.sort((a, b) => a.numero - b.numero).map(recinto => {
            const espacoOcupado = this.calculaEspacoNecessario(recinto, animal, tamanhoNecessario);
            const espacoLivre = recinto.tamanhoTotal - (recinto.ocupacaoAtual + espacoOcupado);
            return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`;
        }).slice(0, 3);
    }

    analisaRecintos(animal, quantidade) {
        const erroAnimal = this.validaAnimal(animal);
        if (erroAnimal) return erroAnimal;

        const erroQuantidade = this.validaQuantidade(quantidade);
        if (erroQuantidade) return erroQuantidade;

        const recintosViaveis = this.filtraRecintosViaveis(animal, quantidade);
        if (recintosViaveis.length === 0) {
            return { erro: 'Não há recinto viável' };
        }

        const recintosMapeados = this.mapearRecintosViaveis(recintosViaveis, animal, quantidade);
        return { recintosViaveis: recintosMapeados };
    }
}

export { RecintosZoo as RecintosZoo };
