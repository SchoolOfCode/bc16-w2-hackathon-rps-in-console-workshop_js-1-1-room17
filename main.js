let startGame = confirm('Do you want to play a game of Rock, Paper and Scissor? 😁')
let score = 0;
let pcScore = 0;

if (startGame === true){
    confirm('Welcome to the Game!\nYou will input:\n1 for Rock ⚫ \n2 for Paper 📜\n3 for Scissor ✂ \nAre you ready to begin?')
    }
while(startGame === true){
   
    let playAgain;
    let guess = Number(prompt('3, 2, 1, Go!!! \nRemember that:\n1 for Rock ⚫ \n2 for Paper 📜\n3 for Scissor ✂.'));
    let answer = Math.ceil(Math.random() * 3)

    //make a if statement to compare guess to answer 
    if(guess === 1 && answer === 3){
        score++
        alert(`Congratulations! 👏 Your rock beat the computers scissors.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }else if (guess === 2 && answer === 1){
        score++
        alert(`Congratulations! 🎉 Your paper beat the computers rock.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }else if (guess === 3 && answer === 2){
        score++
        alert(`Congratulations! 🍾 Your scissors beat the computers paper.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }

    if(guess === 1 && answer === 2){
        pcScore++
        alert(`Unlucky! 😥 Your rock lost to the computers paper.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    } else if(guess === 2 && answer === 3){
        pcScore++
        alert(`Unlucky! 😥 Your paper lost to the computers scissors.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    } else if(guess === 3 && answer === 1){
        pcScore++
        alert(`Unlucky! 😥 Your scissors lost to the computers rock.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }
    
    if(guess === answer){
        score++
        pcScore++
        alert(`What are the odds! 😮 You drew with the computer.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }

    // need to add the following logic
    // rock 1 > scissors 3
    // scissors 3 > paper 2
    // paper 2 > rock 1

    playAgain = confirm('Do you want to play again?')
    if(playAgain !== true){
        break;
    }

    //option to replay with same score or reset to 0

    
}