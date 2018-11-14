/*window.addEventListener('keydown', event => {
 if (event.key == "x") {

   let para = document.createElement("p");
   let node = document.createTextNode("string");
   let element = document.getElementById("four");
   para.appendChild(node);
   para.replaceChild('string', 'string');
   element.appendChild(para);
 }
});
*/
/*window.addEventListener('click', result);
function result() {
console.log('test');
}
document.addEventListener('keydown', test);
  function test() {
      if (key.test == 'x') {

    console.log('x');
    } else if (test.key =='o') {
    console.log('o');
    } else {
    console.log('no');
  }
}
*/
const player1 = 'X';
const player2 = 'O';

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
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
    console.log('nice try');
  }
}
function checkwin() {
  console.log(origBoard[0]);
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
let winner = "You Won"

function wins () {
  document.getElementById('text').innerText = winner;
  console.log('test');
}
