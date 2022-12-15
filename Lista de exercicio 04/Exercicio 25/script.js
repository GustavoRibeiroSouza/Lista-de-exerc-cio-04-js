var conta = parseInt(prompt("Digite o numero da sua conta: "));
var saldo = parseFloat(prompt("Digte o valor do saldo: "));
var debito = parseFloat(prompt("Digite o valor do debito: "));
var credito = parseFloat(prompt("Digite o valor do credito: "));

var atual = saldo - debito + credito;

if (atual > 0) {
    document.write("Saldo Positivo!");
}
else {
    document.write("Saldo Invalido!");
}




