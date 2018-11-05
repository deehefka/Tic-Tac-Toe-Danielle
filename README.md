Tic Tac Toe

A basic Tic Tac Toe game built using HTML/JavaScript/CSS.

Wireframe: Imgur [https://imgur.com/Wp6Fnx5]

User Stories:

-As a user, I can play a game of Tic Tac Toe with myself.
-As a user, I should start by seeing a 3x3 grid gameboard.
-As a user, I want to start playing with an X and the game should auto switch to O, and then back again
-As a user, I can signup up with my email, login and out, and be able to change my password. I should not have access to logging out or changing my password until I have successfully signed in.
As a user, I want a message that tells me who has won the game or if it was a tie.
-As a user, my game should have a reset button which will clear the screen without rloading the page so I can play again.
-As a user, I should be able to see a display of the game statistics, such as total games won.

Planning: I created a wireframe and user stories (see above). My plan was to use vanilla Javascript to write logic for the basic game using arrays, objects and functions. My CSS is very minimal and would be added to after the game is completed.

During planning and actual development, I broke the problem down into the smallest steps I could aand wrote logic for each item. I created players first, then specified turns and a way to count turns in order to switch X to O and back again. I wrote code to place Xs and Os in the cells on the board and started the logic to check for the winner. My intent was to write logic to itterate through the winiing combinations and state whether there was a winner or if the game was a tie.

My approach:
-Create basic HTML for the game including login/sign-up/password
-Build logic in JS to store needed information
-CSS styling

Unsolved Problems for future iterations:
- Declare a Winner
- Get the Restart button working
- Add a score board/keep track of score
- The change password button and sign out button should only be available to users signed in
- Shouldn't be able to select the same square twice
- Additional CSS
