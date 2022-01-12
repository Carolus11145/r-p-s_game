let option = ['rock', 'paper', 'scissors'];
/* key to generating a random array */
function computerPlay () {
    let play = option[Math.floor(Math.random() * option.length)];
    return play;
}
console.log(computerPlay());
