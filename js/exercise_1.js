const SCORE = prompt(`Ingrese su calificación (0 a 100)`)

if (SCORE >= 90 && SCORE <=100) {
    console.log(`Tu calificación es A`)
} else if (80 <= SCORE && SCORE <= 89) {
    console.log(`Tu calificación es B`)
} else if (70 <= SCORE && SCORE <= 79) {
    console.log(`Tu calificación es C`)
} else if (60 <= SCORE && SCORE <= 69) {
    console.log(`Tu calificación es D`)
} else if (50 <= SCORE && SCORE <= 59) {
    console.log(`Tu calificación es E`)
} else if (SCORE <= 49 && SCORE <=0) {
    console.log(`Tu calificación es F`)
} else {
    console.log(`Calificación no valida, ingrese nuevamente su calificación`)
    const SCORE = prompt(`Ingrese su calificación (0 a 100)`)
} 