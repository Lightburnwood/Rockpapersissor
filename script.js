
let wins = 0;
let loss = 0;

const playerscore = document.getElementById("player");
const computerscore = document.getElementById("computer");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const sissor = document.getElementById("s");
const last = document.getElementById("result");
const playerresult = document.getElementById("playerresult")
const computerresult = document.getElementById("computerresult")

    function getcomputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random() * 3 );
    return choices[randomnumber];
}

function getEmoji(choice) {
    switch (choice) {
        case 'r':
            return '✊';
        case 'p':
            return '✋'; 
        case 's':
            return '✌️';
    }
}





function win(userchoice, computerchoice) {
    wins++;
    playerscore.innerHTML = wins;
    computerscore.innerHTML = loss;
    last.innerHTML = `YOU WIN!`;
    playerresult.innerHTML = getEmoji(userchoice);
    computerresult.innerHTML = getEmoji(computerchoice);
}



function lost(userchoice, computerchoice) {
    loss++;
    playerscore.innerHTML = wins;
    computerscore.innerHTML = loss;
    last.innerHTML = `YOU LOST!`;
    playerresult.innerHTML = getEmoji(userchoice);
    computerresult.innerHTML = getEmoji(computerchoice);
}



function draw(userchoice, computerchoice) {
    playerscore.innerHTML = wins;
    computerscore.innerHTML = loss;
    last.innerHTML = `IT'S A DRAW`;
    playerresult.innerHTML = getEmoji(userchoice);
    computerresult.innerHTML = getEmoji(computerchoice);
}




function game(userchoice) {
    const computerchoice = getcomputerChoice();
    switch(userchoice+computerchoice){
    

         case "rs":
         case "pr":
         case "sp":
            win(userchoice, computerchoice);
            break;
         case "rp":
         case "ps":
         case "sr":
            lost(userchoice, computerchoice);
            break;
         case "rr":
         case "pp":
         case "ss":
            draw(userchoice, computerchoice);
            break;
           
    }
}



function main(){

    rock.addEventListener('click', function(){
        game("r"); 
    })
    paper.addEventListener('click', function(){
        game("p"); 
    })
    sissor.addEventListener('click', function(){
        game("s"); 
    })
   
}

main();
