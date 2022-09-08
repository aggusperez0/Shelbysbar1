const formulario = document.getElementById('form')

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  let mail = document.getElementById('email-form').value;
  console.log(mail);
  if(mail == ""){
    alert("Introduzca un correo electronico");
  }
})

class Productos {
  constructor (nombre, precio) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

//Declaramos un array de productos para almacenar objetos

let productos = [];

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

  function obtenerImporteTotalParcialCarrito(){
	let importeTotalParcial = 0;
	for(const producto of productos){
		importeTotalParcial += producto.precio;
         }
	return importeTotalParcial;
  } 

  function agregarAlCarrito(productoNombre, precioAgregar){
    productos.push(new Productos(productoNombre, precioAgregar));
	let divContenedor = document.getElementById("divCarritoEfectuarCompra");
        if(divContenedor.classList.contains("d-ocultar")){
		divContenedor.classList.remove("d-ocultar");
        }
	let importeTotalParcial = obtenerImporteTotalParcialCarrito();
	let btnId = document.getElementById("btnCarritoEfectuarCompra");
	btnId.textContent = "Comprar $ " + importeTotalParcial;
  }

  function cerrarDivCarrito(){
	productos = [];
   	let divContenedor = document.getElementById("divCarritoEfectuarCompra");
	divContenedor.classList.add("d-ocultar");
  }

  function realizarCompra() {
    let mensaje = "Se realizo la compra de los siguientes productos: \n";
    for(const producto of productos){
      mensaje += producto.nombre + " = " + producto.precio + "\n";
    }
    alert(mensaje);
  }