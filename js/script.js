
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
        var categoria = document.getElementById("categoria").value;
        var cantidad = parseInt(document.getElementById("cantidad").value); // Valor por defecto es 1
        var descuento = 0;
    
        switch (categoria) {
          case "estudiante":
            descuento = 0.8;
            break;
          case "trainee":
            descuento = 0.5;
            break;
          case "junior":
            descuento = 0.15;
            break;
        }
    
        var valorBase = 200;
        var totalPagar = cantidad*(valorBase - (valorBase * descuento));
    
        // Mostrar el resultado
        document.getElementById("resultado").innerText = "$" + totalPagar.toFixed(2);
      }
/*
var resumen=document.getElementById('resumen');
var guardar=document.getElementById('guardar');
var lista=document.getElementById('lista');
var data=[];
resumen.addEventListener("click",resumen);
guardar.addEventListener("click",guardar);

function resumen(){
  var id =document.getElementById('id').value;
  var nombre =document.getElementById('apellido').value;
  var correo =document.getElementById('correo').value;
  var cantidad =parseFloat(document.getElementById('cantidad').value);
  var categoria =document.getElementById('gategoria').value;
  var total =  200 * (1 - descuento);
  data.push(
    {
      "id":cantidad,
      "nombre":nombre,
      "apellido":apellido,
      "correo":correo,
      "cantidad": cantidad,
      "categoria":categoria,
      "total":total(),
      
    }
  );
 
  //idntificar las tablas
  var id_row='row'+cantidad;
  var fila='<tr id='+id_row+'><td>'+nombre+'</td><td>'+apellido+'</td><td>'+correo+'</td><td>'+cantidad+'</td><td>'+categoria+'</td><td>'+total+'</td><td><a href="#" class="btn btn-danger" onclick="eliminar('+cant+')";>eliminar</a><a href="#" class="btn btn-danger" onclick="cantidad('+cant+')";>cantidad</a></td></tr>';
}
//agregar a la tabla
function guardar(){
$("#lista").append(fila);
$("#nombre").val('');
$("#apellido").val('');
$("#correo").val('');
$("#cantidad").val('');
$("#categoria").val('');
$("#total").val('');
cant++;
sumar();
}
function sumar(){
  var tot=0;
  for(x of data){
    if(x.id==row){
      pos=i;
    }
    i++;
  }
  data.splice(pos,1);//para eliminar
  sumar();//vuelve a sumar

}
function cantidad(row){//modificar cantidad
  var canti=parseFloat(prompt("nueva cantidad"));
  data[row].cantidad=canti;
  data[row].total=data[row].cantidad=data[row].precio;
  var filaid=document.getElementById("row"+row);
  celda=filaid.getElementBytabName('td');
  celda[4].innerHTML=canti;  //posiscion
  celda[6].innerHTML=data[row].total;
  sumar();
} 
*/

      function total() {
        var categoria = document.getElementById("categoria").value;
        var descuento = 0;
    
        switch (categoria) {
          case "estudiante":
            descuento = 0.8;
            break;
          case "trainee":
            descuento = 0.5;
            break;
          case "junior":
            descuento = 0.15;
            break;
        }}
/*    
        var totalPagar = 200 * (1 - descuento);
    
        // Agregar fila a la tabla
        var tabla = document.getElementById("tablaResultados").getElementsByTagName('tbody')[0];
        var fila = tabla.insertRow(tabla.rows.length);
        var celdaEmpleado = fila.insertCell(0);
        var celdaDescuento = fila.insertCell(1);
        var celdaTotal = fila.insertCell(2);
        var celdaBorrar = fila.insertCell(3);
    
        celdaEmpleado.innerHTML = categoria;
        celdaDescuento.innerHTML = (descuento * 100) + "%";
        celdaTotal.innerHTML = "$" + totalPagar.toFixed(2);
        celdaBorrar.innerHTML = '<button class="btn btn-danger btn-sm" onclick="borrarFila(this)">Borrar</button>';
      }
    
      function borrarFila(boton) {
        var fila = boton.parentNode.parentNode;
        fila.parentNode.removeChild(fila);
      }
    
      function borrarTabla() {
        var tabla = document.getElementById("tablaResultados").getElementsByTagName('tbody')[0];
        tabla.innerHTML = "";
      }
    
    
    
    
    
 /*     function calcularTotal() {
      // Obtener el valor de la categoría seleccionada
      var cantidad = parseFloat(document.getElementById("cantidad").value) || 0;
      var categoria = document.getElementById("categoria").value;

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
//}*/


