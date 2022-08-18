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