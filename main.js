// document.querySelector("h1").style.color = "red";

let quotesArr = [
    "Resentment is like drinking poison and waiting for your enemies to die.",
    "Be yourself; everyone else is already taken.",
    "It's not what happens to you, but how you react to it that matters.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "If you tell the truth, you don't have to remember anything."
   ];

let authorArr = [
   "Nelson Mandela", 
   "Oscar Wilde", 
   "Epictetus",
   "Albert Einstein",
   "Mark Twain"
];

let idx = -1;
function randRange(l = 0, r = quotesArr.length) {
  return Math.ceil(Math.random() * (r - l)) - 1;
}

function getQuote() {
  while (true) {
    let x = randRange();
    if (x != idx) {
      idx = x;
      break;
    }
  }
  document.getElementById("quote").textContent = "\"" + quotesArr[idx]+"\"";
  document.getElementById("author").textContent = "- " + authorArr[idx];
}

document.getElementById("newQuoteButton").addEventListener("click", getQuote);
