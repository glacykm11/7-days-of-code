function gerarNumeroAleatrio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numeroAleatorio = gerarNumeroAleatrio(0, 10);
let count = 3;

let chute = prompt("Qual valor você deseja chutar?");

if(chute == numeroAleatorio){
    alert(`Parabéns, você acertou!`);
}

while(count != 1){
    count--;
    prompt(`Qual o valor você deseja chutar? Você ainda tem mais ${count} chances`);
}

if(count == 1){
    alert(`Poxa, suas chances acabaram! O número era ${numeroAleatorio}!`);
}