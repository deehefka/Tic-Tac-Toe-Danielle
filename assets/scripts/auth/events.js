'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

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
  console.log()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
