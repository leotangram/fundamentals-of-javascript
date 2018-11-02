var x = 4, y = '4'

x == y // true
x === y // false

var leo = {
  nombre: 'Leo'
}

var otraPersona = {
  nombre: 'Leo'
}

leo == otraPersona // false
leo === otraPersona // false

var otraPersona = leo
otraPersona == leo // true