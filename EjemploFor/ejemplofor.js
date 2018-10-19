var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');
var btnTres = document.querySelector('#btnTres');
var btnCuatro = document.querySelector('#btnCuatro');

var opcion = document.querySelector('#opciones');
var inputNumero = document.querySelector('#numero');
var resultado = document.querySelector('#resultado');


btnUno.addEventListener('click',ejemplo1);
btnDos.addEventListener('click',ejemplo2);
btnTres.addEventListener('click',ejemplo3);
btnCuatro.addEventListener('click',ejemplo4);

function ejemplo1(){ //Ciclo for

    var numero = Number(inputNumero.value);

    for(var i = 1; i<=numero; i++){
        var row = resultado.insertRow(-1); //Añadi un renglon.
        var cell = row.insertCell(0); //Añadi una celda.
        cell.innerHTML = i;
    }
}
function ejemplo2(){ //Ciclo for.
    var numero = Number(inputNumero.value);

    for(var i = 1; i<=numero; i++){
        var valor = prompt("Ingrese un número: "+i+"/" +numero + ":");
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = valor;
    }
}

function ejemplo3(){
    var numero = Number(inputNumero.value);
    var i = 1;
    while(i<=numero){
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;
        i++;
    }
}

function ejemplo4(){
    var numero = Number(inputNumero.value);
    
    var i = numero;
    while(i>0){
        var opc= document.createElement('option');
        opc.text = i;
        opcion.add(opc);
        i--;
    }

}