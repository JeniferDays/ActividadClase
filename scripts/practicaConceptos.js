// 1. SIEMPRE SE DEBE HACER ->  VERIFICAR QUE SI ESTE CONECTADO CON EL HTML

console.log("Hola soy la actividad de clase del 10/04/2023"); 

//2. traer los elementos que se necesitan de su html -> los que tienen id-> los elementos que me traiga deben estar en una variable -> debe ser constante



    // document -> me accede a mi html 
    //getElementById -> me trae un documento en particular por su identificador unico 
    //Dentro  de los parentesis debo poner el mismo ID que puse en mi HTML 
const edadInput = document.getElementById ("edadInput"); 
console.log(edadInput);