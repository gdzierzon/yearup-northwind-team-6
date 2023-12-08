let categoriesPage = "http://localhost:8081/api/categories"

document.addEventListener("DOMContentLoaded", () => {
  const selects = document.getElementById("searchSelect");
  selects.addEventListener("change", searchSelected);
});

function searchSelected() {
  const selects = document.getElementById("searchSelect");
  const selectedSearch = selects.value;
  console.log(selectedSearch);

  if (selectedSearch === "1") {
    loadCategories();
  } else {
    loadProducts();
  }
}
function loadCategories(){
    
}

function displayCategories() {
  // Your code to display categories goes here
  console.log("Displaying categories");
}

function displayProducts() {
  // Your code to display products goes here
  console.log("Displaying products");
}
