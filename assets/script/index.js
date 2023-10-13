/** add DOM variables to js 1 */
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/** add random machine choice 3 */
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
/** add machine choice to user choice 4 */
function game(userChoice) {
  const computerChoice = getComputerChoice();
 console.log("userChoice =>" + userChoice );
 console.log("computer choice =>" + computerChoice);

}



/**add event listers 2 */
function main () {
  rock_div.addEventListener('click', function() {
  game("r");
  })
  paper_div.addEventListener('click', function() {
  game("p");
  })
  scissors_div.addEventListener('click', function() {
  game("s");
  })
}

main();
