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

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(leo)
imprimirSiEsMayorDeEdad(juan)