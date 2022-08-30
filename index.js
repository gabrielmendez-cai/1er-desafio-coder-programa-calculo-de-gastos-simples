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


let cuotas = prompt("te gustaria pagar en cuotas? tenemos promo en 6")
if (cuotas === "si"){
alert ("dividimos en 6")
let cuotasPrecioFinal = divid(precioFinal,6);
alert (cuotasPrecioFinal + " pesos")
}else 
alert ("perfecto son " + precioFinal + " pesos")
;


//inicio de sesion de una pagina, se debera decidir si es usuario o quisiere entrar como invitado



let ingresoModo = prompt ("ingresas como usuario o invitado?");
if (ingresoModo.toLocaleLowerCase() === "usuario"){
    alert("debes registrarte")
}else{
    if(ingresoModo.toLocaleLowerCase ()=== "invitado")
  alert ("bienvenido invitado")
}



















