// Se pregunta número de jugadas
let jugadas = prompt( 'Cuantas partidas quieres jugar' );

// Si es número, transformar a valor numérico
jugadas = parseInt(jugadas);

// Se crean los espacios en memoria para almacenar la jugada de cada uno
let jugadaSelecionada = '';
let jugadaMaquina = '';
let puntosU = 0;
let puntosM = 0;

// Se crea el ciclo según la elección del usuario
for ( let i = 1; i <= jugadas; i++ ) {
  let jugadaU = prompt('Ingrese una jugada en 1 y 3');
  jugadaU = parseInt(jugadaU);

  // Se evalúa la jugada seleccionada por el usuario
  switch (jugadaU) {
    case 1:
      jugadaSelecionada = 'Piedra';
      break;
    case 2:
      jugadaSelecionada = 'Papel';
      break;
    case 3:
      jugadaSelecionada = 'Tijera';
      break;
    default:
      alert( 'Valor no válido' );
      break;
  }

  // General la jugada de la máquina
  jugadaM = Math.floor(Math.random() * 3) + 1;
  switch (jugadaM) {
    case 1:
      jugadaMaquina = 'Piedra';
      break;
    case 2:
      jugadaMaquina = 'Papel';
      break;
    case 3:
      jugadaMaquina = 'Tijera';
      break;
    default:
      alert( 'Valor no válido' );
      break;
  }

  // Posibilidades al elegir Piedra 
  if ( jugadaSelecionada == 'Piedra' && jugadaMaquina == 'Papel' ) {
    alert( 'Pierdes' );
    puntosM = puntosM + 1;
  }
  if ( jugadaSelecionada == 'Piedra' && jugadaMaquina == 'Piedra' ) {
    alert( 'Empate' );
  }
  if ( jugadaSelecionada == 'Piedra' && jugadaMaquina == 'Tijera' ) {
    alert( 'Ganas' );
    puntosU = puntosU + 1;
  }
  // Posibilidades al elegir Papel
  if ( jugadaSelecionada == 'Papel' && jugadaMaquina == 'Papel' ) {
    alert( 'Empate' );
  }
  if ( jugadaSelecionada == 'Papel' && jugadaMaquina == 'Piedra' ) {
    alert( 'Ganas' );
    puntosU = puntosU + 1;
  }
  if ( jugadaSelecionada == 'Papel' && jugadaMaquina == 'Tijera' ) {
    alert( 'Pierdes' );
    puntosM = puntosM + 1;
  }
  // Posibilidades al elegir Tijera
  if ( jugadaSelecionada == 'Tijera' && jugadaMaquina == 'Papel' ) {
    alert( 'Ganas' );
    puntosU = puntosU + 1;
  }
  if ( jugadaSelecionada == 'Tijera' && jugadaMaquina == 'Piedra' ) {
    alert( 'Pierdes' );
    puntosM = puntosM + 1;
  }
  if ( jugadaSelecionada == 'Tijera' && jugadaMaquina == 'Tijera' ) {
    alert( 'Empate' );
  }

  console.log( `Puntos Usuario: ${ puntosU }` );
  console.log( `Puntos Máquina: ${ puntosM }` );
  console.log( '-------------------' );
}




