// const nome =  prompt("Qual é o seu nome?");
// const idade = prompt("Quantos anos você tem?");
// const linguagemDeProgramacao = prompt("Qual linguagem de programação você está estudando?");

let nomeForm = document.getElementById('nome-form');
let idadeForm = document.getElementById('idade-form');
let linguagemProgramacaoForm = document.getElementById('linguagem-programacao-form');
// let botaoTeste = ;

document.getElementById('teste-botao').addEventListener("click", () => {
    if(nomeForm.value.length && idadeForm.value.length && linguagemProgramacaoForm.value.length == 0){
        console.log(`Olá ${nomeForm.value}, você tem ${idadeForm.value} anos e já está aprendendo ${linguagemProgramacaoForm.value}!`)
    
        alert(`Olá ${nomeForm.value}, você tem ${idadeForm.value} anos e já está aprendendo ${linguagemProgramacaoForm.value}!`);
    }
})

// function validaForms(){
    
// }









//const resposta = prompt(`Você gosta de estudar ${linguagemDeProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`);

// if(resposta === '1'){
//     alert("Muito bom! Continue estudando e você terá muito sucesso.");
// }else{
//     alert("Ahh que pena... Já tentou aprender outras linguagens?");
// }

