// Game variables
let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const choiceEmoji = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};
const choiceEnglish = {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors'
};

// Get DOM elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const choiceDisplay = document.getElementById('choice-display');

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

// Computer random choice function
function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine winner function
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Update score function
function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreEl.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }
}

// Display result in English
function displayResult(winner, playerChoice, computerChoice) {
    const playerEmoji = choiceEmoji[playerChoice];
    const computerEmoji = choiceEmoji[computerChoice];
    const playerEnglish = choiceEnglish[playerChoice];
    const computerEnglish = choiceEnglish[computerChoice];
    
    choiceDisplay.textContent = `You chose ${playerEmoji} ${playerEnglish} | Computer chose ${computerEmoji} ${computerEnglish}`;
    
    if (winner === 'player') {
        resultText.textContent = '🎉 You win! Great job! 🎉';
        resultText.style.color = '#28a745';
    } else if (winner === 'computer') {
        resultText.textContent = '💻 Computer wins! Try again! 💻';
        resultText.style.color = '#dc3545';
    } else {
        resultText.textContent = '🤝 It\'s a draw! Try again! 🤝';
        resultText.style.color = '#ffc107';
    }
}

// Main game function
function playGame(playerChoice) {
    const computerChoice = computerPlay();
    const winner = determineWinner(playerChoice, computerChoice);
    
    updateScore(winner);
    displayResult(winner, playerChoice, computerChoice);
    
    // Check for game winner (first to 5 points)
    if (playerScore === 5) {
        setTimeout(() => {
            alert('🏆 Congratulations! You won the game! 🏆');
            resetGame();
        }, 100);
    } else if (computerScore === 5) {
        setTimeout(() => {
            alert('😢 Computer won the game! Try again! 😢');
            resetGame();
        }, 100);
    }
}

// Reset game function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    resultText.textContent = 'Choose your move to start!';
    resultText.style.color = '#333';
    choiceDisplay.textContent = '';
}