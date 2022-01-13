let option = ['rock', 'paper', 'scissors'];
/* key to generating a random array */
function computerPlay() {
    let play = option[Math.floor(Math.random() * option.length)];
    return play;
};

function roundI(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose. Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win. Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\'s a tie.';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It\'s a tie.';
    } else {
        return 'Unofficial round';
    }
};
console.log(roundI(prompt('Enter your choice: '), computerPlay()));









