let comida;
let categoria;
let resposta;
let arrayFrutas = [];
let arrayLaticinios = [];
let arrayCongelados = [];
let arrayDoces = [];

resposta = prompt("Deseja adicionar uma comida na sua lista de compras?");

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

    resposta = prompt("Deseja adicionar uma comida na sua lista de compras?");
}

alert(`Lista de supermercado: 
    Frutas: ${arrayFrutas},
    Laticínios: ${arrayLaticinios},
    Congelados: ${arrayCongelados},
    Doces: ${arrayDoces}
`);


