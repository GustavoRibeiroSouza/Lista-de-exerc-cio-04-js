function valor() {
    var nota_1 = parseFloat(prompt("Digite a 1° nota: "));
    var nota_2 = parseFloat(prompt("Digite a 2° nota: "));

    var media = (nota_1 + nota_2) / 2

    if (media >= 6) {
        alert("Media: " + media +  "  Aprovado(a).");
    }
    else {
        alert("Media: " + media +  "  Reprovado(a).");
    }
}
