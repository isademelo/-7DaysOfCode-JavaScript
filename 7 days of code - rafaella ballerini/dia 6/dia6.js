let categoriasValidas = ["CONGELADOS", "CONGELADO", "LATICINIOS", "LATICÍNIOS", "FRUTAS", "FRUTA", "DOCES", "DOCE"];
let frutas = [];
let laticinios = []; 
let congelados = [];
let doces = [];

    function validarCategoria (comida, categoria){
        if(categoria ==="CONGELADOS" || categoria === "CONGELADO"){
            congelados.push(comida)
        } else if (categoria ==="LATICINIOS" || categoria ==="LATICÍNIOS"){
            laticinios.push(comida)
        } else if (categoria ==="FRUTAS" || categoria ==="FRUTA"){
            frutas.push(comida)
        } else if (categoria ==="DOCES" || categoria ==="DOCE"){
            doces.push(comida)
        } else {
            alert("Categoria Inválida");
        }
    }

    function digitouComidaErrado(comida){
        while (comida === ""){
            alert("Nome inválido, digite o nome do alimento corretamente");
            comida = prompt ("digite o nome do alimento que você quer adicionar no carrinho").trim().toUpperCase();
        } 
        return comida;
    }

    function corrigirCategoria(categoria){
        while (categoria === ""){
            alert("Nome inválido, digite o nome da categoria do alimento corretamente");
            categoria = prompt ("digite o nome da categoria do alimento que você quer adicionar no carrinho").trim().toUpperCase();
        } 
        return categoria;
    }

    function printarLista(){
        console.log(`frutas: ${frutas.join(", ")}`);
        console.log(`laticínios: ${laticinios.join(", ")}`);
        console.log(`doces: ${doces.join(", ")}`);
        console.log(`congelados: ${congelados.join(", ")}`);
    }
let comida = prompt ("digite o nome do alimento que você quer adicionar no carrinho").trim().toUpperCase();
comida = digitouComidaErrado(comida)

let categoria = prompt ("digite à qual categoria de alimento essa comida pertence").trim().toUpperCase();
categoria = corrigirCategoria (categoria)
validarCategoria (comida, categoria)

let confirmar = confirm("Você quer adicionar mais alguma coisa?")

while (confirmar){
    comida = prompt ("digite o nome do alimento que você quer adicionar no carrinho").trim().toUpperCase();
    comida = digitouComidaErrado(comida);

    categoria = prompt ("digite o nome categoria do alimento que você quer adicionar no carrinho").trim().toUpperCase();
    categoria = corrigirCategoria(categoria);
    validarCategoria (comida, categoria);
    
    confirmar = confirm("Você quer adicionar mais alguma coisa?");
}
    printarLista()

let retirarItem = confirm("Você quer retirar algum item?");
let itemRetirado= prompt("qual item voce quer tirar").trim().toUpperCase();
        
    while (itemRetirado=== ""){
        alert("Nome inválido, digite o nome do alimento corretamente");
        itemRetirado = prompt ("digite o nome do alimento que você quer adicionar no carrinho").trim().toUpperCase();
    } 

let indiceItem;

    if (frutas.includes(itemRetirado)){
        indiceItem = frutas.indexOf(itemRetirado);
        frutas.splice(indiceItem, 1);
        printarLista();
    } else if (congelados.includes(itemRetirado)){
        indiceItem = congelados.indexOf(itemRetirado);
        congelados.splice(indiceItem, 1);
        printarLista();
    } else if (doces.includes(itemRetirado)){
        indiceItem = doces.indexOf(itemRetirado);
        doces.splice(indiceItem, 1);
        printarLista();
    } else if (laticinios.includes(itemRetirado)){
        indiceItem = laticinios.indexOf(itemRetirado);
        laticinios.splice(indiceItem, 1);
        printarLista();
    } else {
        alert("Não foi possível encontrar o item dentro da lista!");
    }