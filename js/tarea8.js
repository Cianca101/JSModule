// Ejercicio 1
// dado el siguiente array de objetos
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

let newUsers = {}
let fullName = users[0].firstName + ' ' + users[0].lastName
let role = users[0].role

newUsers[fullName] = role
console.log(newUsers)

const joinUsers = users.reduce((newObject, user) => {
    let fullName = user.firstName + ' ' + user.lastName
    newObject[fullName] = user.role
    return newObject
},{})

// obtener un nuevo objeto con esta estructura
//-> {
//   'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor'
//   }

// Ejercicio 2
//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role
const filterByRole = (arr, role) => {
    return arr.filter(user => {
        return user.role === role
    })
}


// ejercicio 3
// tomando el siguiente array de objetos
let persons = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
// obtener lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes
persons.reduce((acc, cv) => {
    if(person.voted === true){
        return acc + 1
    } else {
        return acc
    }
} , 0)

let averageAge = persons.reduce((acc, cv) => {
    return acc +cv.age
} ,0) / person.length
console.log(averageAge)


/// Sumar todo el Array
// total 31
let numbersReduce = [
    [1, 2 ,4],
    [1, 2, 8],
    [1, 9, 3]
]

const result = arr => {
    let total = 0
    total = arr.reduce((acc, cvalue) => {
        console.log(acc, cvalue)
        let toReduce = cvalue

        let result2 = toReduce.reduce((ac2, cv2) => {
            return ac2 + cv2
        }, 0)
        return acc + result2
    }, 0)
    return total
}
