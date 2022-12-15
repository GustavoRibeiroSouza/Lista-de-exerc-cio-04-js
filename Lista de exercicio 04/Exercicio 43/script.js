var A = parseFloat(prompt("Digite o valor de A: "));
var B = parseFloat(prompt("Digite o valor de B: "));
var C = parseFloat(prompt("Digite o valor de C: "));

if (A < B + C & B < A + C & C < A + B) {
    if (A == B & B == C) {
        var mens = "Triângulo Equilátero";
    } else if (A == B & B == C & A == C) {
        var mens = "Triângulo Isósceles";
    } else {
        var mens = "Triângulo Escaleno";
    }
} else {
    var mens = "Triângulo Escaleno";
}

document.write(mens);