/** 
 * ejercicio 1
    1. Asignar un string a una variable 
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/
let hello = "Hello World"
let hellonew = hello.length
console.log(hellonew)

/**
 * Ejercicio 2
 * Declarar 2 variables con strings y concatenarlos
 */
let hello_2 = "Hola"
let mundo = "Mundo"
let new_2 = mundo.concat(hello_2)
console.log(new_2)

/**
 * Ejercicio 3
 * Declarar un string de al menos 10 caracteres
 * imprimir en consola del 4 al 6 caracter
 */
let char = "characteres"
let new_3 = char.slice(4,6)
console.log(new_3)

/**
 * Ejercicio 4
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 */
let char_4 = "Hello World"
let new_4 = char_4.replace(" ", "-")
console.log(new_4)

/**
 * Ejercicio 5
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */

let char_5 = "hola koders"
let new_5 = char_5.toLocaleUpperCase()
console.log(new_5)

/**
 * Ejercicio 6
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 */

let email_user = "koders@gmail.com"
let new_res = email_user.replace("koders", "******")
console.log(new_res)

 /**
 * Ejercicio 8
 * Declarar un string de al menos 2 palabras
 * convertir ese string en un array
 * "Hola koders"
 *  ["hola", "koders"]
 */
let two_words = "dos palabras otra palabra"
let res_new = two_words.split(" ")
console.log(res_new)