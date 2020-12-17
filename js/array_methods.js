//Tablas de multiplicar desde Array
const multArray = [3,5,9]
multArray.forEach(currentElement => {
    for(let i=1; i<=10; i++){
        console.log(`${currentElement} x ${i} = ${currentElement * i}`)
    }
})

// function x2
// [1,2,3]
// -> [2,4,6]
// forEach
function doble (arrayNumber) {
    let newArray = []
    arrayNumber.forEach(currentElement => {
        doubler = currentElement * 2
        newArray.push(doubler)
    })
    return newArray
}

// function pares
// [1,2,3,4]
// -> [2,4]
// forEach
function pares(arrayNumber){
    let newArray = []
    arrayNumber.forEach(currentElement => {
        if(currentElement%2 === 0){
            newArray.push(currentElement)
        }
    })
    return newArray
}

// function
// ['hola', 'mundo']
// -> ['ha', 'mo']
// forEach
function inicioYfinal(arrayWords){
    let newArray = []
    arrayWords.forEach(currentElement => {
        newArray.push(currentElement.slice(0,1) + currentElement.slice(-1))
    })
    return newArray
}