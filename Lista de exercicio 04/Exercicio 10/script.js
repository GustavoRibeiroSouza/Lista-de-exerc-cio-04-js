function valor(){
    var hora_tra = parseInt(prompt("Quantidades de horas trabalhada: "));
    var salario_ho = parseFloat(prompt("Salario por horas trabalhadas: "));

    var salario_to = salario_ho * hora_tra;

    if (hora_tra> 160){
        var hora_ex = hora_tra - 160;
        // var salario_ex = hora_ex * salario_ho;
        var salario_ex = salario_to + (salario_ho * 50 / 100);
        document.write("Salario com acrecimo das horas extras R$ " + salario_ex)
    }
    else{
        document.write("Salario mensal R$ " + salario_to);
    };
};
