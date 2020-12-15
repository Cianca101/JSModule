/// ARRAYS ///

//Tablas de multiplicar desde Array
const multArray = [3,5,9]
for (let i=0; i < multArray.length; i++){
    for(let i2=1; i2<=10; i2++){
        console.log(`${multArray[i]} x ${i2} = ${multArray[i] * i2}`)
    }
}


// Imprimir en consola la suma de los elementos de mi Array
// [1,2,3,4] = 10
const sumArray = [1,2,3,4]
let sumatoria = 0
for(let n = 0 ; n < sumArray.length ; n++){
    sumatoria += sumArray[n]
}
console.log(sumatoria)