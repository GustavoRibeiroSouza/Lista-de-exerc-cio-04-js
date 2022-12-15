let X = parseInt(prompt("Digite o valor de X: "));
let Y = parseInt(prompt("Digite valor de Y: "));
let Z = (X * Y) + 5;
var resposta = '';

if (Z <= 0){
    var  resposta = 'A';
} else if(Z <= 100){
    var resposta = 'B';
} else{
    var resposta = 'C';
}

document.write(Z + "-" +  resposta);