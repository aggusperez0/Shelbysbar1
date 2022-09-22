let formulario = document.getElementById('form')

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  let mail = document.getElementById('email-form').value;
  console.log(mail);
  if(mail == ""){
    Swal.fire({
      icon: 'error',
      title:'Oops...',
      text: 'Indique un correo electronico',
    });
  }
})

function Enviar(){
    localStorage.setItem("name", document.querySelector("#name").value);
    localStorage.setItem("apellido", document.querySelector("#apellido").value);
  }