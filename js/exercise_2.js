const DIVIDE = prompt(`Ingrese su calificación (1 a 100)`)

if(DIVIDE % 2 === 0 && DIVIDE % 11 === 0){
    console.log("Numero divisible entre 2 y 11")
} else {
    console.log("Numero no divisible entre 2 y 11")
}