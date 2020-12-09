const WEATHER = prompt("Como esta el clima? (Soleado, Lluvioso, Nevando, Nublado, ¿?")

// if (WEATHER == "soleado"){
//     console.log(`El día aquí tambien fué ${WEATHER}, deberías tomar agua`)
// } else if(WEATHER == "lluvioso"){
//     console.log(`El día aquí tambien fué ${WEATHER}, deberías usar sombrilla`)
// } else if (WEATHER == "nevando"){
//     console.log(`El día aquí no fué ${WEATHER}, deberías abrigarte`)
// } else if (WEATHER == "nublado"){
//     console.log(`El día aquí tambien fué ${WEATHER}, deberías tomar café`)
// } else {
//     const WEATHER_TWO = prompt("No? entonces como estuvo el clima?")
//     console.log(WEATHER_TWO)
// }

switch(WEATHER){
    case `soleado`:
        console.log(`El día aquí tambien fué ${WEATHER}, deberías tomar agua`)
        break
    case `lluvioso`:
        console.log(`El día aquí tambien fué ${WEATHER}, deberías usar sombrilla`)
        break
    case `nevando`:
        console.log(`El día aquí no fué ${WEATHER}, deberías abrigarte`)
        break
    case `nublado`:
        console.log(`El día aquí tambien fué ${WEATHER}, deberías tomar café`)
        break
    default:
        const WEATHER_TWO = prompt("No? entonces como estuvo el clima?")
        console.log(WEATHER_TWO)
    } 