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


// jQuery  html() method
// sets content for selected elements
// $('.cell').click(function () {
//   $(this).html(turnOne)
// })
