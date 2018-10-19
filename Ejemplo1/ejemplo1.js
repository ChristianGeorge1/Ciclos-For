var title= document.querySelector('h1'); //Var se declaran las variables.   -->document.querySelector:Busca los elementos que tengan h1 o los que esten dentro del parentesis. 
title.addEventListener('click',updateName); //El método de addEventListener le da el evento de click para la funcion de updateName

function updateName(){ //Creamo la función de udpateName
    var name=prompt('Nombre del jugador'); //Le pedimos el nombre con el prompt
    title.textContent='Jugador 1: '+name; //
}   