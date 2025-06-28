const categories = {
  inspiration: [
    "Believe in yourself!",
    "Push through the pain.",
    "Every day is a second chance."
  ],
  humor: [
    "I'm not lazy, I'm on energy-saving mode.",
    "Why don’t scientists trust atoms? Because they make up everything!"
  ]
};

const categorySelect = document.getElementById("category");
const quoteDisplay = document.getElementById("quote-display");
const newQuoteBtn = document.getElementById("new-quote");
const addQuoteBtn = document.getElementById("add-quote");
const addCategoryBtn = document.getElementById("add-category");

function populateCategories() {
  categorySelect.innerHTML = "";
  Object.keys(categories).forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat[0].toUpperCase() + cat.slice(1);
    categorySelect.appendChild(option);
  });
}

function showRandomQuote() {
  const selected = categorySelect.value;
  const quotes = categories[selected];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
}

function addQuote() {
  const text = document.getElementById("new-quote-text").value.trim();
  const cat = document.getElementById("quote-category").value.trim().toLowerCase();
  if (!text || !cat) return alert("Please fill in both fields.");

  if (!categories[cat]) {
    categories[cat] = [];
  }
  categories[cat].push(text);
  populateCategories();
  alert(`Quote added under '${cat}' category.`);
}

function addCategory() {
  const newCat = document.getElementById("new-category").value.trim().toLowerCase();
  if (!newCat) return alert("Please enter a category name.");
  if (categories[newCat]) return alert("Category already exists.");

  categories[newCat] = [];
  populateCategories();
  alert(`Category '${newCat}' added.`);
}

newQuoteBtn.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);
addCategoryBtn.addEventListener("click", addCategory);

window.onload = populateCategories;
