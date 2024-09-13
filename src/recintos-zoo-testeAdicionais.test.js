import { RecintosZoo } from "./recintos-zoo.js";

describe('Testes Adicionais', ()=>{
    test('Deve rejeitar quantidade não inteira', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 1.5);
        expect(resultado.erro).toBe("Quantidade inválida");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recintos para 2 leões', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 0 total: 9)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve rejeitar recinto com animais diferentes para carnívoros', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 1);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });



    test('Deve rejeitar recinto se todos os recintos estão ocupados', () => {
        const recintosModificados = new RecintosZoo();
        recintosModificados.recintos.forEach(recinto => recinto.ocupacaoAtual = recinto.tamanhoTotal);
        const resultado = recintosModificados.analisaRecintos('GAZELA', 1);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve permitir alocar 2 crocodilos em recinto de bioma adequado', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 2 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve rejeitar alocação de mais animais do que o espaço disponível', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 5);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve alocar corretamente animais herbívoros em recintos com outros herbívoros', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
    });

    test('Deve não permitir alocar carnívoros em recintos com herbívoros', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 1);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recintos para 1 hipopótamo', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 4 (espaço livre: 5 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recintos para 3 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 3);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 0 total: 5)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });


})