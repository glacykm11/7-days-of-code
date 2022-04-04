let comida;
let categoria;
let resposta;
let itemParaRemover;
let listaTotal = [];
let indiceItemParaRemover;
let arrayFrutas = [];
let arrayLaticinios = [];
let arrayCongelados = [];
let arrayDoces = [];
let arrayConcatenado = [];

resposta = prompt("Deseja adicionar ou remover uma comida na sua lista de compras? 1 - SIM, 2 - NÃO, 3 - REMOVER");

while (resposta == 'sim'){
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa? Frutas, laticínios, congelados ou doces?");
    
    switch(categoria){
     case 'frutas': 
         arrayFrutas.push(comida);
         break;
     case 'laticínios':
         arrayLaticinios.push(comida);
         break;
     case 'congelados':
         arrayCongelados.push(comida);
         break;
     case 'doces':
         arrayDoces.push(comida);
         break;
    }

    listaTotal = arrayConcatenado.concat(arrayFrutas, arrayLaticinios, arrayCongelados, arrayDoces);
    console.log(listaTotal);

    resposta = prompt("Deseja adicionar ou remover uma comida na sua lista de compras? 1 - SIM, 2 - NÃO, 3 - REMOVER");
}

while(resposta == 'remover'){
    alert(`Esses são os itens da lista de supermercado: Frutas: ${arrayFrutas}, Laticínios: ${arrayLaticinios}, Congelados: ${arrayCongelados}, Doces: ${arrayDoces}`);
    
    itemParaRemover = prompt("Digite qual item deseja remover da lista");

    if (listaTotal.includes(itemParaRemover)){
        indiceItemParaRemover = listaTotal.indexOf(itemParaRemover);
        listaTotal.splice(indiceItemParaRemover, 1);

        alert(`${itemParaRemover} removido com sucesso! Esses são os atuais itens da lista de supermercado: ${listaTotal}`);
    }else{
        alert(`${itemParaRemover} não foi encontrado na lista de compras!`);
    }

    resposta = prompt("Deseja adicionar ou remover uma comida na sua lista de compras? 1 - SIM, 2 - NÃO, 3 - REMOVER");
}

alert(`Lista de supermercado atual: ${listaTotal}`);


