'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const app = require('./app.js')

let gameOver = false
let movesMade = 0

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
  movesMade++
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

const switchTurn = {
  changeElement: function (piece) {
    if (currentTurn === 1) {
      $('#' + piece).html('X')
      checkWin()
      currentTurn = 2
    } else {
      $('#' + piece).html('O')
      checkWin()
      currentTurn = 1
    }
  }
}

function checkWin () {
  function sayWinner () {
    setMessage(currentTurn + ' Wins!')
    return false
  }
  const rowA = [$('#c0').html(), $('#c1').html(), $('#c2').html()]
  const rowB = [$('#c3').html(), $('#c4').html(), $('#c5').html()]
  const rowC = [$('#c6').html(), $('#c7').html(), $('#c8').html()]

  const colA = [$('#c0').html(), $('#c3').html(), $('#c6').html()]
  const colB = [$('#c1').html(), $('#c4').html(), $('#c7').html()]
  const colC = [$('#c2').html(), $('#c7').html(), $('#c8').html()]

  const diagOne = [$('#c0').html(), $('#c4').html(), $('$c8').html()]
  const diagTwo = [$('#c2').html(), $('#c4').html(), $('#c6').html()]

  if (rowA[0] === rowA[1] && rowA[2] === rowA[0] && rowA[0] !== '') {
    sayWinner()
  } else if (rowB[0] === rowB[1] && rowB[2] === rowB[0] && rowB[0] !== '') {
    sayWinner()
  } else if (rowC[0] === rowC[1] && rowC[2] === rowC[0] && rowC[0] !== '') {
    sayWinner()
  }

  if (colA[0] === colA[1] && colA[2] === colA[0] && colA[0] !== '') {
    sayWinner()
  } else if (colB[0] === colB[1] && colB[2] === colB[0] && colB[0] !== '') {
    sayWinner()
  } else if (colC[0] === colC[1] && colC[2] === colC[0] && colC[0] !== '') {
    sayWinner()
  }

  if (diagOne[0] === diagOne[1] && diagOne[2] === diagOne[0] && diagOne[0] !== '') {
    sayWinner()
  } else if (diagTwo[0] === diagTwo[1] && diagTwo[2] === diagTwo[0] && diagTwo[0] !== '') {
    sayWinner()
  }
}

$('.game-board td').on('click', function () {
  if ($(this).html() !== '') {
    setMessage('This spot has been taken...Sorry!')
    return false
  } else {
    const gamePiece = $(this).attr('id')
    switchTurn.changeElement(gamePiece)
  }
})

// taken from class lecture
const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
// taken from class lecture
const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $('#game-board').show()
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// taken from class lecture
const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
// taken from class lecture
const onSignOut = event => {
  event.preventDefault()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#get-games').hide()
  $('#play-again').hide()
  console.log()
  document.getElementById('sign-up').hidden = false
  document.getElementById('sign-in').hidden = false
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onStartGame = function (event) {
  event.preventDefault()
  document.getElementById('game-board').hidden = false
  $('td').empty()
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGamefailure)
}

const onGameOver = function () {
  event.preventDefault()
  $('td').off()
  const data = {
    game: {
      cell: {
        value: currentTurn,
        index: event.target.id
      },
      over: gameOver
    }
  }
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onGameOver
}
