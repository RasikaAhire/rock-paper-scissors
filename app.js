let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); //3 bcz we want random index from 0 to 2 for above array
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "#000814";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");   //userWin value became true
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");  //userWin value became false
        msg.innerText = `You win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {        
    console.log("User choice =", userChoice);
    //Generate computer choice
    const compChoice = getCompChoice();
    console.log("Comp choice =", compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //here the comp must generated scissors or paper but nor rock 
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //here the comp must generated scissors or rock but nor paper
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //here the comp must generated paper or rock but nor paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});