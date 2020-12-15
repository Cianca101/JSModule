////////// ARROW FUNCTIONS ////////////

//Años Caninos con Return
const arrowDogo = (Dog_Name, Dog_Age) => {
    return age = Dog_Age * 7
}

//Area y Circunferencia de un circulo
const arrowArea = (circle_radius) => {
    return area = (circle_radius * circle_radius) * 3.14161
}

const arrowCircunf = (circle_radius) => {
    return circunf = (circle_radius * 2) * 3.14161
}

//Conversor Celsius a Fahrenheit y viceversa
const temp = (temperature, temp_system) =>{
    if(temp_system === "C"){
        return (temperature * 9) / 5 + 32
    } else {
        return ((grade - 32) * 5) / 9
    }
}

//Factorial de un número
const factorial = (number) => {
    let factorial_number = 1
    for(let counter = 1; counter <= number; counter += 1){
        factorial_number *= counter
    }
    return factorial_number
}