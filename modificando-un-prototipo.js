function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.alura > 1.8
}

leo.soyAlto()
hellen.soyAlto()

var leo = new Persona('Leo', 'Omaña', 1.73)
var hellen = new Persona('Hellen', 'Rozo', 1.65)