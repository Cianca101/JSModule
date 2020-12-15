////////// FUNCIONES CON RETURN ////////////

//Años Caninos con Return
function dogo (Dog_Name = "Fido", Dog_Age = 6){
    const age = Dog_Age * 7
    return age
}

//Area y Circunferencia de un circulo
function area (circle_radius = 1){
    const area = (circle_radius * circle_radius) * 3.14161
    return area
}

function circunferencia (circle_radius = 1){
    const circunf = circle_radius * 2 * 3.1416
    return circunf
}

//Conversor Celsius a Fahrenheit y viceversa
function temp(temperature = 100, temp_system = "C"){
    if(temp_system === "C"){
        return = (temperature*9) / 5 + 32
    } else {
        return = ((grade - 32) * 5) / 9
    }
}

//Factorial de un número
function factorial (number){
    let factorial_number = 1
    for(let counter = 1; counter <= number; counter += 1){
        factorial_number *= counter
    }
    return factorial_number
}