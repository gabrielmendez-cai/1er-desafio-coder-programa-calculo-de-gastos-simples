// realizaremos la manera de calcular lo invertido en servicios y productos en una pagina, la cual tendra algun descuento en el mismo

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const divid = (a,b) => a / b;
const iva   =  (x)  => x * 0.21;

alert("bienvenido a continuacion podra simular su compra, solo ingrese los datos. muchas gracias")

let productoPrecio1  = parseInt(prompt("ingresar el precio de su producto 1"));
let productoPrecio2  = parseInt(prompt("ingresar el precio de su producto 2"));

let descuento        = parseInt(prompt("ingrsar descuento"));


let precioFinal      = resta(suma(suma(productoPrecio2,iva(productoPrecio2)),suma(productoPrecio1,iva (productoPrecio1))),descuento)

alert(precioFinal);

alert ("gracias por su compra")
