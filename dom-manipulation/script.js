
const quotes = {
  motivation: [
    "Push yourself because no one else is going to do it for you.",
    "Don't watch the clock; do what it does. Keep going."
  ],
  leadership: [
    "A leader is one who knows the way, goes the way, and shows the way.",
    "Leadership is not about a title or a designation."
  ],
  success: [
    "Success is not in what you have, but who you are.",
    "Success usually comes to those who are too busy to be looking for it."
  ]
};

// DOM Elements
const categorySelect = document.getElementById("categorySelect");
const quoteBox = document.getElementById("quoteBox");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const addQuoteBtn = document.getElementById("addQuoteBtn");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");

// Populate category dropdown
function populateCategoryOptions() {
  categorySelect.innerHTML = "";
  Object.keys(quotes).forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    categorySelect.appendChild(option);
  });
}

// Display random quote
function displayRandomQuote() {
  const category = categorySelect.value;
  const categoryQuotes = quotes[category];
  if (!categoryQuotes || categoryQuotes.length === 0) {
    quoteBox.textContent = "No quotes available for this category.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
  quoteBox.textContent = categoryQuotes[randomIndex];
}

// Add a new quote
function addQuote() {
  const quote = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim().toLowerCase();

  if (!quote || !category) {
    alert("Please enter both a quote and category.");
    return;
  }

  if (!quotes[category]) {
    quotes[category] = [];
  }

  quotes[category].push(quote);
  populateCategoryOptions();
  newQuoteText.value = "";
  newQuoteCategory.value = "";
  alert("Quote added successfully!");
}

// Event Listeners
newQuoteBtn.addEventListener("click", displayRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);

// Initialize
populateCategoryOptions();
