'use strict'
const config = require('../config.js')
const store = require('../store.js')

// taken from class lecture
const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

// taken from class lecture
const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
// taken from class lecture
const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// taken from class lecture
const signOut = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const restartGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=BAhJIiU5ZjQwODQwYzUxMGJkZDc5ZWUyMjk5MGRhMzE5ZjNhNgY6BkVG--4ec07bed51fc3f910f306fb03a4b6f268616ab31'
    },
    data: {}
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  restartGame
}
