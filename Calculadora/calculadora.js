var btnSumar = document.querySelector('#sumar');
var btnRestar = document.querySelector('#restar');
var btnMulti = document.querySelector('#multi');
var btnDividir = document.querySelector('#dividir');
var btnResiduo = document.querySelector('#residuo');
var btnLimpiar = document.querySelector('#limpiar')

btnSumar.addEventListener('click',sumar);
btnRestar.addEventListener('click',restar);
btnMulti.addEventListener('click',multi);
btnDividir.addEventListener('click',dividir);
btnResiduo.addEventListener('click',residuo);
btnLimpiar.addEventListener('click',limpiar);

var num1= document.querySelector('#numero1');
var num2= document.querySelector('#numero2');
var resulFinal = document.querySelector('#resultado');

function sumar(){
   
    var resulSuma= Number (num1.value) + Number(num2.value);
    resulFinal.value=resulSuma;
}
function restar(){
    
    var resulResta = Number(num1.value) - Number(num2.value);
    resulFinal.value=resulResta;
}
function multi(){

    var resulMulti = Number(num1.value) * Number(num2.value);
    resulFinal.value=resulMulti;
}
function dividir(){
    
    var resulDividir = Number(num1.value) / Number(num2.value);
    resulFinal.value = resulDividir;
}
function residuo(){
    var resulResiduo = Number(num1.value) % Number(num2.value);    
    resulFinal.value=resulResiduo;
}
function limpiar(){

    num1.value="";
    num2.value="";
    resulFinal.value="";

}
