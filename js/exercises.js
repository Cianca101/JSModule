// function multiplicar
function multiplier_string (numeric_string){
    for(let i = 1; i <= numeric_string.length; i += 1){
        for( let m = 1; m <=10; m += 1){
            let result = numeric_string[i] * m
            console.log(`${m} x ${numeric_string[i]} = (${result}`)
        }
    }
}

// Palindromo
function palindrome (palindrome_string){
    const strng = palindrome_string.split(' ')
    let reversed = ' '

    for(let i = strng.length -1; i>=0; i--){
        reversed += strng[i]
    }
    console.log(reversed)
    if(strng === reversed){
        console.log('Es un palindromo')
    } else {
        console.log('No es un palindromo')
    }
}