const nome =  prompt("Qual é o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagemDeProgramacao = prompt("Qual linguagem de programação você está estudando?");


alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemDeProgramacao}!`);

const resposta = prompt(`Você gosta de estudar ${linguagemDeProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if(resposta === '1'){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}

