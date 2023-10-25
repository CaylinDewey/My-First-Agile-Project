const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const spockDiv = document.getElementById("spock");
const lizardDiv = document.getElementById("lizard");
const resultP = document.querySelector(".instruction > p");
const userScoreSpan = document.getElementById("scoreUser");
const randomScoreSpan = document.getElementById("scoreUni");
let userScore = 0;
let randomScore = 0;
let runUserScore = 0;
let runRandomScore = 0;

/**  randomNumber holds getrandomChoice */
function getrandomChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}

/** User Wins */
function userWins(userChoice, randomChoice) {
  userScore++;
  runUserScore++;
  userScoreSpan.innerHTML = userScore;
  randomScoreSpan.innerHTML = randomScore;
  resultP.innerHTML = `Universe chooses:  ${(randomChoice)} - you win!!!`
}

/** Machine Wins */
function uniWins(userChoice, randomChoice) {
  randomScore++;
  runRandomScore++;
  userScoreSpan.innerHTML = userScore;
  randomScoreSpan.innerHTML = randomScore;
  resultP.innerHTML = `Universe chooses:  ${(randomChoice)} - you lose!!!`
}

/** Draw */
function draw(userChoice, randomChoice) {
  randomScore++;
  runRandomScore++;
  userScoreSpan.innerHTML = userScore;
  randomScoreSpan.innerHTML = randomScore;
  resultP.innerHTML = `Universe chooses:  ${(randomChoice)} - it's a draw, have another round!`
}

/** Game */
function game(userChoice) {
  const randomChoice = getrandomChoice();
  switch (userChoice + randomChoice) {
    case "rockscissors":
    case "rocklizard":
    case "paperrock":
    case "paperspock":
    case "lizardpaper":
    case "lizardspock":
    case "spockscissors":
    case "spockrock":
    case "scissorslizard":
    case "scissorspaper":
      userWins(userChoice, randomChoice);
      break;
    case "rockpaper":
    case "rockspock":
    case "paperlizard":
    case "paperscissors":
    case "lizardscissors":
    case "lizardrock":
    case "spockpaper":
    case "spocklizard":
    case "scissorsspock":
    case "scissorsrock":
      uniWins(userChoice, randomChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "spockspock":
    case "lizardlizard":
      draw(userChoice, randomChoice);
      break;

  }
}

/** Result Feedback    
function feed(action){
  const feedHome = userScore;
  const feedGuest = randomScore;
  feedback++;
  feedGuest++;
  if (feedHome > feedGuest) {
    resultP.innerHTML = "Universal feedback says do it!";
  } else if (feedHome < feedGuest) { 
    resultP.innerHTML = "Universal feedback says don't it!";
  } else {
  resultP.innerHTML = "Ask for advice from a trusted source!";
  }}
  */
const add = (x, y) => x + y;
console.log(add(2, 3));


/** Listener Player Buttons */
function listener() {
  rockDiv.addEventListener('click', function () {
    game("rock");
  });
  paperDiv.addEventListener('click', function () {
    game("paper");  
  });
  scissorsDiv.addEventListener('click', function () {
    game("scissors");
  });
  spockDiv.addEventListener('click', function () {
    game("spock");
  });
  lizardDiv.addEventListener('click', function () {
    game("lizard");
  });
}

listener();

/** Feedback Report */
let saveCountHome;
let saveCountGuest;
let domHome = document.getElementById("home--count")
let domGuest = document.getElementById("guest--count")

function saveClick() {
  saveCountHome = runUserScore + " -- "
  domHome.textContent += saveCountHome;

  saveCountGuest = runRandomScore + " -- "
  domGuest.textContent += saveCountGuest;
}
/**
    changeCount.textContent = 0;
    homeCount = 0;
    console.log(homeCount)
    guestCountChange.textContent = 0;
    guestCount = 0;
    console.log(guestCount)
} */
