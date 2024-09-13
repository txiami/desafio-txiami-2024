![Recinto](Recinto.png)
# RECINTOS DO ZOO

## LOGICA UTILIZADA PARA RESOLUÇÃO DO DESAFIO

A lógica geral do código é dividir o problema em partes menores e gerenciáveis, utilizando a POO para organizar o código em classes e métodos com responsabilidades claras. A estrutura de dados é projetada para representar recintos e animais de maneira que facilite a validação e alocação conforme as regras do desafio.

Recintos são armazenados em um array de objetos, permitindo fácil acesso e manipulação.
Animais são armazenados em um objeto, facilitando a validação e busca de informações.
Métodos na classe RecintosZoo implementam a lógica de validação, cálculo e filtragem, mantendo o código modular e organizado.

### ONDE UTILIZEI UMA ESTRUTURA DE DADOS QUE CONSISTIA EM:



Recintos:

- São representados como objetos em um array de recintos (this.recintos).
- Cada recinto possui as seguintes propriedades:


numero: Identificador único do recinto.

bioma: Tipo de bioma do recinto (savana, floresta, rio, etc.).

tamanhoTotal: Tamanho total do recinto.

ocupacaoAtual: Número de espaços atualmente ocupados.

animais: Lista de animais presentes no recinto.

|------------|---------|----------------------|


Animais:

- São representados como um objeto (this.animais), onde cada chave é o nome da espécie e o valor é um objeto com informações sobre a espécie.
- Cada animal tem as seguintes propriedades:

tamanho: Espaço que o animal ocupa.

biomas: Lista de biomas onde o animal pode viver.

carnivoro: Booleano que indica se o animal é carnívoro.


### LOGICA DE ENCAPSULAMENTO

Decidi utilizar a estrutura de encapsulamento para alocar animais nos recintos.

Classe RecintosZoo:

- Construtor : Inicializa os dados dos recintos e animais. Este é o ponto de partida para definir a estrutura de dados do zoológico.

- Método validaAnimal(animal) : Verifica se o animal fornecido é válido, consultando o objeto this.animais.

- Método validaQuantidade(quantidade) : Verifica se a quantidade fornecida é válida (deve ser um número inteiro positivo).

- Método verificaBiomaAdequado(biomasRecinto, biomasAnimal) : Verifica se o bioma do recinto é adequado para o animal com base nos biomas que o animal pode habitar.

- Método calculaEspacoNecessario(recinto, infoAnimal, tamanhoNecessario) : Calcula o espaço necessário para alocar um número específico de animais, considerando o espaço adicional se houver múltiplas espécies no recinto.

- Método filtraRecintosViaveis(animal, quantidade) : Filtra os recintos que são viáveis para alocar o animal na quantidade fornecida, levando em consideração as regras do desafio.

- Método mapearRecintosViaveis(recintos, animal, quantidade) : Mapeia os recintos viáveis e formata a saída para mostrar o espaço livre e total disponível em cada recinto.

- Método analisaRecintos(animal, quantidade) : Coordena a validação do animal e da quantidade, filtra os recintos viáveis e formata a saída final. Este método é o ponto de entrada para a lógica principal de alocação.


## O DESAFIO
Olá! Você foi contratado para ajudar na organização de um zoológico.
Sua missão será construir a lógica para indicar os recintos onde novos animais se sintam confortáveis.

### RECINTOS EXISTENTES

 O zoológico possui os seguintes recintos disponíveis.

  | número    | bioma             | tamanho total |  animais existentes |
  |-----------|-------------------|---------------|---------------------|
  | 1         | savana            |   10          |   3 macacos         |
  | 2         | floresta          |    5          |   vazio             |
  | 3         | savana e rio      |    7          |  1 gazela           |
  | 4         | rio               |    8          |   vazio             |
  | 5         | savana            |    9          |  1 leão             |

### ANIMAIS

 O zoológico só está habilitado a tratar dos animais abaixo.
 A tabela mostra o espaço que cada indivíduo ocupa e em quais biomas se adapta.

  | espécie    | tamanho | bioma                |
  |------------|---------|----------------------|
  | LEAO       |   3     |  savana              |
  | LEOPARDO   |   2     |  savana              |
  | CROCODILO  |   3     |  rio                 |
  | MACACO     |   1     |  savana ou floresta  |
  | GAZELA     |   2     |  savana              |
  | HIPOPOTAMO |   4     |  savana ou rio       |

### REGRAS PARA ENCONTRAR UM RECINTO

1) Um animal se sente confortável se está num bioma adequado e com espaço suficiente para cada indivíduo
2) Animais carnívoros devem habitar somente com a própria espécie
3) Animais já presentes no recinto devem continuar confortáveis com a inclusão do(s) novo(s)
4) Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio
5) Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
6) Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado
7) Não é possível separar os lotes de animais nem trocar os animais que já existem de recinto (eles são muito apegados!).
Por exemplo, se chegar um lote de 12 macacos, não é possível colocar 6 em 2 recintos.

### ENTRADAS E SAÍDAS

1) O programa deve receber tipo e quantidade de animal (nessa ordem)
2) O programa deve retornar uma estrutura contendo a lista de todos os recintos viáveis ordenada pelo número do recinto (caso existam) e a mensagem de erro (caso exista)
3) A lista de recintos viáveis deve indicar o espaço livre que restaria após a inclusão do(s) animal(is) e o espaço total, no formato "Recinto nro (espaço livre: valorlivre total: valortotal)"
4) Caso animal informado seja inválido, apresentar erro "Animal inválido"
5) Caso quantidade informada seja inválida, apresentar erro "Quantidade inválida"
6) Caso não haja recinto possível, apresentar erro "Não há recinto viável"

### EXEMPLOS

Entrada para um caso válido
```js
"MACACO", 2
```
Saída
```js
{
  recintosViaveis: ["Recinto 1 (espaço livre: 5 total: 10)", 
   "Recinto 2 (espaço livre: 3 total: 5)", 
   "Recinto 3 (espaço livre: 2 total: 7)"]
}
```

Entrada para um caso inválido
```js
"UNICORNIO", 1
```
Saída
```js
{
  erro: "Animal inválido"
}
```

### O CÓDIGO
Você está recebendo uma estrutura básica para desenvolver a lógica do desafio. O arquivo principal está localizado dentro da pasta `src` e se chama `recintos-zoo.js`. Você pode desenvolver a sua lógica criando outros arquivos, métodos e até mesmo outras classes, porém o resultado deve poder ser obtido através do método `analisaRecintos`.

> **ALERTA**:
> É importante que essa estrutura básica não seja alterada, pois as etapas automáticas da nossa validação dependem disso. Conseguir executar os passos descritos mais adiante na seção `VALIDANDO A SOLUÇÃO` também ajudará você a verificar que seu código segue a estrutura definida.

Exemplo de chamada
```js
  new RecintosZoo().analisaRecintos('MACACO', 2);
```

### INSTALANDO E RODANDO NA SUA MÁQUINA
1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:
```bash
npm install
```

### VALIDANDO A SOLUÇÃO
Junto com a estrutura básica você está recebendo alguns cenários de testes no arquivo `recintos-zoo.test.js` para auxiliar na validação da sua solução. Recomendamos que você crie mais casos de teste para aumentar a confiabilidade da sua solução.
Para testar sua solução com os cenários existentes ou novos, rode o seguinte comando:
```bash
npm test
```

Para saber mais consulte a [Documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started).
