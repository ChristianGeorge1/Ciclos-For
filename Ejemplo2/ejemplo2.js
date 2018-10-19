var btnCalcular = document.querySelector('#calcular');
btnCalcular.addEventListener('click', sumar);

function sumar(){
    var num1 = document.querySelector('#numero1');
    var num2 = document.querySelector('#numero2');

    var resultado =  Number (num1.value) + Number(num2.value); 

    var resultadoF = document.querySelector('#resultado');

    resultadoF.value=resultado;
}
