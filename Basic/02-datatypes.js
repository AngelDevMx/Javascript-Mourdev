//TIPOS DE DATOS PRIMITIVOS
//¿Que son los datos primitivos? 
//Datos basicos inmutables dentro del nucleo de javascript

//String cadena de textos
let myName= "Luis Angel"
let alias= "El angel"
let email = "angeldevmx27@gmail.com"

//Numeros
let age= 30 //entero
let height = 1.70 //decimal

//Booleanos

let ganasDePistear = true
let dinero = false

//Undefined : se declara la variable pero no tiene ningun valor asociado
let undefinedVAlue
console.log(undefinedVAlue)

//null : se declara la variable con un valor asociado nulo, (ausencia de valor intencionalemnte)
let nullValue = null

//Symbol: valores unicos que pueden ser utilizados como identificadores de propiedades, evita colisiones entre otras propiedades

let mySymbol = Symbol("mysymbol")

//BigInt : Se crea cuando number no es capaz de alojar un numero enorme y se sale de rango
//Existen dos formas de representarlo
let myBigInt = BigInt(78632148963289658625471852963) //Forma 1
let myBigInt2 = 7521456324586321486214856218962n //Forma 2


//Mostramos los tipos de datos
console.log(typeof(myName))
console.log(typeof(myBigInt))
console.log(typeof(undefinedVAlue))

// aunque nullValue sea null cuando aplicamos un typeofy se convierte en objeto
// cuando null se aplica a una variable se vuelve a un objeto
console.log(typeof(nullValue))
console.log(typeof(mySymbol))