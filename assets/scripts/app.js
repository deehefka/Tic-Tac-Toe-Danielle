'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// buttons - from class notes/lecture
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})


// defining players/turns
const turnOne = 'X'
const turnTwo = "O"

// jQuery  html() method
// sets content for selected elements
// https://www.w3schools.com/jquery/html_html.asp
$(document).ready(function () {
  $('.cell').click(function () {
    $(this).html(turnOne)
  })
})
