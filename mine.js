/*Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida
 marca de comida rápida cuanto le costará en función del topping que elija.

El helado sin topping cuesta 1.90.
El topping de oreo cuesta 1.
El topping de KitKat cuesta 1.50.
El topping de brownie cuesta 0.75.
El topping de lacasitos cuesta 0.95.
En caso de no disponer del topping solicitado por el usuario el programa escribirá por 
pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado 
(o ninguno).*/

class Pedido {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
const pedidos = [];
pedidos.push(new Pedido("sin topping", 1.90));
pedidos.push(new Pedido("oreo", 1));
pedidos.push(new Pedido("kitkat", 1.50));
pedidos.push(new Pedido("brownie", 0.75));
pedidos.push(new Pedido("lacasitos", 0.95));

console.log(pedidos);

let pedido = prompt("¿Qué topping quiere?").toLowerCase();

switch(pedido){
    case "sin topping":
        alert("Su helado cuesta: $" + precio);
        break;
    case "oreo":
        alert("Su helado cuesta: $" + precio);
        break;
    case "kitkat":
        alert("Su helado cuesta: $" + precio);
        break;
    case "brownie":
        alert("Su helado cuesta: $" + precio);
        break;
    case "lacasitos":
        alert("Su helado cuesta: $" + precio);
        break;
    default:
        alert("no tenemos este topping, lo sentimos.");

}
