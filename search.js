document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("searchInput");
  const resultsBox = document.getElementById("searchResults");

  if (!input || !resultsBox) return;

  input.addEventListener("keyup", function () {

    let value = input.value.toLowerCase();
    resultsBox.innerHTML = "";

    if (value === "") return;

    let filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(value) ||
      p.brand.toLowerCase().includes(value) ||
      p.cat.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
      resultsBox.innerHTML = "<p style='padding:10px;'>Aucun produit trouvé</p>";
      return;
    }

    filtered.forEach(p => {
      resultsBox.innerHTML += `
        <a href="produit.html?name=${encodeURIComponent(p.name)}&price=${p.price}&img=${encodeURIComponent(p.img)}&desc=${encodeURIComponent(p.desc)}&cat=${p.cat}&brand=${p.brand}" class="product">
          <img src="${p.img}">
          <div class="info">
            <h3>${p.name}</h3>
            <p class="specs">${p.desc}</p>
          </div>
          <span class="price">${Number(p.price).toLocaleString()} FCFA</span>
        </a>
      `;
    });

  });

});
