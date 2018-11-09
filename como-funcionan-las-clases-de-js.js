// Hablar de objetos en javascript es hablar de prototipos.
// this hace referencia al nuevo objeto que se acaba de crear.
// la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
// La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.

function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var leo = new Persona('Leo', 'Omaña')
leo.saludar()

var hellen = new Persona('Hellen', 'Rozo')
hellen.saludar()