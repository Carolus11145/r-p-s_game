let option = ['rock', 'paper', 'scissors'];
let playerSelection = prompt('Enter rock, paper or scissors: ');
/* key to generating a random array */
function computerPlay() {
    let play = option[Math.floor(Math.random() * option.length)];
    return play;
};

function roundI (playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose. Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win. Paper beats rock.';
    }
};









