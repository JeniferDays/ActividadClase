// comentarios en javascript
// ESTA ES LA FORMA DE COMENTAR EN JS//     
// CONSOLE.LOG -> la forma de enviar mensajes a la consola del navegador 

console.log ("HOLA, DESARROLADORES Y PSICOLOGOS")
console.log("Hola bb ")

function suma{};

suma(5+8);


//CONCEPTOS BASICOS DE JAVASCRIPT

// 1. TIPOS DE VARIABLES 
// 2. MANEJO DEL DOM
// 3. CONDICIONALES
// 4. CICLOS


// LAS VARIABLES EN JS -> piensen en variables como contenedores de informacion 

// Hay 3 tipos de variables 

//VAR-> Un tipo de variables que ya no se usa (no la vamos a utlilizar)

// LET -> Es una variable que cambia en el tiempo 
// CONS -> una variable que no piuede cambiar en el tiempo

// TIPO DE DATOS O INFORMACION PODEMOS ALMACENAR 
// el = no es comparativo, me sirve para asignar valores

// Numericos

let numeros = 7;

// CADENA DE CARACTERES -> texto -> string ( asi se conoce en programacion)
// el TEXTO SIEMPRE debe estar dentro de comillas

let texto= "hola mundo "

// BOOLEANOS -> Un dato que puede ser verdadero o falso.
let esVerdadero = true // true= verdad
let es Falso = false // false = falso 

// ARREGLOS -> Arrays (en programacion) -> me permiten almacenar varios datos al mismo tipo de una sola variable
let arreglosNombres = [ "luisa", "emanuel", "paula", "lucila",]; 

//Objetos-> literalmente "una representacion de elementos de la vida real pero en nuestro codigo"

// -> atributos -> caracteristicas de ese objeto
// -> metodos -> acciones que pueden hacer los objetos

// (),{},[]
// [] -> son para declarar arreglos
// {} -> para declarar objetos
// () -> para invocar acciones 


const celular = {
    color: "blanco",
    modelo: "galaxy a7",
    tamaño: "350 x 800",
    ancho: 790,
    //el metodo -> un mensaje que me indica (representa)la accion
    enviarMensajes: function(){
// entre los corchetes al lado de los parentesis yo establezco la accion a realizar 
console.log("mensaje enviado");


// EJEMPLOS DE FUNCIONES
// funciones -> acciones que ud puede tener en sus sitios

Function buscarObjeto(){

    console.log("le muestra lo que esta buscando")
}

function filtrarInformacion(){
    console.log("me muestra solo informacion de la depresion")
}

}
}


