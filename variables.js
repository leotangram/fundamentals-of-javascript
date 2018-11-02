/**
 * Java Script es un lenguaje Debilmente Tipado
 * Eso quiere decir que una variable puede ser string, o numero, 
 * puede mutar sin ningun problema
 */
var nombre = 'Leo', apellido = 'Omaña'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

// Variables: String

/** Forma antigua de concatenar */
var nombreCompleto = nombre + ' ' + apellido

/** 
 * Forma nueva de concatenar 
 * La comilla invertida `` nos permite interpolar variables 
  */
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase}`

/**
 * Escoger solo los carácteres que deseo de un string
 */
var str = nombre.substr(1, 2)