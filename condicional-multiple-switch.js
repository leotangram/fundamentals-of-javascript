var signo = prompt('¿Cual es tu signo?')

switch (signo) {
  case 'aries':
    console.log('Trabajo y negocios: su optimismo derriba obstáculos en el trabajo. Provocará recelos de gente envidiosa. Amor: momento dichoso: una persona que apenas conoce será atraída por su carisma.')
    break
  case 'tauro':
    console.log('Trabajo y negocios: le subyuga alguien que tiene fama de exitosa. Verá que usted posee algo que los demás carecen. Amor: se mantiene distante y alguien se siente atraído; al acercarse, le caerá bien.')
    break
  case 'geminis':
    console.log('Trabajo y negocios: un malentendido le dejará al borde del ridículo frente a compañeros. Tómelo con humor. Amor: un incidente revelará cuánto le ama quien está a su lado; urge reflexionar.')
    break
  case 'cancer':
    console.log('Trabajo y negocios: visitas repentinas le incomodan ¡Calma! Traerán buenas noticias. Llega propuesta. Amor: la situación que crea el afecto no correspondido llega a su fin. Ve otro horizonte.')
    break
  case 'leo':
    console.log('Trabajo y negocios: subestima a esa persona que quiere facilitar las cosas en los negocios. Tiene buena voluntad. Amor: con su actitud está avivando la llama de los celos. Es un juego peligroso.')
    break
  case 'virgo':
    console.log('Trabajo y negocios: su estilo ordenado contribuirá con mejoras en todas las áreas. Su entorno se verá favorecido. Amor: día propicio para reconciliarse en la pareja ó iniciar nuevo romance.')
    break
  case 'libra':
    console.log('Trabajo y negocios: un litigio se resuelve a su favor pero el dinero tarda en llegar. Controle sus gastos. Amor: evite las discusiones, su pareja está susceptible; mejor, salga y diviértase, le hará bien.')
    break
  case 'escorpio':
    console.log('Trabajo y negocios: se guarda de expresar desacuerdo con alguien que recién conoce y eso le crea problemas. Amor: se aclaran las dudas y la seducción irrumpe en la pareja. Armonía renovada.')
    break
  case 'sagitario':
    console.log('Trabajo y negocios: le ofrecen un puesto que hará que extrañe al anterior. Vea lo positivo de lo nuevo. Amor: inicia una relación que pone de cabeza su mundo interior; tendrá mucha audacia.')
    break
  case 'capricornio':
    console.log('Trabajo y negocios: surgirá un desafío difícil de superar pero sus habilidades alejarán los problemas. Amor: disfrutará más junto a su pareja cuando comprenda sus miedos y timidez.')
    break
  case 'acuario':
    console.log('Trabajo y negocios: exhibe su aspecto negativo en forma de soberbia. Su entorno le reclamará por asuntos pendientes. Amor: la pareja se consolida y comienza a hacer planes; todo mejora.')
    break
  case 'piscis':
    console.log('Trabajo y negocios: conviene evitar las acciones que defrauden a personas que le depositan su confianza. Amor: su alma sensible inspirará una fascinante seducción que cambiará su destino.')
    break
  default:
    console.log('No es un signo zodiacal válido')
    break
}