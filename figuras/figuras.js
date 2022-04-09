// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}


//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulo");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log(
//    "Los lados del triángulo miden: "
//    + ladoTriangulo1
//    + "cm, "
//    + ladoTriangulo2
//    + "cm, "
//    + baseTriangulo
//    + "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: "
//+ alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perímetro del Triángulo es de: " + perimetroTriangulo + "cm");


function areaTriangulo(base, altura) { // JS siempre ejcuta primero las operaciones que estan dentro del parentesis por eso queda / 2 afuera para que no se ejecute primero. 
        return (base * altura) / 2
}
//console.log("El área del Triángulo es de: " + areaTriangulo + "cm^2");
console.groupEnd();

// Código de la circulo
console.group("Círculos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");


// Diámetro
function diametroCirculo(radio) {
    return radio * 2
}

//const diametroCirculo = radioCirculo * 2; // el diámetro se halla multiplicando el radio por 2.
//console.log("El diámetro del circulo es: " + diametroCirculo + "cm");


// PI
//const PI = Math.PI; // con Math.PI se obtiene el valor de PI que es 3.1415....
//console.log("PI es: " + PI);


// Circunferencia
 function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio);
     return diametro * Math.PI;
}

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");


// Área
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

//const areaCirculo = (radioCirculo * radioCirculo) * PI
//console.log("El área del circulo es: " + areaCirculo + "cm^2");


console.groupEnd();
//Dato curioso de la clase: cuando declaramos la funcion los datos dentro de los parentesis se llaman PARAMETROS, cuando llamamos a ejecutarla se llaman ARGUMENTOS.

// triangulo isósceles 
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase){
    if(trianguloGrandeLadoA != trianguloGrandeLadoB){
        console.error("Los lados a y b no son iguales");
    }else{
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;

        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBaseCuadrado * trianguloPequenoLadoBCuadrado;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

// Aquí interactuamos con el HTML
// cuadrado
function calcularPerimetroCuadrado() {
   const input = document.getElementById("InputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
 
    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);

    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);
}

// Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del circulo es: " + perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert("El área del circulo es: " + area);
} 