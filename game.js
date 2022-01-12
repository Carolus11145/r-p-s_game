let option = ['rock', 'paper', 'scissors'];

/* key to generating a random array */
function computerPlay() {
    let play = option[Math.floor(Math.random() * option.length)];
    return play;
}
alert(computerPlay());


function roundI (playerSelection, computerSelection) {
    playerSelection = prompt('Enter rock. paper or scissors: '); 
    computerSelection = computerPlay();
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose. Paper beats rock.';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win. Paper beats rock.';
    }
};
alert(roundI());








