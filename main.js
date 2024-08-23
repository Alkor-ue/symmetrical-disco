var btnCarrito = document.getElementById("btnCarrito");
btnCarrito.onclick = function () {
    var carrito = document.getElementById("aside");
    if(carrito.style.visibility == "hidden"){
        carrito.style.visibility = "visible";
    }
    else{
        carrito.style.visibility = "hidden";
    }
}

//botones menú

var iframe = document.getElementById("iframe");

var btnPastas = document.getElementById("btnPastas");
btnPastas.onclick = function () {
    iframe.src = "Pastas.php";
}

//carrito
var aside = document.getElementById("datos");
var parrafo1 = document.createElement("p");
var datos = "";

var btnActualizar = document.getElementById("btnActualizar");
btnActualizar.onclick = function(){
    datos = JSON.parse(sessionStorage.getItem("lista"));
    var i = 0;

    do{
        parrafo1.innerHTML += datos[i]['nombre'] + "<br>";
        parrafo1.innerHTML += datos[i]['precio'] + "<br>";
        total += Number.parseInt(datos[i]['precio']);
        i = i + 1;
    }while(datos[i]);

    aside.appendChild(parrafo1);
}

var comprar = document.getElementById("btnComprar");
btnComprar.onclick = function(){
    console.log(total);
    alert("Total: " + total);
    total=0;
    parrafo1.innerHTML = "";
    datos = sessionStorage.setItem("lista", "")
}

//botones añadir al carrito

var carrito = document.getElementById('aside');

