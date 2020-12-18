//Function Reduce
function reduce (arrayReduce) {
    arrayReduce.reduce((total, currentValue) => {
        let suma = total + currentValue
        console.log(total, currentValue)
        return suma
    }, 10)
}

// Search Ocurrence
const arrayOcurrence = ["a", "b", "c", "c", "d"]
arrayOcurrence.reduce((total, currentValue) => {
    let suma = total + (currentValue === 'c')
    return suma
} ,0)

// En algun lugar de la mancha
const wordArray = ["en", "algun", "lugar", "de", "la", "mancha"]
wordArray.reduce((total, currentValue) => {
    let suma = total + " " + currentValue 
    return suma
}, "")
