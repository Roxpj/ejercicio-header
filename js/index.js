// let cajaColor = document.getElementById("cajaColor");

// function cambioColor() {
//     cajaColor.style.backgroundColor = 'green';
//     cajaColor.innerHTML = "<p>ups</p>";
// }
// function cambioColorUp() {
//     cajaColor.style.backgroundColor = 'red';
//     cajaColor.innerHTML = "<p>Hola</p>";
// }


function calcularEdad() {

    let anioNacimiento = document.getElementById("inputAnioNac").value;
    let anioActual = 2025;

    console.log(anioNacimiento); //control del valor anioNacimiento

    let edad = anioActual - anioNacimiento;

    let resultado = document.getElementById('resultado');

    // resultado.innerHTML = "<strong>Tu edad es: </strong> " + edad + " años. <br> <em> Ya estás mayor</em>";

    let mensajeEdad;
    if (edad > 30) {
        mensajeEdad = "Ya estás mayor.";
    } else if (edad < 18) {
        mensajeEdad = "Todavía eres menor de edad."
    } else if (edad >= 18 && edad <= 30) {
        mensajeEdad = "Ya eres mayor de edad."
    }

    // resultado.innerHTML = "<strong>Tu edad es: </strong> " + edad + " años. <br> <em>" + mensajeEdad + "</em>";
    resultado.innerHTML = `<strong>Tu edad es: </strong> ${edad} años.  <br> <em> ${mensajeEdad} </em>`

    console.log(edad);

}

