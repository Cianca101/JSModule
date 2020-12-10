const DIVIDE = prompt(`Ingrese su npumero`)

if(DIVIDE / 2 === 0 || DIVIDE / 2 === 2 || DIVIDE / 2 === 4 || DIVIDE / 2 === 6 || DIVIDE / 2 === 8){
    console.log("Numero par")
} else if (DIVIDE / 2 === 1 || DIVIDE / 2 === 3 || DIVIDE / 2 === 5 || DIVIDE / 2 === 7 || DIVIDE / 2 === 9) {
    console.log("Numero impar")
} else {
    console.log("Numero no valido")
}