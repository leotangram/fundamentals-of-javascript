var nombreLeo = 'Leo'
var nombreDario = 'Dario'

/** Objeto
 * clave: valor,
 * key: value
 * por ejemplo:
 * nombre: leo
 */
var leo = {
  nombre: 'Leo',
  apellido: 'Omaña',
  edad: 26
}

var dario = {
  nombre: 'Darío',
  apellido: 'Fuentes',
  edad: 30
}

function imprimirNombreEnMayusculas({
  nombre
}) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(leo)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({
  nombre: 'Pepito'
})