// // Imprimir en consola la tabla del 7
// // 7 x 1 = 7

// let i = 7
// let contador
// for(contador = 1; contador <=10; contador += 1){
//     let result = i * contador
//     console.log(result)
// }

// // imprimir en consola los múltiplos de 3 y 7  que se encuentran 
// // entre el 1 y el 100
// // 3,6,7,9,12,14,15....

// let i_21
// let i_22
// let contador_2
// for(contador_2 = 1; contador_2 <=100; contador_2 += 1){
//     i_21 = contador_2 % 3
//     i_22 = contador_2 % 7
//     if(i_21 === 0 || i_22 === 0){
//         console.log(contador_2)
//     }
// }

// // imprimir en consola la cantidad de espacios que se 
// // encuentran en una cadena de texto
// // “en un lugar de la mancha” -> 5

// let chain_text = prompt("Cadena de Texto:")
// let i_31 = chain_text.split(" ")
// let i_32 = i_31.length-1
// console.log(i_32)

// // imprimir en consola la cantidad de vocales que se 
// // encuentran en una cadena de texto
// // “Hola mundo” -> 4

// let vocales = 0
// let i_41
// for (i_41 = 0 ; i_41<chain_text.length ; i_41++){
//     if(chain_text[i_41] === "a" || chain_text[i_41] === "e" ||
//         chain_text[i_41] === "i" || chain_text[i_41] === "o" ||
//         chain_text[i_41] === "u"){
//             vocales++
//     }
// }
// console.log(chain_text)
// console.log(`Numero de vocales= ${vocales}`)


// // Imprimir en consola la tabla del 8 en Reversa

// let i_5 = 8
// let contador5
// for(contador5 = 10; contador5 >=1; contador5 -= 1){
//     let result5 = i_5 * contador5
//     console.log(result5)
// }


// Dado un String
// "reverse"
// invertir el orden 
// e imprimirlo

// const STRING_ORIGINAL = "hola mundo"
// let STRING_REVERSE
// for (let i = STRING_ORIGINAL.length -1; i >= 0; i--){
//     STRING_REVERSE += STRING_ORIGINAL[i]
// }
// console.log(STRING_REVERSE)


//////////////////////////////////////////////////////////

// Tabla del 7 con While

// let counter = 1
// while(counter<=10){
//     console.log(`7 x ${counter} = ${7 * counter} `)
//     counter += 1
// }


//Pares de 1 a 100 con while
// let i
// let counter=1
// while(counter <= 100){
//     i = counter % 2
//     if(i === 0){
//         console.log(counter)
//     }
//     counter++
// }


// // Invertir String con while
// let string_original = "hola mundo"
// let string_reverse = ""
// let counter = string_original.length - 1
// while(counter >= 0){
//     string_reverse += string_original[counter]
//     counter--
// }
// console.log(string_reverse)

