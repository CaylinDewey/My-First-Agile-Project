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

/** User Wins */
function positive(userChoice, randomChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  randomScoreSpan.innerHTML = randomScore;
}

/** Machine Wins */
function negative(userChoice, randomChoice) {
  randomScore++;
  userScoreSpan.innerHTML = userScore;
  randomScoreSpan.innerHTML = randomScore;
}

/** Draw */
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

 

/** Listener Player Buttons */
function listener() {
  doDiv.addEventListener('click', function () {
    game("do");
    /*feed("do");*/
  });
  noDiv.addEventListener('click', function () {
    game("no");
    /**feed("no");*/
  });
  notSureDiv.addEventListener('click', function () {
    game("notSure");
    /**feed("notSure");*/
  });
}

listener();

/** Feedback Report */ 
let saveCountHome;
let saveCountGuest;
let domHome = document.getElementById("home--count")
let domGuest = document.getElementById("guest--count")

function saveClick() {
    saveCountHome  = userScore + " -- "
    domHome.textContent += saveCountHome;

    saveCountGuest  = randomScore + " -- "
    domGuest.textContent += saveCountGuest;
    
    if (saveCountHome > saveCountGuest) {
      resultP.innerHTML = "Universal feedback says do it!";
    } else if (saveCountHome < saveCountGuest) { 
      resultP.innerHTML = "Universal feedback says don't do it!";
    } else {
    resultP.innerHTML = "Ask for advice from a trusted source!";
    }
  }    
/**
    changeCount.textContent = 0;
    homeCount = 0;
    console.log(homeCount)
    guestCountChange.textContent = 0;
    guestCount = 0;
    console.log(guestCount)
} */