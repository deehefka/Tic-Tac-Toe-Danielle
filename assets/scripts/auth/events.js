'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const app = require('./app.js')

let currentTurn = 1
let gameOver = false
const square = $('.cell')

// taken from class lecture
const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
// taken from class lecture
const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $('#game-board').show()
  $('#play-again').show()
  $('.score-board').show()
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
  $('.score-board').hide()
  $('#game-board').hide()
  console.log()
  document.getElementById('sign-up').hidden = false
  document.getElementById('sign-in').hidden = false
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onStartGame = event => {
  event.preventDefault()
  document.getElementById('game-board').hidden = false
  // $('td').empty()
  square.on('click')
  $('#play-again').show()
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGamefailure)
}

const onStartNewGame = event => {
  event.preventDefault()
  square.on('click')
  $('#play-again').show()
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGamefailure)
}

const onUpdateGame = function () {
  event.preventDefault()
  api.updateGame()
    .then()
    .catch()
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
    // .catch(ui.updateGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onGameOver,
  onStartNewGame,
  onUpdateGame
}
