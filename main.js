let username = prompt(`Enter your name!`);
let startGame = confirm('Do you want to play a game of Rock, Paper and Scissor? 😁')
let score = 0;
let pcScore = 0;


isEmpty(username)

function isEmpty(x){
    while(x.length > 10 || !/^[a-zA-Z]+$/.test(x) || !x){
        username = prompt(`You've entered a invalid name.\nEnter a name between 1 and 10 characters.`);
        if(username.length < 10 && username.length > 1 && /^[a-zA-Z]+$/.test(x)){
            break;
        }
    }
}


if (startGame === true){
    startGame = confirm('Welcome to the Game!\nYou will input:\n1 for Rock ⚫ \n2 for Paper 📜\n3 for Scissor ✂ \nAre you ready to begin?');
} else {
    alert(`Sorry you don't want to play \nIf you want to replay press f5`)
}
 
    
while(startGame === true){
   
    let playAgain;
    let guess = Number(prompt('3, 2, 1, Go!!! \nRemember that:\n1 for Rock ⚫ \n2 for Paper 📜\n3 for Scissor ✂.'));
    let answer = Math.ceil(Math.random() * 3)
    let reset;
    username = username.charAt(0).toLocaleUpperCase() + username.slice(1);

    //make a if statement to compare guess to answer 
    if(guess === 1 && answer === 3){
        score++
        alert(`Congratulations ${username}! 👏 Your rock beat the computers scissors.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }else if (guess === 2 && answer === 1){
        score++
        alert(`Congratulations ${username}! 🎉 Your paper beat the computers rock.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }else if (guess === 3 && answer === 2){
        score++
        alert(`Congratulations ${username}! 🍾 Your scissors beat the computers paper.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }

    if(guess === 1 && answer === 2){
        pcScore++
        alert(`Unlucky ${username}! 😥 Your rock lost to the computers paper.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    } else if(guess === 2 && answer === 3){
        pcScore++
        alert(`Unlucky ${username}! 😥 Your paper lost to the computers scissors.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    } else if(guess === 3 && answer === 1){
        pcScore++
        alert(`Unlucky ${username}! 😥 Your scissors lost to the computers rock.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }
    
    if(guess === answer){
        score++
        pcScore++
        alert(`What are the odds! 😮 You drew with the computer.\nYour score now is: ${score}.\nThe computer score now is: ${pcScore}.`)
    }

    // logic
    // rock 1 > scissors 3
    // scissors 3 > paper 2
    // paper 2 > rock 1

    playAgain = confirm(`${username}, do you want to play again?`)
    if(playAgain !== true){  
        break;
    } else if(playAgain === true){
        reset = confirm(`If you would like to continue with your current score, press "OK".\nIf you would like to reset your score to zero, press "Cancel".`)
    }
    if(reset !== true){
        score = 0;
        pcScore= 0;
    }


    //PLAN

    //what happens when you put an answer in that is not 1, 2 or 3?

    
    
}