//Años Caninos
function dogo (Dog_Name = "Fido", Dog_Age = 6){
    console.log(`${Dog_Name} tiene ${Dog_Age * 7} años caninos`)
}

//Area y Circunferencia de un circulo
function circle (circle_radius = 1){
    console.log(`El área del circulo es ${(circle_radius * circle_radius) * 3.14161}`)
    console.log(`La circunferencia del circulo es ${circle_radius * 2 * 3.1416}`)
}

//Conversor Celsius a Fahrenheit y viceversa
function temp_converter(temperature = 100, temp_system = "C"){
    if(temp_system === "C"){
        console.log(`${temperature}°C equivalen 
        a ${(temperature * (9/5)) + 32}°F`)
    } else if (temp_system === "F"){
        console.log(`${temperature}°FF equivalen 
        a ${(temperature - 32) * (5/9)}°C`)
    } else {
        console.log(`Datos no válidos`)
    }
}

//Factorial de un número
function factorial (number = 10){
    let factorial_number = 1
    for(let counter = 1; counter <= number; counter += 1){
        factorial_number *= counter
    }
    console.log(`El factorial de ${number} es ${factorial_number}`)
}