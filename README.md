# Memory Game Project
Classic Memory Game
## Table of Contents

* [Instructions](#instructions)
* [How It Works](#howItWorks)
* [What Will I Learn?](#WhatWillILearn)
* [Contributing](#contributing)

## What Will I Build?

The Memory Game Project is all about demonstrating your mastery of HTML, CSS, and JavaScript. You’ll build a complete browser-based card matching game (also known as Concentration). But this isn’t just any memory game! It’s a snazzy, well-designed, and feature-packed memory game!

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## How to get Scratch

* Open <https://github.com/udacity/fend-project-memory-game>. Download the zip file.
* Extract the file
* Open it in an appropriate editor to start code
____________________

### The requirements

* The game must consist of at least 16 cards
* A user can click two cards each turn. If they are a match, the cards stay overturned. Otherwise, both cards flip back over.
* A score display that shows how many matches a user has made
* If the user matches all the cards, display a congratulations message
* A reset button which will restart the game and reset the cards
* Style it. Make it look nice.
* Deploy it to Surge.
* Add a link to your deployed app to the readme.md file.
* Submit a link to your github repo

## how It Works
If you're unfamiliar with the game, the rules are very simple; flip over two hidden cards at a time to locate the ones that match!

 The game board consists of sixteen cards arranged randomly in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. Each turn:

* A player flips one card over to reveal its underlying symbol
* The player then turns over a second card, trying to find the corresponding card with the same symbol
* If the cards match, both cards stay flipped over
* If the cards do not match, both cards are returned to their initial hidden state
* The game ends once all cards have been correctly matched.

## What Will I Learn?

The memory game presents the first opportunity to fully combine HTML, CSS, and JavaScript into a large project. Aside from solidifying your skills with these three technologies, you'll learn how best to combine them in a complex application. What's the ideal workflow? How many files do you need? Do you write the HTML first? The JavaScript?

## I did the following steps to complete this Project

1. Created a variable named `cards`, which holds all the cards.
2. Added the **click event listener** to each and every card. And performed few operations on clicked cards and started the timer.
3. Used a `push()` operation to store the clicked elements into the created array (`cards`). If the array length equals to 2 then performed the following step.
4. And also checked for match weather the current array element and previous one matched or not. If matched added classes using `classList.add()` and incremented the `matchCount` else the styling was revert to initial state.
5. Set the array(`cards`) to empty. and also incremented moves by 1.
6. If `matchCount` equals to 16 endup the game with popup which was built by `sweetalert`.
7. The popup dialog box contains move count, start rating, timer, button to reload and **Congratulations message**.  

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).   
