let usuario = prompt ("ingrese su usuario")
let contraseña = prompt ("ingrese su contraseña")

if ((usuario == "Jesica.P") && (contraseña == "1234")) {
    alert ("Puede ingresar")
} else {
    alert ("usuario o contraseña incorrecta")
}

function nombrar (){
    let nombre = prompt ("ingrese cómo le gustaría llamarse")
     alert ("Bienvenido/a "+ nombre)
}
nombrar ()

// Necesito poder interrumpir la continuidad en caso de que no sea el usuario o contraseña correcta, 
// porque si es incorrecto igual le pregunta que quiere comprar. 
// Nose si con lo que vimos lo puedo lograr


const productos = [
     "fotos","cuadros","álbumes","regalos especiales","decoración","novios","niños",
]
const catalogo = productos.join ("\n-")

let conocer = prompt ("¿Te gustaría conocer nuestro catálogo completo, si o no?")
while (conocer !== "si" && conocer !== "no"){
    alert ("respuesta incorrecta")
}
if (conocer == "si"){
    alert ("echa un vistazo a nuestro catálogo")
    alert ("-" + catalogo)
}else {
    alert ("Bueno, muchas gracias")
}

let elección = prompt ("¿Qué te gustaría comprar?")

switch (elección){
    case "fotos" :
        alert ("genial! tenemos. Comunicate asi terminamos de coordinar");
        break;

    case "cuadros" :
        alert ("Lo siento, no tenemos en stock");
        break;

    case "álbumes" :
        alert ("Buena elección! elegí 40 fotos y envianos");
        break;
    default:
        alert ("opción no válida");
        confirm ("¿Quiere seguir comprando?")
        break;
}

// Quiero que al salir opción no valida y despues de aceptar seguir comprando, que vuelva a aparecer 
//  ¿Qué te gustaría comprar? y su respectiva respuesta, con los ciclos no logré realizarlo, nose si se puede o con alguna otra herramienta.

