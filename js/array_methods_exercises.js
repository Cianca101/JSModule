// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]
function maxNumber (arrayNumber) {
    let max = 0
    arrayNumber.forEach(currentElement => {
        if(currentElement >= max){
            max = currentElement
        }
    })
    return max
}

// ejercicio 2 .map()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']
function numArray (arrayNumber){
    let newArray = []
    arrayNumber.map(currentElement => {
        newArray.push(`${currentElement}`)
    })
    return newArray
}

// ejercicio 3 .map()
// función
// capitalizar todos los elementos que sean strings de un array
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo','123]


// ejercicio 4 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos que no estan duplicados
// [1,2,4,2,5,4]
// -> [1,5]
function duplicated (arrayNumber) {
    let arrayDuplicated = []
    arrayNumber.filter(
        if(currentElement === arrayNumber.forEach() ){
            arrayDuplicated.push(currentElement)
        }
    )
    return arrayDuplicated
}

// ejercicio 5 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos duplicados
// [1,2,4,2,5,4]
// -> [2,4]

// ejercicio 6 .filter()
//  funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// [1990, 2000, 2001, 2020]
// -> [2000,2020]