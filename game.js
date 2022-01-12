let option = ['rock', 'paper', 'scissors'];

function computerPlay () {
    let play = Math.random() * option.length;
    return play;
}
console.log(computerPlay());
