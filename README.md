# tic-tac-toe
Mini-project in week 4 of General Assembly SEI35. Completed in 3.5 hours.

To see the site and play the game, click [here](https://saralaffin.github.io/tic-tac-toe/)

## Requirements

Your goal is to build out a working version of Tic-Tac-Toe. This is to get you
ready to build out a more complex game for your project so in addition to
practicing the technical skills you've learned in class, you'll practice scoping
out a large project, breaking it into smaller pieces, and working towards those
goals in sequence.

You're going to build out your Tic-Tac-Toe game in two phases! We'll define the
goals for each phase, but you should break these down into even smaller steps.

### Phase 1: Player-scored Version

Build out a 3x3 grid with clickable squares. When a user clicks on a square, it
should turn red or blue (alternating with each click). Once a square has been
clicked, a user should not be able to click it again and change it's color.
Below your 3x3 grid, you should have a 'reset' button that will reset the game.

**Bonus requirements:**

- Have a message somewhere in your UI to show who the current player is (i.e.
  `red's turn` or `blue's turn`)

**Additional Resources:**

- [MDN Pointer Events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)

### Phase 2: Dumbly-scored Version

> Students will often jump straight in to building a complex algorithm to
> determine if a player has won. While the enthusiasm is great, it's often
> better to start with a 'dumb' version and then work towards a 'smart' version.

The goal of this phase is to make it so that players don't have to manually
score the game. Instead, you're going to write some code that will check the
board with every turn:

- If a player has won, display a message with which player won the game (i.e.
  red or blue)
- If all the squares are filled in and no player has won yet, display a message
  saying it's a tie
- In both cases, the users should be able to reset the game

In games where there are a limited number of winning combinations, a great
first-step to auto-calculating the winner is to hold those winning combinations
in some format (maybe an array) and check the current game against those winning
combinations. If one of the winning combinations matches the gameboard, then you
know a player has won!

However, doing so requires modeling the current state of the gameboard in your
code. So, in addition to updating your UI whenever a player makes a move, you'll
also have to update some representation of the gameboard in your game code.

