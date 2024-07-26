/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
    let suma = 5+10
    let resta = 5-10
    let multiplicacion = 5*10
    let division = 5/10
    let modulo = 5%10
    let potencia = 5**10

    console.log(potencia)

// 2. Crea una variable para cada tipo de operación de asignación,
    let x = 2
    x+=85
    console.log(x)
    x-=5
    console.log(x)
    x*=99
    console.log(x)
    x/=2
    console.log(x)
    x%=4
    console.log(x)
    x **=9
    console.log(x)

    
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
   console.log(true && true)
   console.log(true || false)
   console.log(!false)
   console.log("Hay algo aqui" !== 0)
   console.log(7 > 0)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log("Hola Juan" === "Hola Juanito")
    console.log(0 != false)
    console.log(5<0 && 10<6)
    console.log("" == true)
    console.log(54 === "54")
// 5. Utiliza el operador lógico and
if("Galleta" === "Galleta" && 5>2){
    console.log("Soy una operacion")
}
else{
    console.log("Masque")
}
// 6. Utiliza el operador lógico or
let port = null
if(port = null || 5000)
    console.log(port)
// 7. Combina ambos operadores lógicos
let myBool = false
let myBool2 = false
//En la operacion and ambas condiciones se deben de cumplir para tener un true
if(myBool || myBool2 && 5>0)
{
    console.log("Se lograron las dos condiciones")
}else
{
    console.log("Solo loramoas una condicion")
}

// 8. Añade alguna negación
    console.log(!true)

// 9. Utiliza el operador ternario
    let trabajo = 0
    trabajo ? console.log("hay baro") : console.log("No hay baro") 
// 10. Combina operadores aritméticos, de comparáción y lógicas

    