/*
  BlackJack Implementation
*/

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two'
  ];

let cardDeck = [];

for(let sIndex = 0; sIndex<suits.length; sIndex++)
{
  for(vIndex = 0; vIndex<values.length; vIndex++)
  {
    cardDeck.push(values[vIndex]+" of "+suits[sIndex]);
  }
}

console.log(cardDeck.splice(0,52))