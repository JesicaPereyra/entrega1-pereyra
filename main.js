let usuario = prompt (ingrese su usuario)
let contraseña = prompt (ingrese su contraseña)

while (usuario != "Jesica.P" && contraseña != "1234"){
    alert (usuario o contraseña incorrecta)
}

let elección = prompt (¿Qué te gustaría comprar?)

switch (elección){
    case "fotos" :
        alert (genial! tenemos. Comunicate asi terminamos de coordinar);
        break;

    case "cuadros" :
        alert (Lo siento, no tenemos en stock);
        break;

    case "albumes" :
        alert (Buena elección! elegi 40 fotos y envianos);
        break;
    default:
        alert (opción no válida);
        confirm (¿Quiere seguir comprando?)
        break;
}

function 