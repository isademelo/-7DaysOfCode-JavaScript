function calcular(){

    let operacao = document.getElementById("operacao").value;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado

    if (operacao === "sair") {
        let confirmar = confirm("Você tem certeza que quer sair da calculadora?")
            if (confirmar){
                alert("👋 Até a próxima!");
                document.querySelector("button").disabled = true
            }
        return;
    }

    if(isNaN(num1) && isNaN(num2)){
        alert("O dois números são iválidos, digite novamente");
        document.getElementById("num1").value = ""
        document.getElementById("num2").value = ""
        return;
    } else if (isNaN(num1)){
        alert("O primeiro número é iválido, digite novamente");
        document.getElementById("num1").value = ""
        return; 
    } else if (isNaN(num2)){
        alert("O segundo número é iválido, digite novamente");
        document.getElementById("num2").value = ""
        return;
    }

    if (operacao === "soma"){
        resultado = (num1 + num2).toFixed(2)
        alert(`resultado de ${num1} + ${num2} = ${resultado}`);
    } else if(operacao === "subtracao"){
        resultado = (num1 - num2).toFixed(2)
        alert(`resultado de ${num1} - ${num2} = ${resultado}`);
    } else if (operacao === "multiplicacao"){
        resultado = (num1 * num2).toFixed(2) 
        alert(`resultado de ${num1} * ${num2} = ${resultado}`)
    } else if (operacao === "divisao"){
        resultado = (num1 / num2).toFixed(2);
        alert(`resultado de ${num1} / ${num2} = ${resultado}`)
    }
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
}