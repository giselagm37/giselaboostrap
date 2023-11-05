
/*var mivariable:  //SCOUT GLOBAL
//let mivariable; //SOUT LOCAL

//let miNombre ="Gisela" ;
//let miApellido="Martinez";
//let miEdad= 35;
//let miDNI= 123456789
//let miDireccion= "calle Falsa 123";

//console.log(miNombre);
//console.log(miApellido);
//console.log(miEdad);
//console.log(miDNI);
//console.log(miDireccion);
//let dni=parseInt(prompt("Ingrese su Dni"));
//if (dni!==333){
//alert("ACCESO DENEGADO");
//console.log(Acceso denegado);GILA
//}else{
//alert("Bienvenido, acceso permitido);
//let nombre=prompt("Ingrese su nombre")
//}*/
const forms = document.querySelectorAll('.needs-validation')

  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })

function borrar() {
    // Borrar los campos de cantidad y categoría
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "";
  
    // Borrar el campo de total
    document.getElementById("resultadoTotal").value = "";
      }


    function calcularTotal() {
      // Obtener el valor de la categoría seleccionada
      var cantidad = parseFloat(document.getElementById("cantidad").value) || 0;
      var categoria = document.getElementById("categoria").value

      // Precio base del ticket
      var precioBase = 200;

      // Calcular descuento según la categoría
      var descuento = 0;
      if (categoria === "Estudiante") {
          descuento = 0.8; // 80%
      } else if (categoria === "Trainee") {
          descuento = 0.5; // 50%
      } else if (categoria === "Junior") {
          descuento = 0.15; // 15%
      }

      // Calcular el precio final con descuento
      var precioFinal = precioBase * (1 - descuento);
      var total = cantidad * precioFinal

      // Mostrar el total en la etiqueta
      var totalLabel = document.getElementById("totalLabel");
      totalLabel.innerHTML =  total.toFixed(2);
 
      // Mostrar mensaje y borrar después de 3 segundos
      //mostrarMensaje("Compra realizada con éxito");
      //setTimeout(borrarMensaje, 3000);
  }

  // Mostrar el resumen en la tabla
  mostrarResumen( nombre, apellido, Correo, cantidad, categoria,precioFinal);

  function mostrarResumen(nombre, apellido, Correo, cantidad, categoria,precioFinal) {
      var table = document.getElementById("resumenTable");
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);

      cell1.innerHTML = nombre;
      cell2.innerHTML = apellido;
      cell3.innerHTML = Correo;
      cell4.innerHTML = cantidad;
      cell5.innerHTML = categoria;
      cell6.innerHTML = precioFinal.toFixed(2);
      
      cell7.innerHTML = total.toFixed(2);
  }   
  function mostrarMensaje(mensaje) {
    var mensajeLabel = document.getElementById("mensajeLabel");
    mensajeLabel.innerHTML = mensaje;
}

//function borrarMensaje() {
//    var mensajeLabel = document.getElementById("mensajeLabel");
//    mensajeLabel.innerHTML = "";
//}


