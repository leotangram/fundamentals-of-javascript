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

function imprimirNombreEnMayusculas(persona) {
  /** Es lo mismo que:
   * var nombre = persona.nombre
   */
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad1(nombre, edad) {
  var saludo = `Hola, me llamo ${nombre} y tengo ${edad} años`
  console.log(saludo);
}

function imprimirNombreYEdad2(persona) {
  var saludo = `Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`
  console.log(saludo);
}

imprimirNombreEnMayusculas(leo)
imprimirNombreEnMayusculas(dario)

imprimirNombreYEdad1(leo.nombre, leo.edad)
imprimirNombreYEdad2(leo)
imprimirNombreYEdad1(dario.nombre, dario.edad)
imprimirNombreYEdad2(dario)