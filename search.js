document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("searchInput");
  const resultsBox = document.getElementById("searchResults");
  if (!input || !resultsBox) return;

  input.addEventListener("keyup", function () {
    const value = input.value.trim().toLowerCase();
    resultsBox.innerHTML = "";
    if (value === "") return;

    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(value) ||
      p.brand.toLowerCase().includes(value) ||
      p.cat.toLowerCase().includes(value) ||
      p.desc.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
      resultsBox.innerHTML = "<p style='padding:12px 16px;font-size:13px;color:#64748b;'>Aucun produit trouvé pour \"" + input.value + "\"</p>";
      return;
    }

    filtered.slice(0, 6).forEach(p => {
      const url = `produit.html?name=${encodeURIComponent(p.name)}&price=${p.price}&img=${encodeURIComponent(p.img)}&desc=${encodeURIComponent(p.desc)}&cat=${p.cat}&brand=${encodeURIComponent(p.brand)}`;
      resultsBox.innerHTML += `
        <a href="${url}" class="product" style="display:flex;align-items:center;gap:12px;padding:10px 16px;border-bottom:1px solid #e2e8f0;text-decoration:none;">
          <img src="${p.img}" style="width:46px;height:46px;object-fit:cover;border-radius:8px;background:#f1f5f9;flex-shrink:0;" onerror="this.style.display='none'">
          <div class="info" style="flex:1;overflow:hidden;">
            <h3 style="font-family:Outfit,sans-serif;font-size:13px;font-weight:600;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name}</h3>
            <p class="specs" style="font-size:11px;color:#64748b;">${p.desc}</p>
          </div>
          <span class="price" style="font-family:Outfit,sans-serif;font-weight:700;font-size:13px;color:#1B3FA0;white-space:nowrap;flex-shrink:0;">${Number(p.price).toLocaleString('fr-FR')} FCFA</span>
        </a>`;
    });
  });

  // Close search results when clicking outside
  document.addEventListener("click", function(e) {
    if (!e.target.closest('.search-bar') && !e.target.closest('#searchResults') && !e.target.closest('.icon-btn')) {
      resultsBox.innerHTML = "";
    }
  });
});
