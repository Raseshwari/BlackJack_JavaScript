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

hitButton.addEventListener('click', function(){
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

stayButton.addEventListener('click', function(){
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});

function checkForEndOfGame()
{
  updateScores();
  
  if(gameOver)
  {
    //let dealer take cards
    while(dealerScore < playerScore 
    && playerScore <=21
    && dealerScore <=21)
    {
      dealerCards.push(getNextCard());
      updateScores();
    }
  }
  
  if(playerScore > 21)
  {
    playerWon = false;
    gameOver = true;
  }else if(dealerScore > 21)
  {
    playerWon = true;
    gameOver = true;
  }else if(gameOver)
  {
    if(playerScore > dealerScore)
    {
      playerWon = true;
    }
    else
    {
      playerWon = false;
    }
    
    if(playerScore === dealerScore)
    {
      textArea.innerText = "Its a tie!"
    }
    
    // newGameButton.style.display = 'inline';
    // hitButton.style.display = 'none';
    // stayButton.style.display = 'none';
  }
}

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

function getCardNumericValue(card)
{
  switch(card.value){
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}


function getScore(cardArray)
{
  let cardScore = 0;
  let hasAce = false;
  for(let i = 0; i < cardArray.length; i++)
  {
    let card = cardArray[i];
    cardScore += getCardNumericValue(card);
    if(card.value === 'Ace')
    {
      hasAce = true;
    }
  }
  
  if(hasAce && cardScore +10 <=21)
  {
    return cardScore+10;
  }
  return cardScore;
}

function updateScores()
{
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function showStatus()
{
  if(!gameStarted)
  {
    textArea.innerText = "Welcome to BlackJack!!"
    return;
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
    hitButton.style.display = "none";
    stayButton.style.display = "none";
  }
}












