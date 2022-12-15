function valor(){
    var salario_mensal = parseFloat(prompt("Digite o salario mensal: "));
    var percentual_reajuste = parseFloat(prompt("Digite o valor do  percentual de reajuste: "));

    var novo_salario  = salario_mensal + (salario_mensal * percentual_reajuste / 100);

    alert("O valor do novo salario é R$ " + novo_salario)
 }