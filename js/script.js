const btn = document.getElementById("button")

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault()

  btn.value = "Enviando..."

  const serviceID = "default_service"
  const templateID = "template_ehu49ha"

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "ENVIAR MENSAJE"
      alert("Mensaje enviado con exito!")
      limpiarFormulario();
  
    },
    (err) => {
      btn.value = "ENVIAR MENSAJE"
      alert(JSON.stringify(err))
    },
  )
})

function limpiarFormulario() {

  const formulario = document.getElementById("form");
 
  formulario.reset();
}