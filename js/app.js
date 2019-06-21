//ARRAY THAT HOLDS ALL THE PLAYING CARDS//

const cards = [
  "fa fa-anchor",
  "fa fa-anchor",
  "fa fa-bicycle",
  "fa fa-bicycle",
  "fa fa-bolt",
  "fa fa-bolt",
  "fa fa-bomb",
  "fa fa-bomb",
  "fa fa-cube",
  "fa fa-cube",
  "fa fa-diamond",
  "fa fa-diamond",
  "fa fa-leaf",
  "fa fa-leaf",
  "fa fa-paper-plane-o",
  "fa fa-paper-plane-o"
];


const cardDeck = document.querySelector(".deck");
let isFirstClick = true;

//CARDS ARRAYS WHERE CARDS GET PUSHED TO//

let openedCards = [];
let matchedCards = [];


//CREATE THE GAMEBOARD//

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

shuffle(cards);

for (let i = 0; i < cards.length; i++) {
  const card = document.createElement("li");

  card.classList.add("card");
  card.innerHTML = "<i class='" + cards[i] + "'</i>";
  cardDeck.appendChild(card);

  //CLICKING A CARD TO FLIP IT//
  /*
   * Listening for a card click
   * Starting timer and move counter
   */

  card.addEventListener("click", function() {

    if(isFirstClick) {
      startTimer();
      isFirstClick = false;
    }


    if (openedCards.length === 1) {
      const secondCard = this;
      const firstCard = openedCards[0];

      card.classList.add("open", "show");
      openedCards.push(this);

      //COMPARE 2 OPENED CARDS & SWITCH CLASS WHEN MATCHED//

      if (secondCard.innerHTML === firstCard.innerHTML) {
        firstCard.classList.add("match");
        secondCard.classList.add("match");

        matchedCards.push(firstCard, secondCard);

        openedCards = [];

        addMove();

        //CHECK IF GAME IS OVER//

        gameOver();
      } else {

        //setTimeout used for delay until function is used//
        setTimeout(function() {
          firstCard.classList.remove("open", "show");
          secondCard.classList.remove("open", "show");

          addMove();
        }, 500);

        openedCards = [];
      }
    } else {
      card.classList.add("open", "show");
      openedCards.push(this);
    }
  });

}

//GAME OVER//
function gameOver() {
  if (matchedCards.length === 16) {
    stopTimer();
    window.confirm(
      "Game over, congrats!" +
        "\n Time to Complete:\n" +
        totalSeconds +
        "seconds" +
        "\n Moves Taken:\n" +
        moves +
        "\n Your Star Rating is:\n" +
        starCount
    );
    if (confirm("Are you sure?")) {
      location.reload();
    } else {
      txt = "You pressed Cancel!";
    }
  }
}


//COUNTS MOVES DURING THE GAME//

const movesCounter = document.querySelector(".moves");
let moves = 0;
function addMove() {
  moves++;
  movesCounter.innerHTML = moves;

  rating();
}

//STAR RATING//

const starRating = document.querySelector(".stars");
const star = `<li><i class="fa fa-star"></i></li>`;

function rating() {
  if (moves <= 12) {
    starRating.innerHTML = star + star + star;
    starCount = 3;
  } else if (moves > 12 && moves <= 18) {
    starRating.innerHTML = star + star;
    starCount = 2;
  } else {
    starRating.innerHTML = star;
    starCount = 1;
  }
}

//CREATE TIMER//

const timerContainer = document.querySelector(".timer");

let liveTimer,
  totalSeconds = 0;

timerContainer.innerHTML = totalSeconds;

function startTimer (){
  liveTimer = setInterval (function(){
    totalSeconds ++;
    timerContainer.innerHTML = totalSeconds;
  },1000);
}

function stopTimer() {
  clearInterval(liveTimer);
}

//EVENT LISTENER TO REFRESH PAGE//

const refresh = document.querySelector(".restart");

refresh.addEventListener("click", function() {
  location.reload();
});

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cards) {
  var currentIndex = cards.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
