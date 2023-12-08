const categoriesPage = "http://localhost:3000/categories";
const productsPage = "http://localhost:3000/products";

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
  } else if (selectedSearch === "2") {
    loadProducts();
  } else {
  }
}

function loadCategories() {
  fetch(categoriesPage)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const names = data.map((category) => category.name);
        displayCategories(names);
        console.log(names);
      }
    })
    .catch((error) => console.error("Error fetching categories:", error));
}

function loadProducts() {
  fetch(productsPage)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        displayProducts(data);
      }
    })
    .catch((error) => console.error("Error fetching categories:", error));
}

function displayCategories(names) {
  const categorySelect = document.getElementById("categorySelect");
  categorySelect.innerHTML = "";
  names.forEach((categoryName) => {
    const categoryOption = document.createElement("option");
    categoryOption.innerText = categoryName;
    categorySelect.appendChild(categoryOption);
  });
}

function displayProducts(data) {
  // Assuming there is an element with the ID "productTable" to display products
  const productTable = document.getElementById("productTable");

  // Clear previous content
  productTable.innerHTML = "";

  // Create table header
  const headerRow = document.createElement("tr");
  const headers = ["ID", "Product Name", "Unit Price"];
  headers.forEach((headerText) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  productTable.appendChild(headerRow);

  // Create table rows with product data
  data.forEach((product) => {
    const productRow = document.createElement("tr");

    // ID
    const idCell = document.createElement("td");
    idCell.textContent = product.id;
    productRow.appendChild(idCell);

    // Product Name
    const nameCell = document.createElement("td");
    nameCell.textContent = product.productName;
    productRow.appendChild(nameCell);

    // Unit Price
    const priceCell = document.createElement("td");
    priceCell.textContent = product.unitPrice;
    productRow.appendChild(priceCell);

    // Append the row to the table
    productTable.appendChild(productRow);
  });

  console.log("Displaying products");
}

