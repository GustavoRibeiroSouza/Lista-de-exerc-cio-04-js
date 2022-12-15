function valor() {
    var valor_a = parseInt(prompt("Digite o valor A: "));
    var valor_b = parseInt(prompt("Digite o valor B: "));
    var valor_c = parseInt(prompt("Digite o valor C: "));

    var quadra_a = valor_a ** 2;
    var quadra_b = valor_b ** 2;
    var quadra_c = valor_c ** 2;

    var soma = quadra_a + quadra_b + quadra_c;

    alert("A soma dos quadrados dos valores digitados é " + soma);
}