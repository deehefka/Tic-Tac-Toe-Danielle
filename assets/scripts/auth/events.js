'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // take this data and send it to our server
  // using an http request (post)
  api.signUp(data)
    .then(ui.signUpSuccess) // if request was successful
    .catch(ui.signUpFailure) // if request failed
}
const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // take this data and send it to our server
  // using an http request (post)
  api.signIn(data)
    .then(ui.signInSuccess) // if request was successful
    .catch(ui.signInFailure) // if request failed
}

const onSignOut = event => {
  event.preventDefault()
  console.log()
  // take this data and send it to our server
  // using an http request (post)
  api.signOut()
    .then(ui.signOutSuccess) // if request was successful
    .catch(ui.signOutFailure) // if request failed
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
