/*
 * Create a list that holds all of your cards
 */

const cards = [
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-cube",
  "fa fa-leaf",
  "fa fa-bicycle",
  "fa fa-bomb",
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-cube",
  "fa fa-leaf",
  "fa fa-bicycle",
  "fa fa-bomb",
]

/*
*GLOBAL VARIABLES
*/

const cardDeck = document.querySelector('.deck');


//CARDS ARRAYS//

let openedCards = [];
let matchedCards = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//CREATE THE GAMEBOARD//

function createBoard() {
  for (let i=0; i < cards.length; i++) {

    const card = document.createElement("li");

    card.classList.add("card");
    card.innerHTML = "<i class='"+ cards[i] + "'</i>";
    cardDeck.appendChild(card);
}


    //CLICKING A CARD TO FLIP IT//

  card.addEventListener('click',function(){
    if (openedCards.length === 1) {

      const secondCard = this;
      const firstCard = openedCards[0];

      card.classList.add("open","show");
      openedCards.push(this);

      //COMPARE 2 OPENED CARDS & SWITCH CLASS WHEN MATCHED//

      if (secondCard.innerHTML === firstCard.innerHTML){

        firstCard.classList.add("match");
        secondCard.classList.add("match");

        matchedCards.push(firstCard,secondCard);

        openedCards=[];

        //CHECK IF GAME IS OVER//
        gameOver();

      } else {

       //setTimeout used for delay until function is used//
        setTimeout(function(){
          firstCard.classList.remove("open","show");
          secondCard.classList.remove("open","show");
        },500);


        openedCards=[];
      }

    } else {
      card.classList.add("open","show");
      openedCards.push(this);
    }

  });

  //ADD NEW MOVE//

addMove();

}

//GAME OVER//

function gameOver(){
  if (matchedCards.length === 16){
    alert("GAME OVER");
  }
}

//COUNTS MOVES DURING THE GAME//

const movesCounter = document.querySelector(".moves");
let moves = 0;
function addMove(){
  moves++;
  movesCounter.innerHTML = moves;

  rating();
}

//STAR RATING//

const starRating = doucment.querySelector(".stars");

function rating(){
  if (moves < 12 ) {
    starRating.innerHTML = star + star + star;
  } else if (moves > 12) {
    starRating.innerHTML = star + star;
  } else (moves > 18) {
    starRating.innerHTML = star;
  }
}

//EVENT LISTENER TO REFRESH PAGE//

const refresh = doucment.querySelector(".restart");

refresh.addEventListener("click",function(){
  cardDeck.innerHTML = "";
  createBoard();
  matchedCards = [];
})

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;

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
