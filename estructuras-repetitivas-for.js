var leo = {
  nombre: 'Leo',
  apellido: 'Omaña',
  edad: 26,
  peso: 74
}

console.log(`Al inicio del año ${leo.nombre} pesa ${leo.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

// Equivalencia
// function aumentarDePeso(persona) {
//   return persona.peso += INCREMENTO_PESO
// }
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()
  if (random < 0.25) {
    // aumentarDePeso
    aumentarDePeso(leo)
  } else if (random < 0.5) {
    // adelgazar
    adelgazar(leo)
  }
}

console.log(`Al final del año ${leo.nombre} pesa ${leo.peso.toFixed(1)}kg`)