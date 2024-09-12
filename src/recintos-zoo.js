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


}

export {RecintosZoo as RecintosZoo};
