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
