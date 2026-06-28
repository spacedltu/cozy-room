async function loadShop() {
  const response = await fetch("data.json");
  const data = await response.json();

  document.title = data.title || "Shop This Look";
  document.getElementById("pageTitle").textContent = data.title || "Shop This Look";
  document.getElementById("pageSubtitle").textContent = data.subtitle || "";
  document.getElementById("heroImage").src = data.heroImage || "";
  document.getElementById("disclosure").textContent = data.disclosure || "";

  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  data.products.slice(0, 6).forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="cardBody">
        <h2 class="productName">${product.name}</h2>
        <p class="price">${product.price}</p>
        <a class="shopBtn" href="${product.link}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon →</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

loadShop();