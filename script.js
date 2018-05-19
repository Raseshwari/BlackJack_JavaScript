/*
  BlackJack Implementation
*/

//Card Variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two'
  ];

//DOM variables
let textArea = document.getElementById("para");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    cardDeck = [];
    

hitButton.style.display = "none";
stayButton.style.display = "none";
showStatus();

newGameButton.addEventListener('click',function(){
  
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  cardDeck = createCardDeck();
  shuffleCardDeck(cardDeck);
  playerCards = [getNextCard(), getNextCard()];
  dealerCards = [getNextCard(), getNextCard()];
  
  newGameButton.style.display = "none";
  hitButton.style.display = "inline";
  stayButton.style.display = "inline";
  showStatus();
});


function createCardDeck()
{
  let cardDeck = [];
  for(let sIndex = 0; sIndex<suits.length; sIndex++)
  {
    for(vIndex = 0; vIndex<values.length; vIndex++)
    {
      let card = {
        
        suit: suits[sIndex],
        value: values[vIndex]
      };
      
      cardDeck.push(card);
    }
  }
  return cardDeck;
}

function getCardAsString(card)
{
  return card.value + " of " + card.suit;
}

function getNextCard()
{
  return cardDeck.shift();
}

function shuffleCardDeck(cardDeck)
{
  for(let i = 0; i<cardDeck.length; i++)
  {
    let swapIndx = Math.trunc(Math.random()*cardDeck.length);
    let temp = cardDeck[swapIndx];
    cardDeck[swapIndx] = cardDeck[i];
    cardDeck[i] = temp;
  }
}


function showStatus()
{
  if(!gameStarted)
  {
    textArea.innerText = "Welcome to BlackJack!!"
  }else
  {
    textArea.innerText = "Game Started.."
  }
  
  let dealerCardString = '';
  for(let i = 0; i<dealerCards.length; i++)
  {
    dealerCardString +=getCardAsString(dealerCards[i])+"\n";
  }
  
  let playerCardString = '';
  for(let i = 0; i<playerCards.length; i++)
  {
    playerCardString +=getCardAsString(playerCards[i])+"\n";
  }
  
  updateScores();
  
  textArea.innerText = 
  "Dealer has:"+"\n"+
  dealerCardString+"\n Score:"+dealerScore+
  "\n\n"+
  "Player has:"+"\n"+
  playerCardString+"\n Score:"+playerScore+
  "\n\n";
  
  if(gameOver)
  {
    if(playerWon)
    {
      textArea.innerText += "YOU WIN!";
    }else{
      textArea.innerText += "DEALER WINS"
    }
    
    newGameButton.style.display = "inline";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
  }
}










