# 💻 Desafio #7DaysOfCode - Dia 1: Comparando Tipos em JavaScript

Este repositório mostra uma situação muito comum para quem está começando a aprender **JavaScript**: os problemas com **tipos de variáveis** ao comparar valores.

---

## 🧠 Entendendo o Problema

Em linguagens compiladas como **Java** e **C#**, erros de tipo são detectados na **compilação**, com avisos claros durante o desenvolvimento.

Já no **JavaScript**, que não é compilado, esse tipo de erro passa despercebido e só aparece **em tempo de execução**. Isso pode causar confusão, principalmente na comparação entre **strings** e **números**.

---

## ⚠️ Exemplo de Comparações Confusas

Observe os exemplos abaixo. Todos eles retornam `true`, mesmo que o comportamento esperado fosse o contrário:

```js
console.log(false == '0');
console.log(null == undefined);
console.log(" \t\r\n" == 0);
console.log(' ' == 0);
``` 

O que não faz necessariamente muito sentido.

(Você pode testar tudo isso indo no seu navegador, clicando com o botão direito, escolhendo a opção “Inspecionar” e a aba “Console”. Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam true).

Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

``` js 
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```

---

## 📚 Leitura Recomendada

Link do artigo da Alura para ler mais sobre [operadores de comparação](https://www.alura.com.br/artigos/operadores-matematicos-em-javascript?gclid=Cj0KCQiA_8OPBhDtARIsAKQu0gYUqZqgonpXyEP1_hpUl58wYAk_P3Ze4VWrxo9ftkFW9CLYOMyjO1caAlrzEALw_wcB&utm_medium=email&_hsenc=p2ANqtz-_OmVPE331gaA08nNykoge9wNqjzubTq8ZatTYPj36c4AqF-5eU5PP7srRYOs407aiHdGNZJmRo-PgiHDyFlkTUwu_Tzg&_hsmi=231357727&utm_content=231357727&utm_source=hs_automation).

# 💻 Desafio #7DaysOfCode - Dia 2: Capturando e Exibindo Informações do Usuário

## 🧠 Sobre o Desafio

Sabe quando você se cadastra em um site e, logo em seguida, ele já te chama pelo seu nome? É isso que vamos simular aqui.

Ao desenvolver sistemas e sites, é comum adicionar toques personalizados para tornar a experiência do usuário mais rica e dinâmica. E tudo começa com algo básico, mas fundamental: **variáveis**.

---

## 📋 O Que o Programa Faz

O programa solicita ao usuário:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação está estudando?

Em seguida, exibe a seguinte mensagem personalizada:

```
Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!
```

> As palavras entre colchetes são substituídas pelas respostas do usuário.

---

## 🎯 Desafio Opcional

Após exibir a mensagem anterior, o programa pergunta:

> Você gosta de estudar [linguagem]?  
> Responda com **SIM** ou **NÃO**.

Com base na resposta, ele mostra:

- ✅ **Se a resposta for SIM:**

```
Muito bom! Continue estudando e você terá muito sucesso.
```

- ❌ **Se a resposta for NÃO:**

```
Ahh que pena... Já tentou aprender outras linguagens?
```

- ❓ **Qualquer outra resposta:**

```
Resposta não reconhecida. Mas tudo bem! O importante é seguir curioso e aberto a aprender.
```

---

## 👨‍💻 Como Testar

Você pode testar o programa de duas formas:

1. **Pelo navegador:**
   - Abra o arquivo `dia2.html` no seu navegador.
   - As perguntas aparecerão em janelas de prompt.

2. **Pelo console do navegador:**
   - Abra o console com `F12` ou clique com o botão direito → **Inspecionar** → Aba **Console**.
   - Copie e cole o código JavaScript diretamente no console.

---

## 💻 Desafio #7DaysOfCode - Dia 3: Criando um Jogo de Escolhas com JavaScript

### 🧠 Sobre o Desafio

Você já jogou algum jogo em que as escolhas que você faz mudam completamente o destino do personagem? Neste desafio, você vai criar algo parecido em JavaScript!

Aqui, você vai usar estruturas de controle de fluxo — como `if`, `else`, `for` e `while` — para construir uma história que muda conforme as respostas de quem está jogando.

- O `if` e `else` permitem que seu programa tome decisões diferentes conforme as respostas.
- Os loops (`for` e `while`) ajudam a repetir tarefas, como perguntar várias vezes sobre tecnologias que o usuário quer aprender.

### 🎯 O Que Você Deve Fazer

1. Perguntar ao usuário se ele quer seguir para a área de **Front-End** ou **Back-End**.

2. Se escolher Front-End, ele deve escolher entre aprender **React** ou **Vue**; se escolher Back-End, pode optar por aprender **C#** ou **Java**.

3. Depois, independente das escolhas anteriores, o usuário decide se quer continuar se especializando na área escolhida ou se desenvolver para se tornar **Fullstack**. Para cada escolha, você deve mostrar uma mensagem personalizada.

4. Por fim, pergunte quais tecnologias o usuário gostaria de conhecer ou se especializar. Ele pode responder quantas tecnologias quiser, uma de cada vez. Enquanto ele responder que quer continuar, seu programa deve continuar perguntando e mostrar uma mensagem para cada tecnologia inserida.

### 💡 Dicas

- Use `prompt`, `alert` e `console.log` para interagir com o usuário.
- Use `if` / `else if` / `else` para ramificar as respostas.
- Use `while` para repetir perguntas até o usuário decidir parar.
- Personalize o jogo do jeito que quiser para deixá-lo mais interessante!

### 🧩 Recapitulando as Estruturas Condicionais

```js
if (cidade === "Roma") {
    // Mostra a foto do Coliseu
} else if (cidade === "Paris") {
    // Mostra a foto da Torre Eiffel
} else {
    // Resposta para cidade inválida
}
```

# 💻 Desafio #7DaysOfCode - Dia 4: Jogo de Adivinhação com JavaScript

## 🧠 Sobre o Desafio

Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Neste desafio, vamos resgatar essa brincadeira — mas agora o oponente será o próprio **computador**!

## 🎯 O Que Você Deve Fazer

1. Defina um número fixo entre 0 e 10 (por exemplo, `7`).
2. Peça ao usuário para tentar adivinhar qual é esse número.
3. Se ele acertar, mostre uma mensagem de **parabéns**.
4. Se errar, dê mais **duas tentativas**.
5. Se após as três tentativas ele não acertar, informe qual era o número correto.

> 💡 Depois que isso estiver funcionando, tente tornar o número **aleatório**, usando o método `Math.random()`.

---

# 💻 Desafio #7DaysOfCode - Dia 5: Lista de Compras com Categorias

## 🧠 Sobre o Desafio

Sabe quando você vai no supermercado com uma lista de compras e acaba indo e voltando pelos mesmos corredores até completar tudo?

Você precisa de uma maçã e vai até as frutas. Depois anota leite e corre para os laticínios. Mas em seguida lembra da pêra e precisa voltar de novo... 😩

Este desafio tem como objetivo resolver esse problema usando **JavaScript**, organizando uma lista de compras em **categorias** com a ajuda de **arrays** e **objetos**.

---

## 📋 O Que o Programa Faz

1. Pergunta ao usuário se deseja adicionar uma comida à lista de compras (resposta: **sim** ou **não**).
2. Se a resposta for **sim**, pergunta:
   - Qual comida deseja inserir?
   - Em qual **categoria** a comida se encaixa (ex: frutas, laticínios, congelados, doces, etc.)?
3. Repete o processo até que o usuário responda **não** na primeira pergunta.
4. Ao final, exibe no console uma **lista de compras agrupada por categorias**.

---

## ✅ Exemplo de Saída

Se você adicionar os seguintes itens:

```
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca
```

A saída será algo como:

```
Lista de compras:
  Frutas: banana, tomate, maçã, uva, abacate
  Laticínios: leite vegetal, leite de vaca, leite em pó
  Congelados:
  Doces: chiclete, bala de ursinho
```

---

## 💡 Dicas Importantes

- Use `prompt()` para interagir com o usuário e `console.log()` para exibir o resultado final.
- Crie um objeto com categorias como **propriedades** e arrays como **valores**.
- Utilize `.push()` para adicionar elementos em arrays.
- Lembre-se de **tratar categorias inexistentes** caso o usuário digite uma nova.

```js
let listaCompras = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  outros: []
};
```

---

## 🧪 Como Testar

1. Abra o navegador e pressione `F12` para abrir o console.
2. Copie e cole o seu código JavaScript.
3. Responda às perguntas que aparecerem.
4. Veja a lista de compras organizada no console ao final.

---

## ✨ Extras Sugeridos

- Permitir que o usuário exclua um item.
- Exibir a quantidade de itens por categoria.
- Criar um modo visual com **HTML/CSS** (opcional).

---

Pronto! Agora você nunca mais precisará andar em círculos no supermercado — nem no seu código. 🛒

