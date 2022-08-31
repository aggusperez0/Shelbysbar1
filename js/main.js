class Productos {
  constructor (nombre, precio) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

//Declaramos un array de productos para almacenar objetos

const productos = [];

let precioTotalCarrito = 0

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

  function ConcatenarMensajes(){
    var mensajeFinal = "";
    var SePresionoEscape = true;
    var ultimaPalabra = "";
    alert("Finalizara la funcion al presion la tecla 'Esc' o presionando el boton 'Cancelar'");
    while(ultimaPalabra != null){
         mensajeFinal += ultimaPalabra;
         if(mensajeFinal != ""){
           alert("Mensaje completo: " + mensajeFinal);
         }
         ultimaPalabra = prompt("Ingrese una palabra: ");
      }
    alert("Mensaje Final: " + mensajeFinal);
  }

  function agregarAlCarrito(productoNombre, precioAgregar){
    productos.push(new Productos(productoNombre, precioAgregar));
	precioTotalCarrito += precioAgregar;
	let divContenedor = document.getElementById("divCarritoEfectuarCompra");
        if(divContenedor.classList.contains("d-ocultar")){
		divContenedor.classList.remove("d-ocultar");
        }
	let btnId = document.getElementById("btnCarritoEfectuarCompra");
	btnId.textContent = "Comprar $ " + precioTotalCarrito;
  }

  function cerrarDivCarrito(){
	precioTotalCarrito = 0;
   	let divContenedor = document.getElementById("divCarritoEfectuarCompra");
	divContenedor.classList.add("d-ocultar");
  }

  function realizarCompra() {
    let mensaje = "";
    for(const producto in productos){
      mensaje += producto.nombre + " = " + producto.precio + "\n";
    }
    alert("Se realizo su compra con exito!!");
  }