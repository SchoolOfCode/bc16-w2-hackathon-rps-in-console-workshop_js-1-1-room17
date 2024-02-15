let startGame = confirm('Do you want to play a game of Rock, Paper and Scissor?')

while(startGame === true){
    confirm('Welcome to the Game! \nYou will input 1 for Rock, 2 for Paper or 3 for Scissor. \nAre you ready to begin?')
    
    let guess = Number(prompt('3, 2, 1, Go!!! \nRemember that 1 is for Rock, 2 is for Paper and 3 is for Scissors.'));
    let answer = Math.ceil(Math.random() * 3)

    //make a if statement to compare guess to answer
    if(guess === 1 && answer === 3){
        alert('Congratulations! Your rock beat the computers scissors.')
    }else if (guess === 2 && answer === 1){
        alert('Congratulations! Your paper beat the computers rock.')
    }else if (guess === 3 && answer === 2){
        alert('Congratulations! Your scissors beat the computers paper.')
    }

    if(guess === 1 && answer === 2){
        alert('Unlucky! Your rock lost to the computers paper.')
    } else if(guess === 2 && answer === 3){
        alert('Unlucky! Your paper lost to the computers scissors.')
    } else if(guess === 3 && answer === 1){
        alert('Unlucky! Your scissors lost to the computers rock.')
    }
    
    if(guess === answer){
        alert('Unlucky! You drew with the computer.')
    }

    // need to add the following logic
    // rock 1 > scissors 3
    // scissors 3 > paper 2
    // paper 2 > rock 1


    
    break;
}