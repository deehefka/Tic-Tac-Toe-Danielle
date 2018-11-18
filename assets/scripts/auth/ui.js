'use strict'

const store = require('../store.js')

const square = $('.cell')
// let x = false

// taken from class lecture
const signUpSuccess = data => {
  $('#message').text('You signed up! Please sign in!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // clears sign up information
  $('#sign-up').trigger('reset')
  // console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up').hide()
}
// taken from class lecture
const signUpFailure = data => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // clears sign up information
  $('#sign-up').trigger('reset')
  // console.error('signUpFailure ran. Error is :', error)
}
// taken from class lecture
const signInSuccess = data => {
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  document.getElementById('change-password').hidden = false
  document.getElementById('sign-out').hidden = false
  document.getElementById('new-game').hidden = false
  document.getElementById('get-games').hidden = false
  document.getElementById('play-again').hidden = false
  $('#message').text("You're signed in! Hit 'New Game' to Start!")
  $('#message').removeClass()
  $('#message').addClass('success')
  // clears sign in information
  $('#game-board').show()
  $('#sign-in').trigger('reset')
  // console.log('signInSuccess ran. Data is :', data)
}

// taken from class lecture
const signInFailure = data => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // clears sign in information
  $('#sign-in').trigger('reset')
  // console.error('signInFailure ran. Error is :', error)
}

// taken from class lecture
const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  // clears sign in information
  $('#change-password').trigger('reset')
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
  // clears sign in information
  $('#change-password').trigger('reset')
}
// taken from class lecture
const signOutSuccess = data => {
  $('#message').text('Bye now!')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signOutSuccess ran. Data is :', data)
}
// taken from class lecture
const signOutFailure = data => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signOutFailure ran. Error is :', error)
}

const startGameSuccess = data => {
  store.game = data.game
  square.on('click')
  document.getElementById('new-game').hidden = true
  $('#message').text('Good luck! X gets to start!')
  // console.log('startGameSuccess ran. Data is :', data)
}

const startGameFailure = data => {
  $('#message').text('Uh oh. Something happened. Try again.')
  // $('#message').addClass('failure')
  // console.error('startGameFailure ran. Data is :', data)
}

const updateGameSuccess = data => {
  store.game = data.game
  // console.log('updateGameSuccess ran. Data is :', data)
}

const getGamesSuccess = function (data) {
  store.games = data.games
  // console.log(getGameSuccess ran. Data is :', data)
}

const getGamesFailure = function () {
  $('#message').text('Uh oh. Something happened. Try again.')
  $('#message').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  startGameFailure,
  updateGameSuccess,
  getGamesSuccess,
  getGamesFailure
}
