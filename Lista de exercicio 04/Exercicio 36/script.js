var mulher1 = parseInt(prompt("Digite a idade da 1º mulher: "));
var mulher2 = parseInt(prompt("Digite a idade da 2º mulher: "));
var homem1 = parseInt(prompt("Digite a idade do 1º homem: "));
var homem2 = parseInt(prompt("Digite a idade da 2º homem: "));

if (mulher1 > mulher2) {
    var maisvelha = mulher1;
    var maisnova = mulher2;
} else if (mulher2 > mulher1) {
    var maisvelha = mulher2;
    var maisnova = mulher1;
} if (homem1 > homem2) {
    var maisvelho = homem1;
    var maisnovo = homem2;
} else {
    var maisvelho = homem2;
    var maisnovo = homem1;
}

var soma = maisvelha + maisnovo;
var produto = maisvelho * maisnova;


document.write("mais nova " + maisnova + "</br>");
document.write("mais novo " + maisnovo + "</br>");
document.write("mais velha " + maisvelha + "</br>");
document.write("mais velho " + maisvelho + "</br>");
document.write("");
document.write("A soma da idade da mais velha com o mais novo é " + soma + "</br>");
document.write("O produto da idade do mais velho coma a mais nova é " + produto);