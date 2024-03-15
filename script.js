let personas = [];
function capturaDatos() {
  console.log("Capturando datos...");
  let persona = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    fecha: document.getElementById("fecha").value,
    ciudad: document.getElementById("ciudad").value,
  };
  personas.push(persona);
  mostrarCards();
}
function mostrarCards() {
  document.getElementById("cards").innerHTML = "";
  personas.map(function (persona) {
    let card = document.createElement("section");
    let nombre = document.createElement("p");
    let correo = document.createElement("p");
    let telefono = document.createElement("p");
    let fecha = document.createElement("p");
    let ciudad = document.createElement("p");
    nombre.textContent = persona.nombre;
    correo.textContent = persona.correo;
    telefono.textContent = persona.telefono;
    fecha.textContent = persona.fecha;
    ciudad.textContent = persona.ciudad;
    card.append(nombre, correo, telefono, fecha, ciudad);
    document.getElementById("cards").append(card);
  });
}
let inputs = document.querySelectorAll("#formulario input");
// console.log(inputs)
inputs.forEach(function (input) {
  // console.log(input)
  // input.addEventListener("click", validarFormulario);
  // input.addEventListener("blur", validarFormulario);
  input.addEventListener("keyup", validarFormulario);
});

let expresionesRegulares = {
  nombre: /^[a-zA-Z]+$/,
  correo: /\b([\w\.-]+)@([\w\-]+)(\.\w{2,4})(\.\w{2,4})?\b/g,
  telefono: /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/gm,
  fecha: /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/,
  ciudad:/^[a-zA-Z]+$/
};

function validarFormulario(e) {
  switch (e.target.name) {
    case "nombre":
        if(expresionesRegulares.nombre.test(e.target.value)){
          document.getElementById("mensajeNombre").textContent = "";
          document.getElementById("mensajeNombre").textContent.remove  ("Campo Invalido");
        } else {
          document.getElementById("mensajeNombre").textContent = "Campo Invalido";
          document.getElementById("mensajeNombre").textContent.add ("Campo Invalido");

        }
      break;
      case "email":
        if(expresionesRegulares.correo.test(e.target.value)){
          document.getElementById("mensajeCorreo").textContent = "";
          document.getElementById("mensajeCorreo").textContent.remove("Campo Invalido");
        } else {
          document.getElementById("mensajeCorreo").textContent = "Campo Invalido";
          document.getElementById("mensajeCorreo").textContent.add("Campo Invalido");

        }
        break;
        case "telefono":
          if(expresionesRegulares.telefono.test(e.target.value)){
            document.getElementById("mensajeTelefono").textContent = "";
            document.getElementById("mensajeTelefono").textContent.remove("Campo Invalido");
          } else {
            document.getElementById("mensajeTelefono").textContent = "Campo Invalido";
            document.getElementById("mensajeTelefono").textContent.add("Campo Invalido");
          }
          break;
          case "fecha":
            if(expresionesRegulares.fecha.test(e.target.value)){
              document.getElementById("mensajeFecha").textContent = "";
              document.getElementById("mensajeFecha").textContent.remove("Campo Invalido");
            } else {
              document.getElementById("mensajeFecha").textContent = "Campo Invalido";
              document.getElementById("mensajeFecha").textContent.add("Campo Invalido");
            }
            break;
            case "ciudad":
              if(expresionesRegulares.ciudad.test(e.target.value)){
                document.getElementById("mensajeCiudad").textContent = "";
                document.getElementById("mensajeCiudad").textContent.remove("Campo Invalido");
              } else {
                document.getElementById("mensajeCiudad").textContent = "Campo Invalido";
                document.getElementById("mensajeCiudad").textContent.add("Campo Invalido");
              }
              break;

        
  }
}
