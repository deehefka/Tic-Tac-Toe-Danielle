'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const api = require('./auth/api.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// buttons - from class notes/lecture
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('#restart-game').on('click', authEvents.onRestartGame)
  $('#new-game').on('click', authEvents.onStartGame)
  $('.cell').on('click', authEvents.onCellClick)
  $('#get-games').on('submit', authEvents.onGetGames)
  $('#play-again').on('submit', authEvents.onStartNewGame)

  // defining players/turns
  let turnOne = 'X'
  let turnTwo = 'O'
  // whose turn it is (player 1)
  let currentTurn = 1
  // to track moves - no moves yet
  setMessage('Please sign up!')
  // no moves yet on board
  let movesMade = 0
  let gameOver = false
  // possible moves on board
  let boardArray = ['', '', '', '', '', '', '', '', '']
  // anything that has a class of cell, add to this variable
  // tracks events
  const square = $('.cell')

  let scoreX = 0
  let scoreO = 0

  // to display message to user
  function setMessage (msg) {
    document.getElementById('message').innerText = msg
  }

  // track a click on a square
  square.on('click', function (event) {
    const moves = Array.prototype.slice.call($('.cell'))
    // console.log(i)
    // when we click, we know that a move has been made
    // add to movesMade
    movesMade++
    // to see if square has anything in it
    const currentSquare = $(this).text()
    if (gameOver === false) {
      checkWinner()
      checkTie()
      whoWon()
      resetGame()
      if (currentSquare === '') {
        // declareWhoWon()
        // track whose turn it is
        if (currentTurn === 1) {
          $(this).text(turnOne)
          // event.target.innerHTML = turnOne
          // add to turns total and switches players
          setMessage("It's O's Turn!")
          currentTurn++
          // to tell user whose turn it is
          // checkWinner()
        } else {
        // if current turn is not equal to 1, then it is turnTwo
          $(this).text(turnTwo)
          // event.target.innerHTML = turnTwo
          // subtracts from currentTurn to change back to turnOne
          setMessage("It's X's Turn!")
          currentTurn--
          // to tell user whose turn it is
          // checkWinner()
        }
      }
      if (checkWinner()) {
        const winner = currentTurn === 1 ? turnTwo : turnOne
        whoWon(winner)
        if (winner === turnOne) {
          scoreX++
        } else {
          scoreO++
        }
        gameOver = true
        currentTurn = null
        turnOne = ''
        turnTwo = ''
        // sayScore()
      } else if (movesMade > 8) {
        checkTie()
      }

      // api.updateGame()
      //   .then()
      //   .catch()
    }
  })

  function resetGame () {
    $('#play-again').click(function () {
      boardArray = []
      currentTurn = 1
      movesMade = 0
      gameOver = false
      square.empty()
      $('.game-board').show()
      // authEvents.startGame()
    })
  }

  // game logic
  const checkWinner = function () {
    // all win combinations
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]
    if (movesMade > 5) {
      //   for (let i = 0; i < winCombos.length; i++) {
      //     if (boardArray[winCombos[i][0]] === turnOne && boardArray[winCombos[i][1]] === turnOne && boardArray[winCombos[i][2]] === turnOne) {
      //       setMessage('X Wins!')
      //       gameOver = true
    //       currentTurn = 0
      //     } else if (boardArray[winCombos[i][0]] === turnTwo && boardArray[winCombos[i][1]] === turnTwo && boardArray[winCombos[i][2]] === turnTwo) {
      //       setMessage('O Wins!')
      //       gameOver = true
      //       currentTurn = 0
      //     }
      //   }
      // }

      //
      // const moves = Array.prototype.slice.call($('.cell'))
      const gameResults = square.map((square) => {
        return square.innerHTML
      })

      // logic to see if win combos met
      return winCombos.find(function (combo) {
        if (gameResults[combo[0]] !== '' && gameResults[combo[1]] !== '' && gameResults[combo[2]] !== '' && gameResults[combo[0]] === gameResults[combo[1]] && gameResults[combo[1]] === gameResults[combo[2]]) {
          gameOver = true
          return true
        } else {
          return false
        }
      })
    }
  }

  // declare winner
  function whoWon (winner) {
    if (winner === turnOne) {
      setMessage('X wins!')
    } else {
      setMessage('O wins!')
    }
  }
  // check if tie
  function checkTie () {
    if (!gameOver) {
      const tieCheck = boardArray.filter((i) => {
        return i === ''
      })
      if (tieCheck.length === 0) {
        gameOver = true
      }
    }
  }
})

// other crap below is stuff that did not work

// function sayScore (score) {
//   (scoreX)
//   (scoreO)
// }

// function sayIfTie (tie) {
//   setMessage("It's a tie!")
// }

// function checkIfTie () {
//   if (movesMade > 8) {
//     setMessage('Tied game! No winner')
//   }
// }

// function whoWon (winner) {
//   if (gameOver) {
//     setMessage('We have a winner!')
//   }
// }

//   if (movesMade > 5) {
//     // const moves = Array.prototype.slice.call($('.cell'))
//     // const results = moves.map(function (square) {
//     //   return square.innerHTML
//     // })
//
//     $('#gameBoard').map(function (x) {
//       // return square.innerHTML
//       // push to boardArray
//       if ($(this).text() !== '') {
//         boardArray[x] = $(this).text()
//       }
//     })
//   }
//
//   let x = false
//   // boardArray indexes
//   const cell0 = boardArray[0]
//   const cell1 = boardArray[1]
//   const cell2 = boardArray[2]
//   const cell3 = boardArray[3]
//   const cell4 = boardArray[4]
//   const cell5 = boardArray[5]
//   const cell6 = boardArray[6]
//   const cell7 = boardArray[7]
//   const cell8 = boardArray[8]
//
//   // check rows
//   // if ((cell0[0] === cell1[1]) && (cell2[2] === cell0[0])) { x = true } else if ((cell3[3] === cell4[4]) && (cell5[5] === cell3[3])) { x = true } else if ((cell6[6] === cell7[7]) && (cell8[8] === cell6[6])) { x = true }
//   // check columns
//   // if ((cell0[0] === cell3[3]) && (cell6[6] === cell0[0])) { x = true } else if ((cell1[1] === cell4[4]) && (cell7[7] === cell1[1])) { x = true } else if ((cell2[2] === cell5[5]) && (cell8[8] === cell2[2])) { x = true }
//   // check diags
//   // if ((cell0[0] === cell4[4]) && (cell8[8] === cell0[0])) { x = true } else if ((cell2[2] === cell4[4]) && (cell6[6] === cell2[2])) { x = true }
//
//   // check rows
//   if ((cell0[0] === cell1[1]) && (cell1[1] === cell2[2])) { x = true } else if ((cell3[3] === cell4[4]) && (cell4[4] === cell5[5])) { x = true } else if ((cell6[6] === cell7[7]) && (cell7[7] === cell8[8])) { x = true }
//   // check columns
//   if ((cell0[0] === cell3[3]) && (cell3[3] === cell6[6])) { x = true } else if ((cell1[1] === cell4[4]) && (cell4[4] === cell7[7])) { x = true } else if ((cell2[2] === cell5[5]) && (cell5[5] === cell8[8])) { x = true }
//   // check diags
//   if ((cell0[0] === cell4[4]) && (cell4[4] === cell8[8])) { x = true } else if ((cell2[2] === cell4[4]) && (cell4[4] === cell6[6])) { x = true }
//
//   if (x === true) {
//     $('message').html('Winner, Winner!')
//     $('#message').show()
//     // can't click anymore squares
//     square.off('click')
//     gameOver = true
//   } else if (x === false) {
//     square.on('click')
//     gameOver = false
//   }
//
//   // const boardArrayTie = boardArray.filter(function (index) {
//   // // not a number
//   //   return isNaN(index)
//   // }).length
//   // if (!x && movesMade === 9) {
//   //   $('#message').html("No winner, it's a tie!")
//   //   gameOver = true
//   //    }
//   // }
// //  }
// })
