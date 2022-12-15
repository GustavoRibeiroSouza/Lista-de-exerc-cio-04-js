let codigo = parseInt(prompt("Digite o seu codigo de acesso: "));
let nascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
let contrato = parseInt(prompt("Digite o ano do seu contrato: "));

let idade = 2022 - nascimento;
let trabalho = 2022 - contrato;

if (idade >= 65){
   document.write("REQUERER APOSENTADORIA POR IDADE");
}else if(trabalho >= 30){
    document.write("REQUERER APOSENTADORIA POR ANOS TRABALHADOS");
}else{
    document.write("NÃO REQUERER APOSENTADORIA");
}