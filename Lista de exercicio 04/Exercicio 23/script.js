
var nome = String(prompt("Digite seu nome: "));
var sexo = String(prompt("Digite seu sexo [f/m]: "));
var altura = parseFloat(prompt("Digite a sua altura: "));

if (sexo == "m") {
    var peso = (72.7 * altura) - 58;
    document.write("O peso ideal para o seu sexo e a sua altura é" + peso + "Kg");
}
else {
    var peso = (62.1 * altura) - 44.7;
    document.write("O peso ideal para o seu sexo e a sua altura é " + peso + "Kg");
}
