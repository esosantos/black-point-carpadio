/* ===========================
   DADOS DO CARDÁPIO
   =========================== */
const DATA = {
  "Bebidas": {
    "Cervejas": {
      "600ml": [
        { nome: "Heineken 600ml", preco: 15.00, img: "https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=500&q=60" },
        { nome: "Budweiser 600ml", preco: 14.00, img: "https://images.unsplash.com/photo-1598136490929-5c6d2f123f2c?auto=format&fit=crop&w=500&q=60" },
        { nome: "Spaten 600ml", preco: 14.00, img: "https://images.unsplash.com/photo-1628832848640-bae3d5fcb2b3?auto=format&fit=crop&w=500&q=60" },
        { nome: "Amstel 600ml", preco: 13.00, img: "https://images.unsplash.com/photo-1610647455394-6697e54b7b43?auto=format&fit=crop&w=500&q=60" },
        { nome: "Brahma 600ml", preco: 12.00, img: "https://images.unsplash.com/photo-1513262599279-d9d7a72c71d2?auto=format&fit=crop&w=500&q=60" },
        { nome: "Itaipava 600ml", preco: 11.00, img: "https://images.unsplash.com/photo-1618221421602-cf7f8e0b6b9d?auto=format&fit=crop&w=500&q=60" }
      ],
      "Long Neck": [
        { nome: "Heineken Long Neck", preco: 10.00, img: "https://images.unsplash.com/photo-1628696919324-ff7a8b9d1a11?auto=format&fit=crop&w=500&q=60" },
        { nome: "Corona", preco: 12.00, img: "https://images.unsplash.com/photo-1510626176961-4b37d0b4dca1?auto=format&fit=crop&w=500&q=60" },
        { nome: "Budweiser Long Neck", preco: 9.00, img: "https://images.unsplash.com/photo-1571779420150-7a23a25f5c59?auto=format&fit=crop&w=500&q=60" },
        { nome: "Spaten Long Neck", preco: 9.50, img: "https://images.unsplash.com/photo-1608501078714-067bf793a3e6?auto=format&fit=crop&w=500&q=60" }
      ],
      "Lata": [
        { nome: "Itaipava Lata", preco: 5.50, img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=500&q=60" },
        { nome: "Brahma Lata", preco: 5.50, img: "https://images.unsplash.com/photo-1552318965-6e6d1a5bbf43?auto=format&fit=crop&w=500&q=60" },
        { nome: "Amstel Lata", preco: 6.00, img: "https://images.unsplash.com/photo-1577801592268-9d46debc2f57?auto=format&fit=crop&w=500&q=60" },
        { nome: "Heineken Lata", preco: 7.00, img: "https://images.unsplash.com/photo-1606788075761-1d38c0e7c5e8?auto=format&fit=crop&w=500&q=60" },
        { nome: "Budweiser Lata", preco: 6.00, img: "https://images.unsplash.com/photo-1571689936040-4e12aaae2449?auto=format&fit=crop&w=500&q=60" },
        { nome: "Spaten Lata", preco: 6.00, img: "https://images.unsplash.com/photo-1559440169-73a2a92de1c3?auto=format&fit=crop&w=500&q=60" }
      ]
    },
    "Drinks": [
      { nome: "Caipirinha", preco: 15.00, img: "https://images.unsplash.com/photo-1574781330850-7ad45c44a0b9?auto=format&fit=crop&w=500&q=60" },
      { nome: "Mojito", preco: 18.00, img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=60" },
      { nome: "Piña Colada", preco: 20.00, img: "https://images.unsplash.com/photo-1566410928769-878bf44f0b91?auto=format&fit=crop&w=500&q=60" }
    ],
    "Refrigerantes": {
      "1L": [
        { nome: "Pepsi 1L", preco: 8.00, img: "https://images.unsplash.com/photo-1583337130417-dde7c99f0ed1?auto=format&fit=crop&w=500&q=60" },
        { nome: "Coca-Cola 1L", preco: 8.50, img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=60" },
        { nome: "Guaraná Antarctica 1L", preco: 8.00, img: "https://images.unsplash.com/photo-1607532942785-85b2fdd7f7eb?auto=format&fit=crop&w=500&q=60" }
      ],
      "Lata": [
        { nome: "Pepsi Lata", preco: 5.00, img: "https://images.unsplash.com/photo-1587733147215-b712241c4449?auto=format&fit=crop&w=500&q=60" },
        { nome: "Coca-Cola Lata", preco: 5.00, img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=500&q=60" },
        { nome: "Guaraná Antarctica Lata", preco: 4.50, img: "https://images.unsplash.com/photo-1581090468348-0c61b9e99f4b?auto=format&fit=crop&w=500&q=60" }
      ],
      "Água Mineral": [
        { nome: "Água com Gás 500ml", preco: 4.00, img: "https://images.unsplash.com/photo-1582457272838-ef0df2da88a2?auto=format&fit=crop&w=500&q=60" },
        { nome: "Água sem Gás 500ml", preco: 3.50, img: "https://images.unsplash.com/photo-1526401485004-2aa5f7ffb6c2?auto=format&fit=crop&w=500&q=60" }
      ]
    }
  },

  "Petiscos": {
    "Fritos": [
      { nome: "Batata Frita", preco: 22.00, img: "https://images.unsplash.com/photo-1576402187877-4b67f66e4b0c?auto=format&fit=crop&w=500&q=60" },
      { nome: "Calabresa Acebolada", preco: 28.00, img: "https://images.unsplash.com/photo-1604908176740-6bb77eb8aad5?auto=format&fit=crop&w=500&q=60" },
      { nome: "Frango à Passarinho", preco: 35.00, img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?auto=format&fit=crop&w=500&q=60" }
    ],
    "Queijos": [
      { nome: "Queijo Coalho Grelhado", preco: 20.00, img: "https://images.unsplash.com/photo-1606490638272-180b1a9197c0?auto=format&fit=crop&w=500&q=60" },
      { nome: "Tábua de Frios", preco: 45.00, img: "https://images.unsplash.com/photo-1617196038069-2a24e60bcd4a?auto=format&fit=crop&w=500&q=60" }
    ],
    "Outros": [
      { nome: "Torresmo Crocante", preco: 30.00, img: "https://images.unsplash.com/photo-1627483262328-20b06c938c74?auto=format&fit=crop&w=500&q=60" },
      { nome: "Bolinho de Bacalhau", preco: 25.00, img: "https://images.unsplash.com/photo-1562967914-6eb8d5aa1f5b?auto=format&fit=crop&w=500&q=60" },
      { nome: "Coxinha", preco: 18.00, img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=500&q=60" }
    ]
  }
};

/* ===========================
   ELEMENTOS
   =========================== */
const homeScreen       = document.getElementById("home-screen");
const homeBtnBebidas   = document.getElementById("home-btn-bebidas");
const homeBtnPetiscos  = document.getElementById("home-btn-petiscos");

const categoryView     = document.getElementById("category-view");
const catBackHome      = document.getElementById("cat-back-home");
const catTitle         = document.getElementById("cat-title");
const catSubcats       = document.getElementById("cat-subcats");

const subcatView       = document.getElementById("subcat-view");
const subcatBackCat    = document.getElementById("subcat-back-cat");
const subcatTitle      = document.getElementById("subcat-title");
const subcatItems      = document.getElementById("subcat-items");

/* ===========================
   ESTADO
   =========================== */
let categoriaAtual = null;
let subcategoriaAtual = null;

/* ===========================
   FUNÇÕES DE NAV
   =========================== */
function showHome() {
  categoriaAtual = null;
  subcategoriaAtual = null;
  homeScreen.classList.remove("d-none");
  categoryView.classList.add("d-none");
  subcatView.classList.add("d-none");
  // limpa subcats / itens
  catSubcats.innerHTML = "";
  subcatItems.innerHTML = "";
  subcatTitle.textContent = "";
  catTitle.textContent = "";
  window.scrollTo({top:0, behavior:"smooth"});
}

function showCategory(catName) {
  categoriaAtual = catName;
  subcategoriaAtual = null;

  homeScreen.classList.add("d-none");
  categoryView.classList.remove("d-none");
  subcatView.classList.add("d-none");

  catTitle.textContent = catName;
  renderSubcategories(catName);
  window.scrollTo({top:0, behavior:"smooth"});
}

function showSubcategory(catName, subName) {
  categoriaAtual = catName;
  subcategoriaAtual = subName;

  subcatView.classList.remove("d-none");
  subcatTitle.textContent = subName;
  renderSubcatContent(catName, subName);
  window.scrollTo({top:0, behavior:"smooth"});
}

/* ===========================
   RENDER SUBCATEGORIES
   =========================== */
function renderSubcategories(catName) {
  catSubcats.innerHTML = "";
  const data = DATA[catName];
  Object.keys(data).forEach(sub => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-subcat";
    btn.textContent = sub;
    btn.addEventListener("click", () => {
      // limpar estado ativo
      catSubcats.querySelectorAll(".btn-subcat").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      showSubcategory(catName, sub);
    });
    catSubcats.appendChild(btn);
  });
}

/* ===========================
   RENDER SUBCATEGORY CONTENT
   (lista ou grupos)
   =========================== */
function renderSubcatContent(catName, subName) {
  subcatItems.innerHTML = "";

  const data = DATA[catName][subName];

  // Se for array → lista simples
  if (Array.isArray(data)) {
    renderItemList(data);
    return;
  }

  // Se for objeto → grupos internos
  for (const grupo in data) {
    // título do grupo
    const h = document.createElement("div");
    h.className = "group-title";
    h.textContent = grupo;
    subcatItems.appendChild(h);

    // itens do grupo
    renderItemList(data[grupo]);
  }
}

/* ===========================
   RENDER LISTA DE ITENS
   =========================== */
function renderItemList(items) {
  items.forEach(item => {
    const col = document.createElement("div");
    // mobile 2 col, md 4 col
    col.className = "col-6 col-md-3";

    col.innerHTML = `
      <div class="item-card">
        <img src="${item.img}" alt="${item.nome}">
        <div class="item-card-body">
          <div class="item-card-name">${item.nome}</div>
          <div class="item-card-price">R$ ${item.preco.toFixed(2)}</div>
        </div>
      </div>
    `;
    subcatItems.appendChild(col);
  });
}

/* ===========================
   EVENTOS
   =========================== */

// Home → categoria
homeBtnBebidas.addEventListener("click", () => showCategory("Bebidas"));
homeBtnPetiscos.addEventListener("click", () => showCategory("Petiscos"));

// Categoria → Home
catBackHome.addEventListener("click", showHome);

// Subcategoria → Categoria
subcatBackCat.addEventListener("click", () => {
  subcatView.classList.add("d-none");
  subcatItems.innerHTML = "";
  subcatTitle.textContent = "";
  subcategoriaAtual = null;
  // reexibe subcats
  categoryView.classList.remove("d-none");
  window.scrollTo({top:0, behavior:"smooth"});
});

/* ===========================
   INÍCIO
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  showHome();
});
