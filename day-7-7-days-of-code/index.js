let primeiroNumero;
let segundoNumero;
let operacao;
let resultado;

operacao = prompt ("Digite a operação a ser realizada");
primeiroNumero = prompt("Digite o primeiro número");
segundoNumero = prompt("Digite o segundo número");

let adicao = (primeiroNumero, segundoNumero) => {
    return (parseInt(primeiroNumero) + parseInt(segundoNumero));
}

let subtracao = (primeiroNumero, segundoNumero) => {
    return (parseInt(primeiroNumero) - parseInt(segundoNumero));
}

let multiplicacao = (primeiroNumero, segundoNumero) => {
    return (parseInt(primeiroNumero) * parseInt(segundoNumero));
}

let divisao = (primeiroNumero, segundoNumero) => {
    return (parseInt(primeiroNumero) / parseInt(segundoNumero));
}

switch(operacao){
    case 'adicao':
        resultado = adicao(primeiroNumero, segundoNumero);
        alert(`O resultado da ${operacao} é ${resultado}`)
        break;
    case 'subtracao':
        resultado = subtracao(primeiroNumero, segundoNumero);
        alert(`O resultado da ${operacao} é ${resultado}`)
        break;
    case 'multiplicacao':
        resultado = multiplicacao(primeiroNumero, segundoNumero);
        alert(`O resultado da ${operacao} é ${resultado}`)
        break;
    case 'divisao':
        resultado = divisao(primeiroNumero, segundoNumero);
        alert(`O resultado da ${operacao} é ${resultado}`)
        break;
    case 'sair':
        alert(`Até a próxima!`);
        break;
}

