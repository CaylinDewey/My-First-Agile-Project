const doDiv = document.getElementById("do");
const noDiv = document.getElementById("no");
const notSureDiv = document.getElementById("notSure");
const resultP = document.querySelector(".instruction > p");
const userScoreSpan = document.getElementById("scoreDo");
const randomScoreSpan = document.getElementById("scoreNot");
let userScore = 0;
let randomScore = 0;

/**  randomNumber holds getrandomChoice */
function getrandomChoice() {
  const options = ['do', 'no', 'notSure'];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}

/** I want to Button */
function positive(userChoice, randomChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  randomScoreSpan.innerHTML = randomScore;
}

/** I dont want to Button */
function negative(userChoice, randomChoice) {
  randomScore++;
  userScoreSpan.innerHTML = userScore;
  randomScoreSpan.innerHTML = randomScore;
}

function notSure(userChoice, randomChoice) {
  randomScore++;
  userScoreSpan.innerHTML = userScore;
  randomScoreSpan.innerHTML = randomScore;
}

/** Game */
function game(userChoice) {
  const randomChoice = getrandomChoice();
  switch (userChoice + randomChoice) {
    case "donotSure":
    case "nodo":
    case "notSureno":
    positive(userChoice, randomChoice);
      break;
    case "dono":
    case "nonotSure":
    case "notSuredo":
    negative(userChoice, randomChoice);
      break;
    case "dodo":
    case "nono":
    case "notSurenotSure":
    notSure (userChoice, randomChoice);
      break;
  }
}

/** Result Feedback */
function feed(action){
  if (userScore > randomScore) {
    resultP.innerHTML = "Universal feedback says do it!";
  } else if (userScore < randomScore) { 
    resultP.innerHTML = "Universal feedback says don't it!";
  } else {
  resultP.innerHTML = "Ask for advice from a trusted source!";
  }} 

/** Listener Player Buttons */
function listener() {
  doDiv.addEventListener('click', function () {
    game("do");
    feed();
  });
  noDiv.addEventListener('click', function () {
    game("no");
    feed();
  });
  notSureDiv.addEventListener('click', function () {
    game("notSure");
    feed();
  });
}

listener();

// save items 

let saveCountHome;
let saveCountGuest;
let domHome = document.getElementById("home--count")
let domGuest = document.getElementById("guest--count")

function saveClick() {
    saveCountHome  = userScore + " -- "
    domHome.textContent += saveCountHome;

    saveCountGuest  = randomScore + " -- "
    domGuest.textContent += saveCountGuest;

    changeCount.textContent = 0;
    homeCount = 0;
    guestCountChange.textContent = 0;
    guestCount = 0;

}
