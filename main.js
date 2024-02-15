let startGame = confirm('Do you want to play a game of Rock, Paper and Scissor?')

while(startGame === true){
    confirm('Welcome to the Game! You will input 1 for Rock, 2 for Paper or 3 for Scissor. Are you ready to begin?')
    
    let guess = Number(prompt('3 2 1 Go!!!'));
    let answer = Math.ceil(Math.random() * 3)

    //make a if statement to compare guess to answer
    if(guess === answer){
        alert('Congratulations! You win.')
    }else {
        alert('Failed')
    }
    
    console.log(`${typeof guess}`)
    break;
}