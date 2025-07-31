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