// Ejercicio 1 
// console.log('dom')

// let title = document.createElement("h1")
// let texto = document.createTextNode('Soy un titulo')
// title.appendChild(texto)
// document.getElementById('caja').appendChild(title)

// let ul = document.createElement("ul")
// let li = document.createElement("li")
// let ahref = document.createElement("a")
// let item1 = document.createTextNode('Item 1')
// ul.appendChild(li)
// li.appendChild(ahref)
// ahref.appendChild(item1)
// document.getElementById('caja').appendChild(ul)

// let ul2 = document.createElement("ul")
// let li2 = document.createElement("li")
// let ahref2 = document.createElement("a")
// let item2 = document.createTextNode('Item 2')
// ul2.appendChild(li2)
// li2.appendChild(ahref2)
// ahref2.appendChild(item2)
// document.getElementById('caja2').appendChild(ul2)

// Tarea
// let ulElement = ''
// for (let i = 1; i<= 9; i++){
//     ulElement += `<li>
//                     <a href="">item ${i}</a>
//                 </li>`
// }
// console.log(ulElement)
// let box = document.getElementById('caja2')
// box.innerHTML = ulElement

// ejercicio clase
const addElements = (selector,numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index < numberElements ) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(''+selector).innerHTML = listKoders
}
const kodersArr = ['ale','oscar','ruben', 'brian']
// addElements('#lista', 10, kodersArr)

const filterKoders = (letter) => {
    let filtrados = kodersArr.filter((koder) => {
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    addElements('#lista', filtrados.length, filtrados)
}

// Tarea 2
// onchange() lo tiene que disparar el selector
// document.getElementById('Orden').value
// 1 funcion
// 1 método
// usar HTML