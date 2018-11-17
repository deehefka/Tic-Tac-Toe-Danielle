'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// buttons - from class notes/lecture
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('#restart-game').on('click', authEvents.onRestartGame)
  $('#new-game').on('submit', authEvents.onStartGame)
  $('#get-games').on('submit', authEvents.onGetGames)
  $('#play-again').on('submit', authEvents.onStartNewGame)
})

// defining players/turns
const turnOne = 'X'
const turnTwo = 'O'
// whose turn it is (player 1)
let currentTurn = 1
// to track moves - no moves yet
setMessage('Please sign up!')
// anything that has a class of cell, add to this variable
// tracks events
const square = $('.cell')
// track a click on a square
square.on('click', function (i) {
  // console.log(i)
  // when we click, we know that a move has been made
  // add to movesMade
  // movesMade++
  // track whose turn it is
  if (currentTurn === 1) {
    event.target.innerHTML = turnOne
    // add to turns total and switches players
    currentTurn++
    // to tell user whose turn it is
    setMessage("It's O's Turn!")
  } else {
    // if current turn is not equal to 1, then it is turnTwo
    event.target.innerHTML = turnTwo
    // subtracts from currentTurn to change back to turnOne
    currentTurn--
    // to tell user whose turn it is
    setMessage("It's X's Turn!")
  }
})

// to display message to user
function setMessage (msg) {
  document.getElementById('message').innerText = msg
}

// let counter = 1
// let winCounter = 0
// let OMoves = []
// let XMoves = []
//
// // all possible ways to win
// const winCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

// function checkWin () {
//   function sayWinner () {
//     setMessage(currentTurn + ' Wins!')
//     return false
//   }
//   const rowA = [$('#c0').html(), $('#c1').html(), $('#c2').html()]
//   const rowB = [$('#c3').html(), $('#c4').html(), $('#c5').html()]
//   const rowC = [$('#c6').html(), $('#c7').html(), $('#c8').html()]
//
//   const colA = [$('#c0').html(), $('#c3').html(), $('#c6').html()]
//   const colB = [$('#c1').html(), $('#c4').html(), $('#c7').html()]
//   const colC = [$('#c2').html(), $('#c7').html(), $('#c8').html()]
//
//   const diagOne = [$('#c0').html(), $('#c4').html(), $('$c8').html()]
//   const diagTwo = [$('#c2').html(), $('#c4').html(), $('#c6').html()]
//
//   // Write a function here called sayWinner() that will alert the current turn letter plus the word "Wins". An example could be X Wins! Or O Wins!
//
//   if (rowA[0] === rowA[1] && rowA[2] === rowA[0] && rowA[0] !== '') {
//     // Call the function sayWinner here
//   } else if (rowB[0] === rowB[1] && rowB[2] === rowB[0] && rowB[0] !== '') {
//     // Call the function sayWinner here
//   } else if (rowC[0] === rowC[1] && rowC[2] === rowC[0] && rowC[0] !== '') {
//     // Call the function sayWinner here
//   }
//
//   if (colA[0] === colA[1] && colA[2] === colA[0] && colA[0] !== '') {
//     // Call the function sayWinner here
//   } else if (colB[0] === colB[1] && colB[2] === colB[0] && colB[0] !== '') {
//     // Call the function sayWinner here
//   } else if (colC[0] === colC[1] && colC[2] === colC[0] && colC[0] !== '') {
//     // Call the function sayWinner here
//   }
//
//   if (diagOne[0] === diagOne[1] && diagOne[2] === diagOne[0] && diagOne[0] !== '') {
//     // Call the function sayWinner here
//   } else if (diagTwo[0] === diagTwo[1] && diagTwo[2] === diagTwo[0] && diagTwo[0] !== '') {
//     // Call the function sayWinner here
//   }
// }

// function nextMove (square) {
//   if (square.innerHTML !== '')
//     return
//     // setMessage('Pick another square!')
// }

// function nextMove (square) {
//   if (square.innerHTML === 'X' || square.innerHTML === 'O') {
//     setMessage('Pick another square!')
//   } else {
//     square.innerHTML = currentTurn
//   }
// }

// // function to check for winner
// function checkForWinner () {
// // min amount of moves to win - only check on 5+ moves
//   if (movesMade > 4) {
//     // call protoype method on empty array which allows you to use method (slice)
//     // slice takes a section of an array and returns a new array
//     // call specifies our 'cells' (the board) to create new array
//     const moves = Array.prototype.slice.call($('.cell'))
//     // console.log(moves)
//   }

// function xWins() {
//   if (c0 === 'X' && c1 === 'X' && c2 === 'X')
//   if (c3 === 'X' && c4 === 'X' && c5 === 'X')
//   if (c6 === 'X' && c7 === 'X' && c8 === 'X')
//   if (c0 === 'X' && c3 === 'X' && c6 === 'X')
//   if (c1 === 'X' && c4 === 'X' && c7 === 'X')
//   if (c2 === 'X' && c5 === 'X' && c8 === 'X')
//   if (c0 === 'X' && c4 === 'X' && c8 === 'X')
//   if (c2 === 'X' && c4 === 'X' && c6 === 'X')
// }
