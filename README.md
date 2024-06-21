# Hangman Game

This repository contains the code for a simple Hangman game built with HTML, CSS, and JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Hangman Game is a classic word-guessing game where players try to guess a hidden word by suggesting letters within a certain number of guesses. This implementation provides a graphical interface and an interactive experience.

## Features

- Random word selection with hints.
- Graphical representation of the hangman.
- Keyboard and mouse input for guessing letters.
- Game over and victory alerts.

## Installation

To play the game locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/your-username/hangman-game.git

2. Close the command line and navigate to the project directory:
   cd hangman-game

3. Open the `index.html` file in your preferred web browser.

## Usage
Once the index.html file is opened in a web browser, the game will start automatically. The player can use either the on-screen buttons or the keyboard to guess letters.

## Files
- index.html: The main HTML file for the game interface.
- style.css: The CSS file for styling the game.
- script.js: The main JavaScript file that contains the game logic.
- words.js: A JavaScript file that contains the list of words and hints for the game.
- images/: A directory containing images for the hangman graphics.

### 'index.html'
This file sets up the basic structure of the game interface, including the title, the hangman image, the word display, hint, guesses, and letter buttons.

### 'style.css'
This file contains the styles for the game interface, ensuring it looks clean and user-friendly.

### 'script.js'
This file contains the core game logic, including:
- Randomly selecting a word and hint from the words.js file.
- Handling user input via buttons and keyboard.
- Updating the game state (correct/incorrect guesses, updating the hangman image).
- Checking for game over or victory conditions.

### 'words.js'
This file contains an array of words and their corresponding hints.

### 'images/'
This directory contains the images used to display the hangman at different stages (e.g., hangman-0.svg to hangman-6.svg).

## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to create a pull request or open an issue.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
