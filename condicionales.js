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
  if (persona.edad >= 18) {
    console.log('es mayor de edad')
  } else {
    console.log('es menor de edad')
  }
  console.log(`y tiene ${persona.edad}`)
}

imprimirProfesiones(leo)