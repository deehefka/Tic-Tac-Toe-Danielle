'use strict'

const store = require('../store.js')
// taken from class lecture
const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // clears sign up information
  $('#sign-up').trigger('reset')
  // console.log('signUpSuccess ran. Data is :', data)
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
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // clears sign in information
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
  // clears sign in information
  $('#change-password').trigger('reset')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // clears sign in information
  $('#change-password').trigger('reset')
  console.error('changePasswordFailure ran. Error is :', error)
}
// taken from class lecture
const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
