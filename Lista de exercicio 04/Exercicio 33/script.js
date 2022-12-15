let numero1 = parseInt(prompt("Digite um número"));
let numero2 = parseInt(prompt("Digite um número"));

if (numero1 > numero2) {
    document.write("O primeiro numero é maior.");
} else if (numero2 > numero1) {
    document.write("O segundo numero é maior.");
} else {
    document.write("Os numero são iguais.");
}