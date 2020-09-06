var cards = document.querySelector('#gameCards'); //selecting id gameCards (attached to main element)

cards.addEventListener('click', handleClick); //event listener for a click on the main element

var firstCardClicked;  // store the 1st card clicked

var secondCardClicked;  // store the 2nd card clicked

var firstCardClasses;  //store the classes of card-front siblings to the card first when clicked

var secondCardClasses; // store the classes of the card-front siblings to the second card when clicked

var maxMatches = 9; //contain a value that represents amount of matches required to win the game

var matches = 0; //track amount of matches the user has completed during the game

var attempts = 0; //track number of attempted matches

var gamesPlayed = 0; // track number of games player has played


function handleClick(event) {
  if (event.target.className.indexOf("card-back") === -1) { //if clicked element is not ".card-back", leave the function
    return;
  }
  event.target.className += ' hidden'; //adding hidden class to event.target which is div.card-back

  if (!firstCardClicked) { //not the first card clicked
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.className;

  } else {
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.previousElementSibling.className;
    cards.removeEventListener('click', handleClick)


    if (firstCardClasses === secondCardClasses) {
      firstCardClicked = null; //resetting global variables around each round
      secondCardClicked = null;
      cards.addEventListener('click', handleClick); //whether the cards match or not, you need to click for next round
      attempts++;
      matches++ //adds every time the user gets a match
      displayStats();

      if (maxMatches === matches) { //if they win the game
        var showModal = document.querySelector('.modal-overlay');
        showModal.classList.remove('hidden');
      }

    } else {
      setTimeout(function () { //waiting to hide again
        firstCardClicked.classList.remove('hidden');
        secondCardClicked.classList.remove('hidden');
        firstCardClicked = null; //resetting global variables after each round
        secondCardClicked = null;
        cards.addEventListener('click', handleClick); //whether the cards match or not, you need to click for next round
      }, 1500)
      attempts++;
      displayStats();
    }
  }
}

function displayStats() {
  var gamesPlayedStats = document.getElementById('numGamesPlayed');
  gamesPlayedStats.textContent = gamesPlayed;

  var attemptsStats = document.getElementById('numAttempts');
  attemptsStats.textContent = attempts;

  var accuracyStats = document.getElementById('numAccuracy');
  accuracyStats.textContent = calculateAccuracy(attempts, matches);
}

function calculateAccuracy(attempts, matches) {
  return Math.trunc((matches / attempts)*100) + '%'
}
