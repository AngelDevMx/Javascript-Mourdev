// Strings (cadenas de texto)

// Concatenación

let myName = "Angel"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Angel"))
console.log(greeting.indexOf("!"))
console.log(greeting.includes("Hola")) // Índice
console.log(greeting.includes("Angel"))
console.log(greeting.includes("!"))
console.log(greeting.slice(6, 11)) // Sección
console.log(greeting.replace("Angel", "Papacito")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)