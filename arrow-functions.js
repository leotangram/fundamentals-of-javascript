var leo = {
  nombre: 'Leo',
  apellido: 'Omaña',
  edad: 26,
  ingeniero: true,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: true,
  drone: false
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)
  if (persona.ingeniero) {
    console.log('ingeniero')
  }
  if (persona.cocinero) {
    console.log('cocinero')
  }
  if (persona.cantante) {
    console.log('cantante')
  }
  if (persona.dj) {
    console.log('dj')
  }
  if (persona.guitarrista) {
    console.log('guitarrista')
  }
  if (persona.drone) {
    console.log('drone')
  }
}

imprimirProfesiones(leo)

var juan = {
  nombre: 'Juan',
  apellido: 'Gómez',
  edad: 13
}

const MAYORIA_DE_EDAD = 18

/**
 * Otra manera de crear una función es por medio de una función anónima
 * la cual se le asigna a una variable
 */
// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

/** Cuando solo hay un parámetro en la función se puede obviar los paréntesis */
// const esMayorDeEdad = (persona) => {
// const esMayorDeEdad = persona => {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

/** Si una función retorna algo se puede borrar Return y borrar las llaves
 * que rodean el cuerpo de la función 
 * e implicitamente se retorna el valor que sigue a continuación.
 * Entonces la función que antes era 3 lineas, ahora quedó en una linea
 */
// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

/** Para desestructurar */
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  }
}

imprimirSiEsMayorDeEdad(leo)
imprimirSiEsMayorDeEdad(juan)