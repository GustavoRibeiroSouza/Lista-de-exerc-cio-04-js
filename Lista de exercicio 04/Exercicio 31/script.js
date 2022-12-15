var ladoA = parseFloat(prompt("Digite o valor do A: ")); 
var ladoB = parseFloat(prompt("Digite o valor do B: ")); 
var ladoC = parseFloat(prompt("Digite o valor do C: ")); 


if (ladoA + ladoB > ladoC & ladoB + ladoC > ladoA & ladoA + ladoC > ladoB){
document.write("Pode se criar um triangulo");
}
else{
    document.write("Não pode se formar um triangulo");
};