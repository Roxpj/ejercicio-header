/////Introducción a Javascript

//TIPOS DE DATO
//number, string, boolean, undefined, null, bigint, symbol, funcion, colecciones: objeto{}, array[] 

65 //number

"65" //string - cadena de caracteres
'Hola' //string
//  `Hola ${variable o codigo js}` //string

true //boolean
false //boolean

// Las operaciones matemáticas devuelven números, las operaciones lógicas o condiciones devuelven booleanos
// (5 > 21) //boolean - false
// (65 + 74) //number


//VARIABLES
let edad; //creación de la variable
const NOMBRE = "Antonio"; //const - no puedo modificar esta variable una vez creada
// var - 

let miPrimeraVariable = (5 > 21);
let calculo = (24 - 5);

console.log(calculo); //visualizar en consola
console.log(miPrimeraVariable);

//typeof - para comprobar el tipo de dato
console.log(typeof miPrimeraVariable);


// Arrays       0       1          2    
let nombres = ["Raul", "Pepita", "Maria"];


// Object   clave: valor,
let persona1 = {
    nombre: "Raul",
    edad: 23,
    esPremium: false,
    tel: "5454212"
}


// string.lenght // nos dice el num de elementos en un array, o numero char en un string
// charAt() // selecciona un caracter en una posicion del string
// indexOf  //devuelve la primera posición donde encuentre un elemento o caracter especificado, en arrays o strings
// parseInt() //convierte a número entero
// parseFloat() //convierte a número con decimales



//createElement("")     //crear elem html
//appendChild()      //añadir hijos a un elemento
//.classList    .add  .remove .toggle
//removeAttribute()  .setAttribute()
//innerHTML = ``
//textContent = ``


// document.querySelector("h1").classList.add("titulo-seccion")
// document.querySelector("h1").style.color



//FUNCIONES

// function name(params) {
//     instructions
// }    

function nombreFuncion(parametro, parametro2) {
    console.log(typeof parametro);
    let resultado = parametro2 + 27;
    return resultado; //devolvemos algo a través de return
}

let resultadoFuncion = nombreFuncion(edad, calculo); //podemos recoger lo que devuelve una funcion



// DOM - Document Object Model

// document.head
// document.title
// document.body
// window


// let caja = document.getElementById("caja");   //getElementById

// document.getElementsByClassName("noticias");  //getElementsByClassName

// document.querySelector("#caja")               //querySelector
// document.querySelector(".noticias");
// document.querySelector("p");
// let parrafos = document.querySelector("article p"); //tambien :hover, :active
// let ultimoElemTarea = document.querySelector("ul > li:last-child")

//// querySelectorAll selecciona una coleccion de elementos, los guarda en forma de array
let elemtosLista = document.querySelectorAll("ul li");

// elemtosLista[0] // selección de un elem de array por su posicion (index)



// BUCLES
// Nos permiten repetir el código un número de veces determinado, hasta que se cumple la condición.

//for ( inicio ;  condición ;  modificador ) { instrucciones}
for (let index = 0; index < elemtosLista.length; index++) {
    const element = elemtosLista[index];
}


// forEach - Método para recorrer arrays
array.forEach(element => {

});


// EVENTOS
// target.addEventListener( "tipo de evento", función a lanzar )
// Escuchador que indica al navegador que este atento a la interacción del usuario.

    // blur - Cuando el elemento pierde el foco.
    // click - El usuario hace clic sobre el elemento.
    // dblclick - El usuario hace doble clic sobre el elemento.
    // focus - El elemento gana el foco.
    // keydown - El usuario presiona una tecla.
    // keypress - El usuario presiona una tecla y la mantiene pulsada.
    // keyup - El usuario libera la tecla.
    // load - El documento termina su carga.
    // mousedown - El usuario presiona el botón del ratón en un elemento.
    // mousemove - El usuario mueve el puntero del ratón sobre un elemento.
    // mouseout - El usuario mueve el puntero fuera de un elemento.
    // mouseover - El usuario mantiene el puntero sobre un elemento.
    // mouseup - El usuario libera el botón pulsado del ratón sobre un elemento.
    // unload - El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.
    // Más en: https://www.w3schools.com/jsref/dom_obj_event.asp

// Puede aplicarse más de una función a un mismo evento:

// document.getElementById("myBtn").addEventListener("click", myFunction);
// document.getElementById("myBtn").addEventListener("click", someOtherFunction);

// Puede aplicarse diferentes tipos de evento a un mismo elemento:

// document.getElementById("myBtn").addEventListener("mouseover", myFunction);
// document.getElementById("myBtn").addEventListener("click", someOtherFunction);
// document.getElementById("myBtn").addEventListener("mouseout", someOtherFunction);



//------------------------------
// Ejemplos en la página


// agregar elementos a una lista
function agregarTarea() {
    let tareaNueva = document.querySelector("#tarea-nueva").value; //trim() elimina espacios delante y detras
    let listaTareas = document.querySelector("#lista-tareas");
    console.log(tareaNueva);
    console.log(listaTareas.innerHTML);

    let elemLista = document.createElement("li");
    console.log(elemLista);
    elemLista.innerHTML = tareaNueva;
    listaTareas.appendChild(elemLista);
    document.querySelector("#tarea-nueva").value = "";
}



//cambio color del texto
let colorTexto = document.querySelector("#color-texto");
let parrafos = document.querySelector("p");

function cambiarColorTexto() {
    parrafos.style.color = colorTexto.value;
}

colorTexto.addEventListener("input", cambiarColorTexto);


// Funcion para cambiar el color del texto de las tareas según los input checkbox
let opcion1 = document.querySelector("#opcion1");
let opcion2 = document.getElementById("opcion2");
opcion1.addEventListener('change', cambiarColorTareas);
opcion2.addEventListener('change', cambiarColorTareas);

function cambiarColorTareas() {
    const tareas = document.querySelectorAll('#lista-tareas li');

    // Bucle - forEach
    tareas.forEach(tarea => {
        if (opcion1.checked) {
            tarea.style.color = 'red';  // Cambia a rojo si la opción 1 está seleccionada
        } else if (opcion2.checked) {
            tarea.style.color = 'blue';  // Cambia a azul si la opción 2 está seleccionada
        } else {
            tarea.style.color = '';  // Vuelve al color original si ninguna opción está seleccionada
        }
    });
}





// Funcion para añadir tareas añadiendo control con if
// function añadirTarea() {
//     const tareaInput = document.getElementById('tarea-nueva');
//     const nuevaTarea = tareaInput.value.trim();

//     if (nuevaTarea !== "") {
//         const ul = document.getElementById('tareas-lista');
//         const li = document.createElement('li');
//         li.textContent = nuevaTarea;
//         ul.appendChild(li);
//         tareaInput.value = '';  // Limpiar el input después de añadir la tarea
//     }
// }


