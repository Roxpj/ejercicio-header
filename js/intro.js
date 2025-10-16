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

//for ( inicio ;  condición ;  modificador ) { instrucciones}
for (let index = 0; index < elemtosLista.length; index++) {
    const element = elemtosLista[index];
}

// forEach
array.forEach(element => {

});


// EVENTOS
// element.addEventListener("", )
// click, mousedown, mouseup, keypress 



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



// string.lenght //elementos array, numero char string
// charAt() // selecciona caracter en una posicion del string
// indexOf  
// parseInt()
// parseFloat()


// document.getElementById('color-texto').addEventListener('input', function (event) {
//     let colorSeleccionado = event.target.value;
//     document.querySelector('article').style.color = colorSeleccionado;
// });


// document.querySelector("h1").classList.add("titulo-seccion")
// document.querySelector("h1").style.color


//createElement("") //crear elem html
//appendChild() //añadir hijos a un elemento
//.classList    .add  .remove .toggle
//removeAttribute() .setAttribute()
//innerHTML = `
//textContent





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


