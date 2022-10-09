var contador = 0;

const carritoContador = document.getElementById("carritoContadr");

function agregarCarrito(){
    carrito++;

    carritoContador.innerHTML=carrito;

    var articulo = document.createElement("div");
    var imagen = document.createElement("img");
    imagen.src = imagenSrc;
    
    
    var boton = document.createElement("button");
    boton.addEventListener("click", function(){
        eliminar();
    })
    boton.innerHTML = "Eliminar"

    articulo.appendChild(imagen);
    articulo.appendChild(boton);

    carritoContador.appendChild(articulo);

    carritoContador.innerHTML=id="carritoContador" ;

}

function eliminar() {
    carrito--;
    carritoContador.innerHTML = carrito;
}

