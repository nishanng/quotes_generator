// Getting elements from HTML
const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
const newQuoteBtn = document.getElementById("newquote");
const twitterBtn = document.getElementById("twitter");

// Fetching a random quote from the API
async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    // Displaying the quote and author on the page
    quoteText.textContent = data.content;
    quoteAuthor.textContent = data.author;
  } catch (error) {
    console.log(error);
  }
}

// Tweeting the current quote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(tweetUrl, "_blank");
}

// Adding event listeners to the buttons
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Calling the getQuote function on load
getQuote();