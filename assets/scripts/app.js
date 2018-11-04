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
})

// defining players/turns
let turnOne = 'X'
let turnTwo = 'O'
// whose turn it is (player 1)
let currentTurn = 1
// to track moves - no moves yet
let movesMade = 0
// anything that has a class of square, add to this variable
// tracks events
const square = $('.cell')
// track a click on a square
square.on('click', function (i) {
  // console.log(i)
  // when we click, we know that a move has been made
  // add to movesMade
  movesMade++
  // track whose turn it is
  if (currentTurn === 1) {
    event.target.innerHTML = turnOne
    // add to turns total and switches players
    currentTurn++
  } else {
    // if current turn is not equal to 1, then it is turnTwo
    event.target.innerHTML = turnTwo
    // subtracts from currentTurn to change back to turnOne
    currentTurn--
  }
  checkForWinner()
})
// function to check for winner
function checkForWinner () {
// min amount of moves to win - only check on 5+ moves
  if (movesMade > 4) {
    // call protoype method on empty array which allows you to use method (slice)
    // slice takes a section of an array and returns a new array
    // call specifies our 'cells' (the board) to create new array
    const moves = Array.prototype.slice.call($('.cell'))
    // console.log(moves)
  }
// all possible ways to win
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
}

// jQuery  html() method
// sets content for selected elements
// $('.cell').click(function () {
//   $(this).html(turnOne)
// })
