/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

    //Aqui esta tu comentario pay

// 2. Escribe un comentario en varias líneas

    /*
        Paso 1
        Paso 2
        ... Multinea pay
     */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    // #1 String
    let typeString = "Hola"
    
    // #2 number
    let randomNumber = 5
    
    // #4 booleanos
    console.log(1>0)
    // #5 undefined

    let miUndefined 
    
    // #6 null
    let miPaciencia = null
    
    // #7 bigInt
    let bigNumber = 24896214586321456n
    
    // #8 symbol
    let mySymbol = Symbol("simbolo")
    
// 4. Imprime por consola el valor de todas las variables
    console.log(typeString)
    console.log(randomNumber)
    console.log(miUndefined)
    console.log(miPaciencia)
    console.log(bigNumber)
    console.log(typeof(mySymbol))
    console.log(mySymbol)
// 5. Imprime por consola el tipo de todas las variables
    console.log(typeof(typeString))
    console.log(typeof(randomNumber))
    console.log(typeof(miUndefined))
    console.log(typeof(miPaciencia))
    console.log(typeof(bigNumber))
    console.log(typeof(mySymbol))
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    typeString = "Nueva cadena"
    console.log(typeString)
    randomNumber = 10
    console.log(randomNumber)
    miUndefined = 3
    console.log(miUndefined)
    miPaciencia = 0
    console.log(miPaciencia)
    bigNumber = 24563214786215n
    console.log(bigNumber)
    mySymbol = Symbol("nuevoSimbolo")
    console.log(mySymbol)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
    let num = Number(typeString)
    console.log(num)
    let str = String(randomNumber)
    console.log(str)
    let biggg = bigNumber.toString()
    console.log(typeof(biggg))
    console.log(biggg)
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nuevoString = "Que tranza"
const nuevoNumber = 5
const miNuevoUndefined = undefined
const miNuevoNull = null
const miBigNumber = 35632456n
const miNuevoSymbol = Symbol("ConstSymbol")

// 9. A continuación, modifica los valores de las constantes

nuevoString === "que onda"
console.log(nuevoString)

//Las constantes no se pueden modificar despues de su inicalización

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser

// ----> Error: Assignment to constant variable.