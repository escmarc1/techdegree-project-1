/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// ME Notes:
  // How do I generate a random number
  // HOw do I use that number to get a quote object from the quotes array


/*** 
 * `quotes` array 
***/

var quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    source: 'Mahatma Gandhi',
  },
  {
    quote: 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
    source: 'J.K. Rowling',
    citation: 'Harry Potter and the Goblet of Fire',
  },
  {
    quote: 'If you tell the truth, you don\'t have to remember anything.',
    source: 'Mark Twain',
  },
  {
    quote: 'Here\'s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They\'re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can\'t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.',
    source: 'Rob Siltanen',
    citation: 'Apple\'s Macintosh Commercial',
    year: '1984'
  }
]


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);