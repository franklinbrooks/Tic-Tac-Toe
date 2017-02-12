let board = [" "," "," "," "," "," "," "," "," "];
let winCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
let currentPlayer = "X";
let turns = 0;
let box = null;

console.log('JS is working!');

let outputMessage = function(text) {
  let newHTML = document.getElementById('message');
  newHTML.innerHTML = text;
};

let play = function() {
  outputMessage(`player ${currentPlayer} select a square: `);
};

let move = function(event) {
  let box = event.target;
  let index = (box.getAttribute('data-position'));
  let validation = validMove(index);
  if (validation === true) {
    event.target.innerHTML  = `${currentPlayer}`;
    board[index] = currentPlayer;
    evaluateBoard(board);
  } else if (validation === false) {
    board[index] = board[index];
    outputMessage(`square is taken. ${currentPlayer} select another square:`);
  }
};

let validMove = function(index) {
  console.log('Now in validMove...');
  console.log('Board being validated is ' + board);
  console.log('This is board[index]: ' + board[index]);
  if (board[index] === "X") {
     // outputMessage(`square is taken. select another square:`);
     console.log('Leaving validMove with return false!');
     return false;
  } else if (board[index] ===  "O") {
     //outputMessage(`square is taken. select another square:`);
     console.log('Leaving validMove with return false!');
     return false;
  } else {
    console.log('Leaving validMove with return true!');
    return true;
  }
};

let evaluateBoard = function() {
  console.log('Evaluating this board: ' + board);
  if (board[0] == currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[3] == currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[6] == currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[0] == currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[1] == currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[2] == currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[0] == currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[2] == currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board.includes("") === false && board.includes(" ") === false) {
    outputMessage(`tie game! play again?`);
    resetButton.className = 'visible';
  } else {
    console.log('Turns after evaluateBoard runs is ' + turns);
    console.log('Board after evaluate board is ' + board);
    console.log('Leaving evaluateBoard: no winner, no tie. Heading for incrementCurrentPlayer!');
    turns = turns + 1;
    incrementCurrentPlayer();
  }
};

let incrementCurrentPlayer = function() {
  console.log('turns before currentPlayer runs is ' + turns);
  console.log('turn before currentPlayer runs is ' + currentPlayer);
  if (turns % 2 === 0) {
    currentPlayer = "X";
    outputMessage(`player ${currentPlayer} select a square: `);
  } else {
    currentPlayer = "O";
    outputMessage(`player ${currentPlayer} select a square: `);
  }
  console.log('turns after incrementCurrentPlayer runs is ' + turns);
  console.log('currentPlayer after incrementCurrentPlayer runs is ' + currentPlayer);
  play();
};

let playAgain = function() {
  board = [" "," "," "," "," "," "," "," "," "];
  let clearBoard = document.getElementsByClassName('content');   // Remove x & o images
  for (var k = 0; k < clearBoard.length; k++) {
    clearBoard[k].innerHTML = '';
  }
  resetButton.className = 'invisible';
  currentPlayer = "X";
  turns = 0;
  play()
};

window.onload = function() {
  document.querySelector('#c0').addEventListener('click', move);
  document.querySelector('#c1').addEventListener('click', move);
  document.querySelector('#c2').addEventListener('click', move);
  document.querySelector('#c3').addEventListener('click', move);
  document.querySelector('#c4').addEventListener('click', move);
  document.querySelector('#c5').addEventListener('click', move);
  document.querySelector('#c6').addEventListener('click', move);
  document.querySelector('#c7').addEventListener('click', move);
  document.querySelector('#c8').addEventListener('click', move);
  document.querySelector('#resetButton').addEventListener('click', playAgain);
};

document.onload=function(){play()};


