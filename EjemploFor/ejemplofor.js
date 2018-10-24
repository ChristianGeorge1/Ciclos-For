var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');
var btnTres = document.querySelector('#btnTres');
var btnCuatro = document.querySelector('#btnCuatro');
var btnCinco = document.querySelector('#btnCinco');

var opcion = document.querySelector('#opciones');
var inputNumero = document.querySelector('#numero');
var resultado = document.querySelector('#resultado');
var lienzo = document.querySelector('#lienzo');


btnUno.addEventListener('click',ejemplo1);
btnDos.addEventListener('click',ejemplo2);
btnTres.addEventListener('click',ejemplo3);
btnCuatro.addEventListener('click',ejemplo4);
btnCinco.addEventListener('click',ejemplo5);

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
function ejemplo5(){
    var c = lienzo.getContext('2d');
    var i = 0;
    
    do{
        var x = Math.trunc((Math.random()*501)+1);
        var y = Math.trunc((Math.random()*501)+1);
        var r = Math.trunc((Math.random()*50)+1);

        if(x>250){
            break;
        }

        c.beginPath();
        c.fillStyle = 'rgba(0,255,0,0.1)';
        c.arc(x,y,r,0, 2*Math.PI);
        c.fill();
        i++;
    }while(i<30);
    
    
    
}
