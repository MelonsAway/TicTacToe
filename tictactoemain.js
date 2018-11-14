const player1 = 'X';
const player2 = 'O';

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
//        console.log('test1');
        cells[i].innerText = '';
//        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
//    console.log('test');
    document.getElementById('text').innerText = '';
}
  let counter = 0;
function turnClick(square) {
    if (counter == 0) {
      player = player1;
      counter++;
    } else {
      player = player2;
      counter--;
    }
      turn(square.target.id, player);
    //  console.log(counter);
  };

function turn(squareId, player) {
  if (typeof(origBoard[squareId]) == "number") {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    checkwin();
  } else {
    window.alert('Someone already went there, cheater! Lose a turn');
  }
}
function checkwin() {
//  console.log(origBoard[0]);
    if (origBoard[0] === origBoard[1]) {
    if (origBoard[1] === origBoard[2]) {
    wins();
    }
  }
   if (origBoard[0] === origBoard[3]){
    if (origBoard[3] === origBoard[6]) {
      wins();
    }
  }
   if (origBoard[0] === origBoard[4]) {
    if (origBoard[0] === origBoard[8]) {
      wins();
    }
  }
   if (origBoard[3] === origBoard[4]) {
    if (origBoard[4] === origBoard[5]) {
      wins();
    }
  }
   if (origBoard[6] === origBoard[7]) {
    if (origBoard[7] === origBoard[8]) {
      wins();
    }
  }
   if (origBoard[1] === origBoard[4]) {
     if (origBoard[4] === origBoard[7]) {
       wins();
     }
   }
  if (origBoard[2]===origBoard[5]) {
    if (origBoard[5]===origBoard[8]) {
      wins();
    }
  }
  if (origBoard[6]===origBoard[4]) {
    if (origBoard[6]===origBoard[2]) {
      wins();
    }

  }
}

function wins () {
  let winner = " Won!"
  document.getElementById('text').innerText = player + winner;
//  console.log('test2');
}
