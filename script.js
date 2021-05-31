function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(`You played ${playerSelection}`);
    console.log(`Computer played ${computerSelection}`);

    if (playerSelection === computerSelection) return 2;

    if (playerSelection === "rock") {
        return (computerSelection === "scissors") ? 1 : 0;
    } else if (playerSelection === "paper") {
        return (computerSelection === "rock") ? 1 : 0;
    } else {
        return (computerSelection === "paper") ? 1 : 0;
    }

}

// function game() {
//     let player_score = 0;
//     let comp_score = 0;
//     let end_msg = "";

//     while (player_score < 5 && comp_score < 5) {
//         let input = prompt("Play rps", "rock");

//         //winner 1 = player, 0 = computer
//         let winner = playRound(input, computerPlay());
//         if (winner === 1) {
//             player_score++;
//         } else {
//             comp_score++;
//         }
//         console.log(`Player score: ${player_score}`);
//         console.log(`Computer score: ${comp_score}`);

//     }

//     end_msg = (player_score === 5) ? "You win" : "You lost";
//     console.log(end_msg);
// }

//game();
let player_score = 0;
let comp_score = 0;
let end_msg = "";

    
function computerPlay() {
    let hand = Math.floor(Math.random() * 3)
    switch (hand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
document.getElementById("p_rock").addEventListener("click", function() {
    console.log("You pressed rock!");
    
    let winner = playRound("rock", computerPlay());
    
    if (winner === 1) {
        player_score++;
    } else if(winner === 0) {
        comp_score++;
    }

    if(player_score === 5){
        console.log(`Player wins!`);
        player_score = 0;
        comp_score = 0;
    }else if(comp_score === 5){
        console.log(`Computer wins!`);
        player_score = 0;
        comp_score = 0;
    }

    console.log(`Player score: ${player_score}`);
    console.log(`Computer score: ${comp_score}`);
});

document.getElementById("p_scissors").addEventListener("click", function() {
    console.log("You pressed rock!");
    
    let winner = playRound("rock", computerPlay());
    
    if (winner === 1) {
        player_score++;
    } else if(winner === 0) {
        comp_score++;
    }

    if(player_score === 5){
        console.log(`Player wins!`);
        player_score = 0;
        comp_score = 0;
    }else if(comp_score === 5){
        console.log(`Computer wins!`);
        player_score = 0;
        comp_score = 0;
    }

    console.log(`Player score: ${player_score}`);
    console.log(`Computer score: ${comp_score}`);
});

document.getElementById("p_paper").addEventListener("click", function() {
    console.log("You pressed rock!");
    
    let winner = playRound("rock", computerPlay());
    
    if (winner === 1) {
        player_score++;
    } else if(winner === 0) {
        comp_score++;
    }

    if(player_score === 5){
        console.log(`Player wins!`);
        player_score = 0;
        comp_score = 0;
    }else if(comp_score === 5){
        console.log(`Computer wins!`);
        player_score = 0;
        comp_score = 0;
    }

    console.log(`Player score: ${player_score}`);
    console.log(`Computer score: ${comp_score}`);
});