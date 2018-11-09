var leo = {
  nombre: 'Leo',
  apellido: 'Omaña',
  edad: 26,
  peso: 74
}

console.log(`Al inicio del año ${leo.nombre} pesa ${leo.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

// Equivalencia
// function aumentarDePeso(persona) {
//   return persona.peso += INCREMENTO_PESO
// }
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = leo.peso - 3
var dias = 0

while (leo.peso > META) {
  if (comeMucho()) {
    // aumentarDePeso
    aumentarDePeso(leo)
  }
  if (realizaDeporte()) {
    // adelgazar
    adelgazar(leo)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${leo.nombre} adelgazó 3kg`)