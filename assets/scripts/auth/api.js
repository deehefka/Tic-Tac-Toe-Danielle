'use strict'
const config = require('../config.js')
const store = require('../store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    // data: data
    data
    // shorthand - not redundant
  })
}

const signOut = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    // data
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
