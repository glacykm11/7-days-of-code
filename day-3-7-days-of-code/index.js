const areaDesejada =  prompt("Qual área você quer seguir? Front-End ou Back-End?");
let frameworkDesejado;
let linguagemDesejada;

if(areaDesejada === 'Front-End'){
    frameworkDesejado =  prompt("Qual framework quer aprender? React ou Vue?");
}else if(areaDesejada === 'Back-End'){
    linguagemDesejada =  prompt("Qual linguagem quer aprender? C# ou Java?");
}

const resposta =  prompt("Prefere se especializar ou se tornar fullstack?");

if(resposta == 'especializar'){
    alert(`Parabéns, você quer se tornar um especialista em ${frameworkDesejado || linguagemDeProgramacao}!`);
}else{
    alert(`Parabéns, você quer se tornar um fullstack começando por ${frameworkDesejado || linguagemDesejada}!`);
}

let linguagens;
let maisLinguagensParaAprender;
let arrayDeLinguagens = [];

do{
    linguagens = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?");
    maisLinguagensParaAprender = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
    
    arrayDeLinguagens.push(linguagens);
        
}while(maisLinguagensParaAprender == 'ok');

alert(`Essas são as suas tecnologias desejadas ${arrayDeLinguagens}.`);