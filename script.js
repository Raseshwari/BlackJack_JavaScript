/*
  BlackJack Implementation
*/

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two'
  ];



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

let cardDeck = createCardDeck();

let playerCards = [getNextCard(), getNextCard()]

console.log("Welcome to BlackJack");

console.log("You're dealt: ")
console.log(" "+getCardAsString(playerCards[0]));
console.log(" "+getCardAsString(playerCards[1]));








