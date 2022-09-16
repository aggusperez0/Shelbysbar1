let formulario = document.getElementById('form')

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  let mail = document.getElementById('email-form').value;
  console.log(mail);
  if(mail == ""){
    alert("Introduzca un correo electronico");
  }
})

function Enviar(){
    localStorage.setItem("name", document.querySelector("#name").value);
    localStorage.setItem("apellido", document.querySelector("#apellido").value);
  }