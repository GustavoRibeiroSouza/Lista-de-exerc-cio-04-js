function valor(){
    var valor_a = parseInt(prompt("Digite o valor A: "));
    var valor_b = parseInt(prompt("Digite o valor B: "));
    var valor_c = parseInt(prompt("Digite o valor C: "));
    var valor_d = parseInt(prompt("Digite o valor D: "));

    var valor_p = valor_a * valor_c;
    var valor_s = valor_b + valor_d;

    alert(valor_a + " X " + valor_c + " = " + valor_p);
    alert(valor_b + " + " + valor_d + " = " + valor_s);
}