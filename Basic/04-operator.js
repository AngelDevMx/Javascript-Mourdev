//Operadores

//Operadores aritméticos
console.log(5+10) //suma

let a = 3
let b = 2
console.log( a + b) //suma
console.log( a - b) //resta
console.log( a * b) //multiplicacion
console.log( a / b) //division
console.log( a % b) //modulo: el resto de la división
console.log( a ** b) //exponente
// Incremento
a++
console.log(a)
// Decremento
a--
console.log( a)


// Incrementos y decrementos pre y pos
let x = 1
let y = ++x
console.log(y)

let x1 = 1
let y1 = ++x1
let z1 = y++ + x1
console.log(z1)

// Operadores de asignación

let myVar = 2
console.log(myVar)
myVar += 2
// Es lo mismo que tener myVar  =  myVar + 2 
console.log(myVar)

//sirve para cualquier operacion artimetica
myVar -= 2
myVar *= 2
myVar /= 2
myVar %= 2
myVar **= 2

// Operadores de comparacion
// la comparacion siempre da un boolean

let q = 10
let w = 15
console.log(q > w)
console.log(q < w)
console.log(q >= w)
console.log(q <= w)
console.log(q == w )// Igualdad por valor
console.log(q != w)


//Identidad
console.log(q === w) // Igualdad por identidad (tipo y valor)
console.log(q !== w)

//Truthy values (valores verdaderos)

/*
    Todos los numeros positivos y negativos menos el cero
    Todas las cadenas de texto menos las vacias
    El boolean true
*/


// Falsy value (valores falsos)

/*
    0
    0n
    null
    undefined
    NaN
    El boolean false
    Cadenas de texto vacias
*/

//Operadores lógicos
// Se compara el valor booleano

//AND &&
// Con una sola condicion falsa el resultado sera FALSE
// Todas las condiciones tienen que ser true para tener como resultado TRUE
/*
    true && true //true
    true && false //false
    false && true //false
    false && false //false
*/

console.log(5>10 && 15>20)


//OR ||
// Si se cumple alguna condicion el resultado sera TRUE

/*
    true || true //true
    true || false //true
    false || true //true
    false || false //false
*/

//NOT !
//Invierte el valor a tru o false dependiendo el caso
console.log(!(true))
console.log(!(false))

//Operadores ternarios
//Sintaxis
// condicion ? valor_si_true : valor_si_false

const isRaining = true
isRaining ? console.log("Lloviendo") : console.log("Soleado")