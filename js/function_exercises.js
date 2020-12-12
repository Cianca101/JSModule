// 1. weight in the moon

function weightMoon(){
    let weight_earth = prompt("Introduce tu peso")
    let weight_moon = (parseFloat(weight_earth)/9.81)*1.622
    alert (`Tu peso en la luna es: ${weight_moon} kg`)
    console.log(`Tu peso en la luna es: ${weight_moon} kg`)
}
function weightMoon2(weight_earth2){
    let weight_moon2 = (parseFloat(weight_earth2)/9.81)*1.622
    console.log(`Tu peso en la luna es: ${weight_moon2} kg`)
}

// 2. Grades

function grades(GRADE){
    
    if(GRADE>= 90){
        console.log('A')
    }
    else if(GRADE>=80 && GRADE<90){
        console.log('B')
    }
    else if (GRADE>=70 && GRADE<80){
        console.log('C')
    }
    else if (GRADE>=60 && GRADE<70){
        console.log('D')
    }
    else if (GRADE>=50 && GRADE<60){
        console.log('E')
    }
    else{
        console.log('F')
    }
}


// 3. numero entre 1 y 100  divisible entre 2 y 11 

function divisible2and11(num){
    

    if(num>=1 && num<=100){
        if (num % 2 ===0 && num % 11 ===0){
            console.log('El número es divisible entre 2 y 11')
        }
        else{
            console.log('El número no es divisible entre 2 y 11')
        }
    }
    else{
        let num = parseInt(prompt('Número inválido debes ingresa un numero entre 1 y 100'))
    }
}

// 4. even or odd
function evenOdd(num){
    if(num>=1 && num<=100){
        if (num % 2 ===0){
            console.log('El número es par')
        }
        else{
            console.log('El número es impar')
        }
    }
    else{
        let num = parseInt(prompt('Número inválido debes ingresa un numero entre 1 y 100'))
    }

}

// 5. largest number 
function largestNumber(number_one,number_two){
    
if (number_one > number_two) {
    // Imprimir en consola el NUMBER_ONE
    console.log(`EL ${number_one} es el mayor`)
}else if(number_one === NUMBER_TWO){
    console.log(`EL ${number_two} y el ${number_one} son iguales`)
}else{
    // Imprimir el NUMER_TWO
    console.log(`EL ${number_two} es el mayor`)
}
}

// 6. vowels
function vowels(str2){

    let vowels=0

    for(let i=0; i<str2.length; i++){
        if(str2[i]==='a' || str2[i]==='e' || str2[i]==='i' || str2[i]==='o' || str2[i]==='u' ){
            vowels++
        }
    }
    console.log(str2)
    console.log(`Number of vowels= ${vowels}`)
}

// 7. spaces in a string
function spaces(){
    let countSpace = 0
    for(let i=0;i<stringSpaces-length;i++){
        if (stringSpaces[i] === ' '){
            countSpace ++;
        }
    }
    console.log(countSpace)
    console.log(stringSpaces.split(" ").length-1)
}

// 8. reverse
function reverse(stringtoreverse){



let stringreversed=''

for(let i=stringtoreverse.length-1;i>=0;i--){
    stringreversed += stringtoreverse[i]

}

console.log(stringreversed)
}

// 9. Multiplication table 8 reverse

function multiplication8reverse(){
for(let i=10 ; i>=1 ; i--){
    console.log(`${i} x 8 = ${i*8}`)
}
}