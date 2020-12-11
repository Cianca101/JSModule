// Imprimir en consola la tabla del 7
// 7 x 1 = 7

let i = 7
let contador
for(contador = 1; contador <=10; contador += 1){
    let result = i * contador
    console.log(result)
}

// imprimir en consola los múltiplos de 3 y 7  que se encuentran 
// entre el 1 y el 100
// 3,6,7,9,12,14,15....

let i_21
let i_22
let contador_2
for(contador_2 = 1; contador_2 <=100; contador_2 += 1){
    i_21 = contador_2 % 3
    i_22 = contador_2 % 7
    if(i_21 === 0 || i_22 === 0){
        console.log(contador_2)
    }
}

// imprimir en consola la cantidad de espacios que se 
// encuentran en una cadena de texto
// “en un lugar de la mancha” -> 5

let chain_text = prompt("Cadena de Texto:")
let i_3 = chain_text.


// imprimir en consola la cantidad de vocales que se 
// encuentran en una cadena de texto
// “Hola mundo” -> 4



