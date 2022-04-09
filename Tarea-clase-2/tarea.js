// 1 Responde las siguientes preguntas:

// º La variable es una memoria donde se almacena información.

// º La variable se declara para reservar su espacio de memoria ejemplo:
          var edad; 
// Inicializar es cuando guardo infomación a esa variable ejemplo:
          var edad = 17;

// º Sumar normal como una operación matematica // Y concatenaer es cuando se unen dos textos para formar un string"".

// º Signo + // "".

// 2  // 3

var miNombre = "Sneyder";
var miApellido = "Rodríguez";
var nombreUsuario = "Sneyder GlooGluu";
var edad = 17;
var miCorreo = "sneyder.h.rodriguez@gmail.com";
var mayorEdad = "No";
var dineroAhorrado = 500;
var deudas = null;


// 4
 var fullNombre = `${miNombre}, ${miApellido}`;
 var dinerReal = dineroAhorrado - deudas;

 // FUNCIONES 

// 1

 // º Es un bloque de codigo que hace una serie de procedimientos.

 // º Me sirve para que no se repitan tantas lineas de codigo en mi proyecto.

 // º Parametro es una variable que esta deifinida en una función, y argumento son los parametros/datos que se pasan a una función.

 // 2

 function laFuncion(name, lastname, nickname) {
       var fullName = `${name}${lastname} `;
       return `Mi nombre es: ${fullName}, pero prefiero que me digan ${nickname}`;
 }
 console.log(laFuncion("Juan David", "Castro Gallego", "juandc"));

 // Condicionales 

 // º Son un grupo de instrucciones que se ejecutan según el resultado de una evaluacion.
 // º if, else if, switch y terniario.
 // º Sí.

 // 2 else if

 var tipoDeSuscripción = "Basic"

if(tipoDeSuscripción === "Free") {
     console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripción === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripción === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi duranye un año");
} else if(tipoDeSuscripción === "ExpertPlus") {
    console.log("Tú y alguien más puenden tomar TODOS los cursos de Platzi durante un año");
}

// if,else

var tipoDeSuscripción = "Basic";

if(tipoDeSuscripción === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else {
    if(tipoDeSuscripción === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
 else {
    if(tipoDeSuscripción === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi duranye un año");
    }
else {
     if(tipoDeSuscripción === "ExpertPlus") {
         console.log("Tú y alguien más puendes tomar TODOS los cursos de Platzi durante un año");
     }
  }  
 }
}

// CICLOS 

// º Un bloque de codigo que se repite "n" veces.

// º for,for of,for in,while,do-while.

// º Un ciclo que nunca se detiene, y se puede apagar el ordenador por exceso de memoria en el navegador.

// Sí.

var i = 0;
while( i < 5 ) {
    console.log("El valor de i es: " + i);
    i++;
}

//

var i = 10;
while( i >= 2 ) {
    console.log("El valor de i: " + i);
    i--;
}

// 

var respuesta = 0;
do {
    respuesta = prompt("¿Cual es el resultado de 2 + 2?")
    respuesta *= 1;
} while (!(respuesta === 4)) {
    console.log("Felicidades la respuesta es 4");
}

// Lista 

// º Un conjunto de valores del mismo tipo almacenados de una sola variable.

// º Un objeto es una colección de propiedades.

// º Su uso depende de la nesesidad del problema.

// º Si se puede mezclar.

// Ultimo:

// 2º

const unaFuncion = (array) => {
         console.log(array[0]);
};

// punto 3º

var frutas = ["Manzana", "Pera", "Fresa"];
const unaFuncion = (array) => {
    array.forEach((elem) => {
       console.log(elem);    
    });
};

unaFuncion(frutas);

// Punto 4º

var persona = {
    nombre: "Sneyder",
    apellido: "Rodríguez",
    edad: 17
}
const unaFuncion = (object) => {
    Object.values(object).forEach((elem) => {
        console.log(elem);
    });
};

unaFuncion(persona);