var edad = 27

/** Forma 1 de sumar */
// edad = edad + 1

/** Forma 2 de sumar */
edad += 1

var peso = 75

/** Forma 1 de restar */
// peso = peso - 2

/** Forma 2 de restar */
peso -= 2

var sandwich = 1

// peso = peso + sandwich
peso += sandwich

var realizarDeporte = 3

// peso = peso - realizarDeporte
peso -= realizarDeporte

/** Ejemplo con decimales */
var precioVino = 200.3

var total = Math.round(precioVino * 100 * 3) / 100

/** Tener presente 2 decimales después del . o , */
var totalStr = total.toFixed(2)

/** COnvertir de string a numero decimal */
var total2 = parseFloat(totalStr)

var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona = pizza / persona