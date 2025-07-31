/* DIA 4 
Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

DICA
Pense muito bem em qual estrutura de repetição você irá utilizar para fazer o seu programa ser executado até o momento em que as 3 tentativas acabem, ou até a pessoa acertar o número. 
Lembre-se que você pode sempre personalizar o seu programa da forma que quiser.
Não se esqueça de compartilhá-lo no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda.

EXTRA
Dê uma olhada nesse site para aprender mais sobre estruturas de repetição.
Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado Math.random().

Para isso, utilize o código:

Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)

Onde, claro, você terá que alterar os valores de mínimo e  máximo pelos limites inferior e superior, respectivamente.*/ 

alert("BEM VINDO AO JOGO DE ADIVINHARO NÚMERO SECRETO! VOCÊ TEM 3 TENTATIVAS PARA ACERTAR O NÚMERO SECRETO");
let quantidade = parseInt(prompt("Digite o número total de números para o jogo de adivinhação"));

while (quantidade <= 1 || isNaN(quantidade)){
        alert("Por favor, digite um número maior que 1 para iniciar o jogo.");
        quantidade = parseInt(prompt("Digite o número total de números para o jogo de adivinhação"));
}

let numeroSecreto = parseInt(Math.random()* quantidade +1);
let tentativas = 1;
let totalTentativas = 3

document.getElementById("mensagemIntervalo").innerHTML=  `
    Tente adivinhar um número entre <strong>1</strong> e <strong>${quantidade}</strong>.
`
function chutar(){
    let palpite = parseInt(document.getElementById("palpite").value.trim()); 
    if (isNaN(palpite)){
        alert ("Digite um valor válido");
        return;
    }

    if (palpite > quantidade){
        alert(`O número digitado (${palpite}) é maior que o limite permitido (${quantidade}).`)
        return;
    } else if (palpite < 1){
        alert(`O número digitado (${palpite}) é menor que o limite permitido (1).`)
        return;
    } 

    if (palpite != numeroSecreto){
        registrarPalpites(palpite);
        tentativas ++; 
        totalTentativas -= 1;
        alert(`Você errou, tente novamente. Você tem ${totalTentativas} tentativas`);
        document.getElementById("palpite").value = "";
        if (palpite < numeroSecreto) {
            alert(`O número secreto é maior que ${palpite}`);
        } else {
            alert(`O número secreto é menor que ${palpite}`);
        }

        if (totalTentativas === 0){
            alert(`Suas tentativas acabaram, O número secreto é ${numeroSecreto}`)
            document.getElementById("chute").disabled = true;
        }       
    } else {
        registrarPalpites(palpite);
        let acertouDePrimeira = tentativas === 1 ? alert(`Parabens!!!! Você acertou de primeira. O número secreto é ${numeroSecreto}, você acertou com apenas ${tentativas} tentativas`) : alert(`Você acertou!!!! O número secreto é ${numeroSecreto}, você acertou com ${tentativas} tentativas`);
        document.getElementById("chute").disabled = true;
        document.getElementById("palpite").value = "";
    }
}

let listaPalpites = []

function registrarPalpites(palpite){ 
    listaPalpites.push(palpite);
    let alterarTextoPalpite = document.getElementById("mensagem");
    alterarTextoPalpite.innerHTML = `Palpites ${listaPalpites.join(", ")}`;
}
