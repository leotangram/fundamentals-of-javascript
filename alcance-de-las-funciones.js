var nombre = 'Leo'

/** Esta función modifica la variable nombre */
function imprimirNombrEnMayusculas(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

/** Esta función no modifica la variable nombre
 * Tiene un alcance local:
 * Solo existe dentro de esa función
 */
function imprimirNombrEnMayusculasNoModificada(n) {
  n = n.toUpperCase()
  console.log(nombre)
}

imprimirNombrEnMayusculas()
imprimirNombrEnMayusculasNoModificada(nombre)