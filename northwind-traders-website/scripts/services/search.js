let categoriesPage = "http://localhost:3000/categories"

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
  fetch(categoriesPage)
  .then((response)=>{return response.json();})
  .then((data)=> {if (data) {console.log(data.name)}})
}

function displayCategories() {
  // Your code to display categories goes here
  console.log("Displaying categories");
}

function displayProducts() {
  // Your code to display products goes here
  console.log("Displaying products");
}

