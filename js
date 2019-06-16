/*
 * Creation of a list that holds all of your cards
 */
 var count=0;
 var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
var cCards = [];
let mCards = document.getElementsByClassName("match");
//opening the card
cards.filter(function (card) {
  card.addEventListener('click', displayCards);
});
var timeStatus = true;
function displayCards() {
  if (timeStatus == true) {
    timeStatus = false;
    //timer stars here
    timerCreation();
  }
  //comparition of two cards
  if (!this.classList.contains('open') && cCards.length< 2) {
    //adding class to open the card
    this.classList.add('open', 'show', 'disabled');
    cCards.push(this);
    //pushing the cards matched into the cardsMatched array
    cardsMatched();
  }
}
//shuffling of cards
var deck = document.querySelector(".deck");
var cardShuffle = shuffle(cards);
 cardShuffle.filter(function () {
   [].filter.call(cards, function(items) {
     deck.appendChild(items);
   });
});
//function which performs operations on matched cards
function cardsMatched() {
  moveCounter();
  setTimeout(function() {
    if (cCards.length === 2) {
      //comparition of two cards
      if (cCards[0].children[0].classList.item(1) === cCards[1].children[0].classList.item(1)) {
        cCards.map(i => {
          i.classList.add('match','disabled');
          i.classList.remove('open', 'show');
          //after operation on matched cards are done the cardsMatched array should be emptied
          cCards = [];
          count=count+1;
        });
        var interval;
        if(count==16){
        clearInterval(interval);
        game();
        //function used for stoping time if the player wins the game
        var killId = setTimeout(function() {
          for (var i = killId; i > 0; i--) clearInterval(i)
        }, 1000);
         }
      } else {
        //if the cards doesnot match all the classes are removied
        cCards.filter(function(openCard) {
            openCard.classList.remove('open', 'show', 'disabled', 'match');
        });
      }
      cCards = [];

    }
  }, 300);
}

var move = document.querySelector('.moves');
//function to estimate moves
function moveCounter() {
  moves = move.innerHTML;
  moves++;
  move.innerHTML = moves;
  //calling function of rating system
  starRating();
}
var timer = document.querySelector('.timer');
var sec = 0,
  mins = 0,
  hours = 0;
//function that displays the content of the sweet alert pop-up
  function game() {
    swal({
      allowEscapeKey:false,
      allowOutsideClick:false,
      html:true,
      title:'you won the game',
      text:'With '+moves+' moves'+' '+mins+' '+' minutes'+' '+sec+' '+' seconds'+' '+'Rating : '+rate,
      type:'success',
      confirmButtonText:'Do you want to play again..!!'
    },function() {
      //operation that has to be performed after clicking the button
      location.reload();
    }
  )
}
//function that estimates time which will be runnning each second
function timerCreation() {
  timerInterval = setInterval(function() {
    sec++;
    if (sec == 60) {
      mins++;
      sec = 0;
    }
    if (mins == 60) {
      mins = 0;
      hours++;
    }
    //displaying the time
    timer.innerHTML = hours + " : " + mins + " : " + sec;
  }, 1000);
}
var stars = [...document.querySelectorAll('.fa-star')];
var rate=3;
//function that calculate the rating based on moves
function starRating() {
  if (moves == 10) {
    stars[2].classList.add('fa-star-o');
    stars[2].classList.remove('fa-star');
    rate=rate-1;
  } else if (moves == 20) {
    stars[1].classList.add('fa-star-o');
    stars[1].classList.remove('fa-star');
    rate=rate-1;
  }
  else if(moves >= 30){
    rate=1;
  }
}
var matchCount = 0;
function reload() {
  window.location.reload();
}
//caller function of shuffling cards
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  if (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

