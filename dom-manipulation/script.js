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

function createCategoryDropdown() {
  const label = document.createElement("label");
  label.textContent = "Select Category:";
  label.setAttribute("for", "category");

  const select = document.createElement("select");
  select.id = "category";

  updateCategoryOptions(select);

  const button = document.createElement("button");
  button.id = "new-quote";
  button.textContent = "New Quote";
  button.addEventListener("click", () => {
    const quote = getRandomQuote(select.value);
    document.getElementById("quote-display").textContent = quote;
  });

  document.body.append(label, select, button);
}

function updateCategoryOptions(selectElement) {
  selectElement.innerHTML = "";
  Object.keys(categories).forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category[0].toUpperCase() + category.slice(1);
    selectElement.appendChild(option);
  });
}

function getRandomQuote(category) {
  const quotes = categories[category];
  if (!quotes || quotes.length === 0) return "No quotes in this category.";
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function createQuoteDisplayBox() {
  const div = document.createElement("div");
  div.id = "quote-display";
  div.className = "quote-box";
  div.textContent = "Your quote will appear here.";
  document.body.appendChild(div);
}

function createAddQuoteForm() {
  const heading = document.createElement("h2");
  heading.textContent = "Add a New Quote";

  const quoteInput = document.createElement("input");
  quoteInput.type = "text";
  quoteInput.id = "new-quote-text";
  quoteInput.placeholder = "Enter quote";

  const categoryInput = document.createElement("input");
  categoryInput.type = "text";
  categoryInput.id = "quote-category";
  categoryInput.placeholder = "Enter category (existing or new)";

  const button = document.createElement("button");
  button.id = "add-quote";
  button.textContent = "Add Quote";
  button.addEventListener("click", () => {
    const quote = quoteInput.value.trim();
    const category = categoryInput.value.trim().toLowerCase();
    if (!quote || !category) return alert("Please fill in both fields.");
    if (!categories[category]) categories[category] = [];
    categories[category].push(quote);

    const select = document.getElementById("category");
    updateCategoryOptions(select);

    quoteInput.value = "";
    categoryInput.value = "";
    alert(`Quote added under '${category}'`);
  });

  document.body.append(heading, quoteInput, categoryInput, button);
}

function createAddCategoryForm() {
  const heading = document.createElement("h2");
  heading.textContent = "Add a New Category";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "new-category";
  input.placeholder = "Enter new category";

  const button = document.createElement("button");
  button.id = "add-category";
  button.textContent = "Add Category";
  button.addEventListener("click", () => {
    const newCat = input.value.trim().toLowerCase();
    if (!newCat) return alert("Please enter a category name.");
    if (categories[newCat]) return alert("Category already exists.");
    categories[newCat] = [];

    const select = document.getElementById("category");
    updateCategoryOptions(select);

    input.value = "";
    alert(`Category '${newCat}' added.`);
  });

  document.body.append(heading, input, button);
}

// Run when page loads
window.onload = function () {
  createCategoryDropdown();
  createQuoteDisplayBox();
  createAddQuoteForm();
  createAddCategoryForm();
};
