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

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//CREATE THE GAMEBOARD//

for (let i=0; i < cards.length; i++) {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = "<i class='"+ cards[i] + "'</i>";
  cardDeck.appendChild(card);
  
    //CLICKING A CARD TO FLIP IT//

  card.addEventListener('click',function(){
    if (openedCards === 1) {
      card.classList.add("open","show");
      openedCards.push(this);

      //COMPARE 2 OPENED CARDS//

      if (this.innerHTML === openedCards[0].innerHTML){
        console.log("matched");
      } else {
        console.log("doesn't match");
      }

    } else {
      card.classList.add("open","show");
      openedCards.push(this);
    }

  });
}

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
