const MONTH = prompt(`Ingrese número de mes (1 a 12)`)

if (MONTH === 1 || MONTH === 3 || MONTH === 5 ||
    MONTH === 7 || MONTH === 8 || MONTH === 10 ||
    MONTH === 12) 
    {
    console.log(`El mes tiene 31 días`)
} else if (MONTH === 4 || MONTH === 6 ||
            MONTH === 9 || MONTH === 11) 
            {
    console.log(`El mes tiene 30 días`)
} else if (MONTH === 2) {
    console.log(`El mes tiene 28 días`)
} else {
    console.log(`El mes es Inválido`)
}