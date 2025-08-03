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
        } 
    }

let comida = prompt ("digite o nome da fruta que você quer adicionar no carrinho").trim().toUpperCase();

while (comida.trim()=== ""){
    alert("Nome inválido, digite o nome da comida corretamente");
    comida = prompt ("digite o nome da comida que você quer adicionar no carrinho").trim().toUpperCase();
} 

let categoria = prompt ("digite à qual categoria de alimento essa comida pertence").trim().toUpperCase();

while (categoria === "" || !categoriasValidas.includes(categoria)){
    alert("Nome inválido, digite o nome da categoria corretamente");
    categoria = prompt ("digite o nome categoria da comida que você quer adicionar no carrinho").trim().toUpperCase();
} 

validarCategoria (comida, categoria)

let confirmar = confirm("Você quer adicionar mais alguma coisa?")

while (confirmar){

    comida = prompt ("digite o nome do alimento que você quer adicionar no carrinho").trim().toUpperCase();

    while (comida === ""){
        alert("Nome inválido, digite o nome da comida corretamente");
        comida = prompt ("digite o nome da comida que você quer adicionar no carrinho").trim().toUpperCase();
    } 

    categoria = prompt ("digite o nome categoria da comida que você quer adicionar no carrinho").trim().toUpperCase();

    while (categoria === "" || !categoriasValidas.includes(categoria)){
        alert("Nome inválido, digite o nome da categoria corretamente");
        categoria= prompt ("digite o nome categoria da comida que você quer adicionar no carrinho").trim().toUpperCase();
    }

    validarCategoria (comida, categoria);
    
    confirmar = confirm("Você quer adicionar mais alguma coisa?")
}
    console.log(`frutas: ${frutas.join(", ")}`);
    console.log(`laticínios: ${laticinios.join(", ")}`);
    console.log(`doces: ${doces.join(", ")}`);
    console.log(`congelados: ${congelados.join(", ")}`);

   

