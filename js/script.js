
/*var mivariable:  //SCOUT GLOBAL
let
 mivariable; //SOUT LOCAL*/

let miNombre ="Gisela" ;
let miApellido="Martinez";
let miEdad= 35;
let miDNI= 123456789
let miDireccion= "calle Falsa 123";

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miDNI);
console.log(miDireccion);

/*let dni=parseInt(prompt("Ingrese su Dni"));
if (dni!==333){
alert("ACCESO DENEGADO");
console.log(Acceso denegado);
}else{
alert("Bienvenido, acceso permitido);
let nombre=prompt("Ingrese su nombre")
}*/
const formulario= document.getElementById('formulario'); //trae el formulario
const inputs=document.querySelectorAll('#fomulario imputs');//trae los imputs

const expresiones ={
    usuario:/^[a-zA-Z0-9\_\-]¨{4,16}$/,//letras(may/min/se pueden repetir), numeros, guion y guion bajo
    nombre: /^[a-zA-ZÁ-ÿ\s]¨{1,40}$/,//letras y espacios, pueden llevar acentos
    correo: /^[a-zA-Z0-9_.+\+@[a-zA-Z0-9-]+\.`[a-zA-Z0-9-.]+$/,
}
const validarFormulario=(e) => {
    switch (e.target.name) {// cambia el mensaje
        case"nombre":     //sino se completa el campo
            if(expresiones.nombre.test(e.target.value)){   //compara que sea un nombre de acuerdo a lo permitido por expresiones
                                                           //devuelve verdadero
            } else {
                document.getElementById('Grupo__nombre')
            }
        break;
        case"apellido":     //sino se completa el campo
            if(expresiones.nombre.test(e.target.value)){   //compara que sea un nombre de acuerdo a lo permitido por expresiones
            //devuelve verdadero
        } else {
document.getElementById('Grupo__nombre')
}
        case"correo":     //sino se completa el campo
            console.log('Funciona');
        break;
        case"cantidad":     //sino se completa el campo
            console.log('Funciona');
        break;
        case"usuario":     //sino se completa el campo
            console.log('Funciona');
        break;
}
}
inputs.forEach(() => {
    input.addEventListener('keyup', validarFormulario ); // avisa cuando se saltar tecla
    input.addEventListener('blur', validarFormulario ); //avisa cuando se cliquea fuera
});
formulario.addEventListener('submit',(e) => {
    e.preventDefault();   //no envia a ningun lado
});