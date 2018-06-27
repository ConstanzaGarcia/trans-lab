function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))

        return false;

    return true;

}

const boton = document.getElementById("input");
boton.addEventListener("click", () => {
  // Acá guardo el comentario ingresado por el usuario en el textarea
  let comments = document.getElementById("comment").value;

  // Limpiar el textarea
  document.getElementById("comment").value = " ";

  //contenedor donde dejaré mis comentarios en HTML
  const cont = document.getElementById("cont");

  //Crear div contenedor
  const newComments = document.createElement("div");

  //Validar que el textarea tenga un comentario y no esté vacío
  if (comments.length === 0 || comments === null){
    alert ("Debes ingresar un mensaje");
    return false;
  }

  //Crear checkbox
  const chck = document.createElement("input");
  chck.type = "checkbox";

  /
  const contenedorElemento = document.createElement("p");
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
})