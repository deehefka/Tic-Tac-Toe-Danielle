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
// const turnOne = 'X'
// const playerTwo = 'O'

// $('.cell').click(function () {
  // $(this).html(turnOne);
// })

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
