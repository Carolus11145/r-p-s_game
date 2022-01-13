let option = ['rock', 'paper', 'scissors'];
let playerSelection = prompt('Enter rock, paper or scissors: ');
/* key to generating a random array */
function computerPlay() {
    let play = option[Math.floor(Math.random() * option.length)];
    return play;
};

function roundI (playerSelection, computerSelection) {
    computerSelection = console.log(computerPlay());
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose. Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win. Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\'s a tie.';
    } else {
        return 'Unofficial round';
    }
};
console.log(roundI());









