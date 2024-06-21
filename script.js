const letters = document.querySelector(".letters");
const hinte = document.querySelector(".hint b");
const worde = document.querySelector(".word-let");
const guessesText = document.querySelector(".guesses b");
const hangmanImage = document.querySelector(".han-image img");

let currentWord, wrongGuessCount = 0, correctLetters = [];
const maxGuesses = 6;

const getRandomWord = () => {
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    hinte.innerText = hint;
    correctLetters = Array(word.length).fill(false);
    worde.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
    return {word, hint};
};

getRandomWord();

const initGame = (target, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters[index] = true;
                worde.querySelectorAll("li")[index].innerText = clickedLetter;
                worde.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
        guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;
    }
    target.disabled = true; 
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.every(letter => letter)) return gameOver(true);
};

for(let i=0; i<26; i++){
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = String.fromCharCode(97+i);
    letters.appendChild(button);
    button.addEventListener("click", (e) => {
        initGame(e.target, String.fromCharCode(97+i));
    });
}

const handleKeyPress = (event) => {
    const keyPressed = event.key.toLowerCase();
    console.log(`Key pressed: ${keyPressed}`);
    if(keyPressed >= 'a' && keyPressed <= 'z') {
        const button = Array.from(letters.children).find(btn => btn.innerText === keyPressed);
        console.log(`Found button: ${button ? button.innerText : 'none'}`);
        if(button && !button.disabled) {
            initGame(button, keyPressed);
        }
    }
};

document.addEventListener("keydown", handleKeyPress);

const gameOver = (won) => {
    setTimeout(() => {
        alert(won ? "Congratulations! You've won!" : "Game Over! Better luck next time! The correct word was " + currentWord);
        location.reload();
    }, 500);
};
