// ESTRUCTURAS DE CONTROL / CONDICIONALES

// if // else if // else ----------------------------------

// if (condition) {
// instrucciones si se cumple la condición
// }

// if (condition) {
// instrucciones si se cumple la condición
// } else {
// instrucciones si la condición no se ha cumplido
// }

// if (condition) {
//   // instrucciones si se cumple la condición
// } else if(condición){
//   // instrucciones si la primera condición no se cumple pero la nueva sí
// } else if (condición){
//   // instrucciones si las anteriores condiciones no se han cumplido pero la ultima sí
// }


// switch ---------------------------------------------------
// permite controlar el valor de una variable

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// -Ejemplo-
// let numero = 9;

// switch (numero){
//   case 8: 
//     alert("el número es ocho");
//     numero+50;
//     break;

//   case 1: alert("el número es uno"); break;

//   case 9: alert("el número es nueve");
//           break;

//   case 3:
//   case 2: alert("el número es dos o tres"); break;

//   case "Hola":
//   case false:

//   default: alert("No sé que número es.")
// }



// Operador Ternario --------------------------------------

// dato ? instruccion si es verdadero : instruccion si es falso;

// -Ejemplo-
// let condicion = false;

//  condicion ? alert("La condición es verdadera") : alert("La condición es falsa");

//   numero ? alert("El número es verdadero") : alert("El número es falso");


// prompt("", "");


// --Ejercicio 1---------------------------------------------------------
// Convierte estos if en un switch
let a = +prompt('Elige un número del 0 al 3', '');

// if (a == 0) {
//   alert( "Has elegido cero");
// }

// if (a == 1) {
//   alert( "Has elegido el uno" );
// }

// if (a == 2 || a == 3) {
//   alert( "Elegiste un dos o un tres" );
// }

switch (a) {
  case 0: alert("Has elegido cero"); break;
  case 1: alert("Has elegido el uno"); break;
  case 2:
  case 3: alert("Elegiste un dos o un tres"); break;
  default: alert("No has elegido un número valido");
}






// --Ejercicio 2-----------------------------------------------------------
// Convierte este switch en un if
let estacion = "otoño";
let mensajeEstacion;

// switch (estacion) {
//   case 'primavera':
//     mensajeEstacion = "Estamos en primavera, viene el buen tiempo.";
//     break;

//   case 'otoño':
//   case 'invierno':
//     mensajeEstacion = 'Estamos en otoño o invierno, hace frío.';
//     break;

//   default:
//     mensajeEstacion = 'Probablemente sea verano, ¿hace calor?';
// }

if (estacion == "primavera") {
  mensajeEstacion = "Estamos en primavera, viene el buen tiempo.";
} else if (estacion == "otoño" || estacion == "invierno") {
  mensajeEstacion = 'Estamos en otoño o invierno, hace frío.';
} else {
  mensajeEstacion = 'Probablemente sea verano, ¿hace calor?';
}

document.getElementById("caja-mensaje-estacion").innerText = mensajeEstacion;





//Ejemplo validaciones con if --------------------------------------------------
const btnCuenta = document.querySelector("#btn-cuenta");
const mensajeContrasenia = document.querySelector("#mensaje-contrasenia");
// let contraseniaInput = document.querySelector("#input-contrasenia");
//   let contrasenia = document.querySelector("#input-contrasenia");

// contrasenia.addEventListener('input', function (e) {
//   validarContrasenia(e.target.value);
// });

btnCuenta.addEventListener('click', function () {
  validarContrasenia();
});

function validarContrasenia() {
  let contrasenia = document.querySelector("#input-contrasenia").value.trim();
  console.log(contrasenia);

  if (contrasenia == "" || !contrasenia) {
    mensajeContrasenia.style.color = "red";
    mensajeContrasenia.innerText = "Escribe una contraseña";

  } else if (contrasenia.length < 10) {
    mensajeContrasenia.style.color = "red";
    mensajeContrasenia.innerText = "Tienes que poner una contraseña mas larga";

  } else if (!/[A-Z]/.test(contrasenia)) {
    mensajeContrasenia.style.color = "red";
    mensajeContrasenia.innerText = "La contraseña debe tener al menos una mayúscula";

  } else if (!/[a-z]/.test(contrasenia)) {
    mensajeContrasenia.style.color = "red";
    mensajeContrasenia.innerText = "La contraseña debe tener al menos una mayúscula";

  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasenia)) {
    mensajeContrasenia.style.color = "red";
    mensajeContrasenia.innerText = "La contraseña debe tener un símbolo";

  } else {
    mensajeContrasenia.style.color = "green";
    mensajeContrasenia.innerText = "Contraseña válida";

  }

}







// --Ejercicio 3-----------------------------------------------------------
// Crea un ternario que saque un mensaje de alerta si el usuario es menor de edad, 
// si es mayor de edad, que muestre un mensaje de bienvenida.

let edad = prompt("¿Qué edad tienes?");


edad < 18 ? alert("Eres menor de edad, no puedes acceder") : alert("Bienvenido");

alert(edad < 18 ? "Eres menor de edad, no puedes acceder" : "Bienvenido");

let mayorEdad2 = edad >= 18; 
