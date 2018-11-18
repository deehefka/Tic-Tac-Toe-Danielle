'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const app = require('./app.js')

let gameOver = false

// defining players/turns
const turnOne = 'X'
const turnTwo = 'O'
// whose turn it is (player 1)
let currentTurn = 1
// to track moves - no moves yet
setMessage('Please sign up!')
// no moves yet on board
let movesMade = 0
// possible moves on board
const boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// anything that has a class of cell, add to this variable
// tracks events
const square = $('.cell')

// to display message to user
function setMessage (msg) {
  document.getElementById('message').innerText = msg
}

// track a click on a square
square.on('click', function (i) {
  // console.log(i)
  // when we click, we know that a move has been made
  // add to movesMade
  movesMade++
  // to see if square has anything in it
  const currentSquare = $(this).text()
  if (currentSquare === '') {
  // track whose turn it is
    if (currentTurn === 1) {
      $(this).text(turnOne)
      // event.target.innerHTML = turnOne
      // add to turns total and switches players
      currentTurn++
      // to tell user whose turn it is
      setMessage("It's O's Turn!")
    } else {
      // if current turn is not equal to 1, then it is turnTwo
      $(this).text(turnTwo)
      // event.target.innerHTML = turnTwo
      // subtracts from currentTurn to change back to turnOne
      currentTurn--
      // to tell user whose turn it is
      setMessage("It's X's Turn!")
    }
  }
  // win logic
  if (movesMade > 4) {
    $('#gameBoard').map(function (x) {
      // push to boardArray
      if ($(this).text() !== '') {
        boardArray[x] = $(this).text()
      }
    })

    let x = false
    // cells to the boardArray
    let c0 = boardArray[0]
    let c1 = boardArray[1]
    let c2 = boardArray[2]
    let c3 = boardArray[3]
    let c4 = boardArray[4]
    let c5 = boardArray[5]
    let c6 = boardArray[6]
    let c7 = boardArray[7]
    let c8 = boardArray[8]

    // cells to possible row wins
    const rowA = [$('#c0').html(), $('#c1').html(), $('#c2').html()]
    const rowB = [$('#c3').html(), $('#c4').html(), $('#c5').html()]
    const rowC = [$('#c6').html(), $('#c7').html(), $('#c8').html()]
    // cells to possible column wins
    const colA = [$('#c0').html(), $('#c3').html(), $('#c6').html()]
    const colB = [$('#c1').html(), $('#c4').html(), $('#c7').html()]
    const colC = [$('#c2').html(), $('#c7').html(), $('#c8').html()]
    // cells to possible diag wins
    const diagOne = [$('#c0').html(), $('#c4').html(), $('$c8').html()]
    const diagTwo = [$('#c2').html(), $('#c4').html(), $('#c6').html()]
    // check rows
    if (rowA[0] === rowA[1] && rowA[2] === rowA[0] && rowA[0] !== '') { x = true } else if (rowB[0] === rowB[1] && rowB[2] === rowB[0] && rowB[0] !== '') { x = true } else if (rowC[0] === rowC[1] && rowC[2] === rowC[0] && rowC[0] !== '') { x = true }
    // check columns
    if (colA[0] === colA[1] && colA[2] === colA[0] && colA[0] !== '') { x = true } else if (colB[0] === colB[1] && colB[2] === colB[0] && colB[0] !== '') { x = true } else if (colC[0] === colC[1] && colC[2] === colC[0] && colC[0] !== '') { x = true }
    // check diags
    if (diagOne[0] === diagOne[1] && diagOne[2] === diagOne[0] && diagOne[0] !== '') { x = true } else if (diagTwo[0] === diagTwo[1] && diagTwo[2] === diagTwo[0] && diagTwo[0] !== '') { x = true }

    if (x) {
      $('#message').show()
      $('message').html('Winner, Winner!')
      // can't click anymore squares
      square.off('click')
    }

    const boardArrayTie = boardArray.filter(function (index) {
      // not a number
      return isNaN(index)
    }).length
    if (!x && movesMade === 9) {
      $('#message').show()
      $('#message').html("No winner, it's a tie!")
    }
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
