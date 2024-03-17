// referencia a uilizar, oara tener acceso al acmpo value
//value: campo donde voy a guardar los valores 

// Sintaxis

// EJEMPLO 1

localStorage.setItem('nombre', 'yoranny');
sessionStorage.setItem('nombre', 'dayana');

//si tenemos un objeto debemos realizar lo siguiente
 const producto={
    nombre:'Iphone xr',
    precio:100
 }


 //console.log(typeof producto);
// para ingresar el objero en el localstorage

const productoString  = JSON.stringify(producto)
console.log(producto)
console.log(productoString)
//en  caso de que sea un objeto
localStorage.setItem('producto', productoString)

// EJEMPLO 2

const meses = ['enero', 'febrero', 'marzo', 'abril'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);



// leer o consultar datos

const nombre = localStorage.getItem('nombre')
console.log(nombre);

// extraer / consulta de datos del localStorage

const pro = localStorage.getItem('producto');
// convercion de Sting a objetos
const proAObjeto = JSON.parse(pro)
console.log(proAObjeto);
//
const mesesArreglo = localStorage.getItem('meses');
// convercion de Sting a odjeto
const mesArray = JSON.parse(mesesArreglo)
console.log(mesArray)
