var numero1 = parseInt(prompt("Digite um valor A: "));
var numero2 = parseInt(prompt("Digite um valor B: "));
var numero3 = parseInt(prompt("Digite um valor C: "));

if (numero1 > numero2 && numero1 > numero3) {
    var maior = numero1;
    if (numero2 > numero3) {
        var maior2 = numero2;
    } else
        var maior2 = numero3;
}
if (numero2 > numero1 && numero2 > numero3) {
    var maior = numero2;
    if (numero1 > numero3) {
        var maior2 = numero1;
    } else
        var maior2 = numero3;
}
if (numero3 > numero2 && numero3 > numero1) {
    var maior = numero3;
    if (numero2 > numero1) {
        var maior2 = numero2;
    } else
        var maior2 = numero1;
}
var soma = maior + maior2;
document.write("A soma dos dois maiores numero digitados é: " + soma);