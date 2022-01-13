let option = ['rock', 'paper', 'scissors'];
/* key to generating a random array */
function computerPlay() {
    let play = option[Math.floor(Math.random() * option.length)];
    return play;
};

function game(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose. Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win. Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\'s a tie.';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It\'s a tie.';
    } else if  (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win. Rock beats scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose. Rock beats scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It\'s a tie.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose. Paper beats scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win. Scissors beats paper.';
    } else {
        return 'Invalid input';
    };
};
console.log(game(prompt('Choose between rock, paper or scissors: '), computerPlay()));
console.log(game(prompt('Choose between rock, paper or scissors: '), computerPlay()));
console.log(game(prompt('Choose between rock, paper or scissors: '), computerPlay()));
console.log(game(prompt('Choose between rock, paper or scissors: '), computerPlay()));
console.log(game(prompt('Choose between rock, paper or scissors: '), computerPlay()));




