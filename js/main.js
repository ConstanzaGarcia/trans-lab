//Para que se cumpla la condición de la contraseña

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))

        return false;

    return true;

}


//Para que se impriman los numeros de tarjeta

const boton = document.getElementById("input");
boton.addEventListener("click", () => {
  // Acá guardo el numero de tarjeta ingresado
  let comments = document.getElementById("comment").value;

  // Limpiar el textarea
  document.getElementById("comment").value = " ";

  //contenedor donde quedan los numeros de tarjeta en HTML
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


//Llamar a la api

 // Mostrar lista de usuarios 

 const btn = document.querySelector('button');
 const url = 'http://www.psep.cl/api/Bip.php?&numberBip=666';
 
 const getJSON = (url, callback ) =>{
     //crear instancia del objeto XMLHttpRequest
  const request = new XMLHttpRequest ();
 
  request.onload = () => {
      //El cuatro signific aque la petición se termino y la respuesta esta lista
      //200: status esta OK 
      if (request.readyState === 4 && request.status === 200) {
         callback (request.responseText); //para que me lo devuelva en string y así poder manipularlo para acceder a sus propiedades
      }
      
  }
  //open ()
  request.open('GET', url);
  //send ()
  request.send(); 
 }
 
 btn.addEventListener('click',() => {
     getJSON (url, response => {
         let doggie = JSON.parse (response).message; //es un metodo
         console.log(bip);
             })
 });