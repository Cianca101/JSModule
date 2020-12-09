console.log("Peso en la Luna")

let weight_earth = prompt("Cual es tu peso en Kg en la tierra?")

let weight_moon = (parseFloat(weight_earth)/9.81) * 1.622

alert("Tu peso en la Luna es: " + weight_moon + "Kg")
console.log("Tu peso en la Luna es: ", weight_moon)
