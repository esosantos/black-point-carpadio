/* ===========================
   DADOS DO CARDÁPIO
   =========================== */
const DATA = {
  "Bebidas": {
    "Cervejas": {
      "GARRAFA": [
        { nome: "Heineken 600ml", preco: 15.00, img: "assets/img/ghein.jpg" },
        { nome: "Spaten 600ml", preco: 12.00, img: "assets/img/gspaten.jpg" },
        { nome: "Budweiser 600ml", preco: 12.00, img: "assets/img/gbud600.jpg" },
        { nome: "Amstel 600ml", preco: 12.00, img: "assets/img/gamstel600.jpg" },
        { nome: "Itaipava 600ml", preco: 7.00, img: "assets/img/gitaipava600.jpg" },
        { nome: "Schin 600ml", preco: 7.00, img: "assets/img/gschin600.jpg" },
        { nome: "Devassa 600ml", preco: 10.00, img: "assets/img/gdevassa60ml.jpg" },
        { nome: "Skol 600ml", preco: 10.00, img: "assets/img/gskol600.jpg" }

      ],
      "LONG NECK": [
        { nome: "Heineken Long Neck 350ml", preco: 9.00, img: "assets/img/lnhein300ml.jpg" },
        { nome: "Spaten Long Neck 350ml", preco: 8.00, img: "assets/img/lnspaten330.jpg" },
        { nome: "Budweiser Long Neck 350ml", preco: 7.00, img: "assets/img/lnbudwei350.jpg" },
        { nome: "Corona Long Neck 210ml", preco: 9.00, img: "assets/img/lncorona210ml.jpg" },
        { nome: "Stella Long Neck 330ml", preco: 8.00, img: "assets/img/lnstella330ml.jpg" }
      ],
      "LATA": [
        { nome: "Heineken Lata 330ml", preco: 7.00, img: "assets/img/lhein.jpg" },
        { nome: "Spaten Lata 330ml", preco: 6.00, img: "assets/img/lspaten.jpg" },
        { nome: "Amstel Lata 330ml", preco: 5.00, img: "assets/img/lamstel.jpg" },
        { nome: "Budweiser Lata 350ml", preco: 5.00, img: "assets/img/lbud.jpg" },
        { nome: "Itaipava Lata 350ml", preco: 4.00, img: "assets/img/litai.jpg" },
        { nome: "Brahma Duplo Malte Lata 350ml", preco: 5.00, img: "assets/img/lbrahma.jpg" },
        { nome: "Devassa Lata 350ml", preco: 5.00, img: "assets/img/ldevassa350.jpg" },
        { nome: "Schin Lata 350ml", preco: 4.00, img: "assets/img/lschin350ml.jpg" }

      ],
       "Malzebier": [
        { nome: "Brahma Malzebier Lata 350ml", preco: 8.00, img: "assets/img/brahmamalzebier.jpg" },
        { nome: "Itaipava Malzebier Lata 350ml", preco: 7.00, img: "assets/img/itaipavamalzebier.jpg" }
      
      ],
      "Sem Álcool": [
        { nome: "Heineken Long Neck 350ml", preco: 9.00, img: "assets/img/lgheinzer0.jpg" },
        { nome: "Heineken Lata 350ml", preco: 7.00, img: "assets/img/lheinzer0350ml.jpg" },
        { nome: "Budweinser Long Neck 350ml", preco: 9.00, img: "assets/img/lgbud0.jpg" },
        { nome: "Budweinser Lata 350ml", preco: 7.00, img: "assets/img/lbud0.png" },
        { nome: "Itaipava Lata 350ml", preco: 9.00, img: "assets/img/litaipazer0350.jpg" },
        { nome: "Brahma Lata 350ml", preco: 9.00, img: "assets/img/lbrahmazero350.jpg" },
      ],
      "Litrinho": [
        { nome: "Itaipava Lata 350ml", preco: 4.50, img: "assets/img/skollitrinho.jpg" },
        { nome: "Brahma Lata 350ml", preco: 4.50, img: "assets/img/litrinhobrahma300.jpg" }
      ]
    },

    "Whisky (Doses)": [
      { nome: "Johnnie Walker Red - Dose", preco: 20.00, img: "https://images.unsplash.com/photo-1613471943027-bc19940cd504?auto=format&fit=crop&w=200&q=60" },
      { nome: "Johnnie Walker Black - Dose", preco: 28.00, img: "https://images.unsplash.com/photo-1613471943027-bc19940cd504?auto=format&fit=crop&w=200&q=60" },
      { nome: "Ballantine's - Dose", preco: 18.00, img: "https://images.unsplash.com/photo-1613471943027-bc19940cd504?auto=format&fit=crop&w=200&q=60" }
    ],

    "Vinho": {
      "Garrafa": [
        { nome: "Miolo Seleção Tinto", preco: 75.00, img: "https://images.unsplash.com/photo-1605448171703-9c52c7c1bca4?auto=format&fit=crop&w=200&q=60" },
        { nome: "Casal Garcia", preco: 89.00, img: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=200&q=60" }
      ],
      "Dose": [
        { nome: "Taça de Vinho Tinto", preco: 18.00, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=200&q=60" },
        { nome: "Taça de Vinho Branco", preco: 18.00, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=200&q=60" }
      ]
    },

    "Drinks": {
      "Roska": [
        { nome: "Caipiroska Limão", preco: 19.00, img: "https://images.unsplash.com/photo-1604926797431-efeeff0ba949?auto=format&fit=crop&w=200&q=60" },
        { nome: "Caipiroska Morango", preco: 21.00, img: "https://images.unsplash.com/photo-1604926797431-efeeff0ba949?auto=format&fit=crop&w=200&q=60" }
      ],
      "Gim": [
        { nome: "Gin Tônica Clássico", preco: 22.00, img: "https://images.unsplash.com/photo-1604434954014-21fb4a11cf3f?auto=format&fit=crop&w=200&q=60" },
        { nome: "Gin Frutas Vermelhas", preco: 24.00, img: "https://images.unsplash.com/photo-1604434954014-21fb4a11cf3f?auto=format&fit=crop&w=200&q=60" }
      ]
    },
    "Bebidas Não Alcoólicas": {
      "Roska": [
        { nome: "Caipiroska Limão", preco: 19.00, img: "https://images.unsplash.com/photo-1604926797431-efeeff0ba949?auto=format&fit=crop&w=200&q=60" },
        { nome: "Caipiroska Morango", preco: 21.00, img: "https://images.unsplash.com/photo-1604926797431-efeeff0ba949?auto=format&fit=crop&w=200&q=60" }
      ],
      "Gim": [
        { nome: "Gin Tônica Clássico", preco: 22.00, img: "https://images.unsplash.com/photo-1604434954014-21fb4a11cf3f?auto=format&fit=crop&w=200&q=60" },
        { nome: "Gin Frutas Vermelhas", preco: 24.00, img: "https://images.unsplash.com/photo-1604434954014-21fb4a11cf3f?auto=format&fit=crop&w=200&q=60" }
      ]
    }
  },

  "Tiragostos": {
    "Petiscos": [
      { nome: "Salame", preco: 18.00, img: "https://images.unsplash.com/photo-1604908176740-6bb77eb8aad5?auto=format&fit=crop&w=200&q=60" },
      { nome: "Salame c/ Queijo", preco: 22.00, img: "https://images.unsplash.com/photo-1604908176740-6bb77eb8aad5?auto=format&fit=crop&w=200&q=60" },
      { nome: "Azeitona", preco: 12.00, img: "https://images.unsplash.com/photo-1585238341986-43ca9649a61d?auto=format&fit=crop&w=200&q=60" },
      { nome: "Petisco Completo", preco: 35.00, img: "https://images.unsplash.com/photo-1617196038069-2a24e60bcd4a?auto=format&fit=crop&w=200&q=60" },
      { nome: "Queijo Coalho", preco: 20.00, img: "https://images.unsplash.com/photo-1606490638272-180b1a9197c0?auto=format&fit=crop&w=200&q=60" },
      { nome: "Batata Frita", preco: 18.00, img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=200&q=60" }
    ],

    "Carne do Sol": [
      { nome: "c/ Farofa e Salada", preco: 45.00, img: "https://images.unsplash.com/photo-1605478251089-148d464472b1?auto=format&fit=crop&w=200&q=60" },
      { nome: "c/ Batata Frita", preco: 48.00, img: "https://images.unsplash.com/photo-1605478251089-148d464472b1?auto=format&fit=crop&w=200&q=60" },
      { nome: "c/ Pirão de Aipim", preco: 49.00, img: "https://images.unsplash.com/photo-1605478251089-148d464472b1?auto=format&fit=crop&w=200&q=60" },
      { nome: "Arrumadinho de Carne", preco: 50.00, img: "https://images.unsplash.com/photo-1605478251089-148d464472b1?auto=format&fit=crop&w=200&q=60" }
    ],

    "Caldos": [
      { nome: "Caldo de Sururu", preco: 22.00, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=200&q=60" },
      { nome: "Caldo de Camarão", preco: 25.00, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=200&q=60" },
      { nome: "Caldo Verde", preco: 20.00, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=200&q=60" }
    ],

    "Isca de Peixe": [
      { nome: "c/ Fritas", preco: 32.00, img: "https://images.unsplash.com/photo-1611327361180-9d9c991690e5?auto=format&fit=crop&w=200&q=60" },
      { nome: "c/ Farofa", preco: 30.00, img: "https://images.unsplash.com/photo-1611327361180-9d9c991690e5?auto=format&fit=crop&w=200&q=60" },
      { nome: "c/ Frango à Passarinho", preco: 38.00, img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?auto=format&fit=crop&w=200&q=60" },
      { nome: "c/ Camarão Alho & Óleo", preco: 55.00, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=200&q=60" }
    ]
  }
};

/* ===========================
   ELEMENTOS
   =========================== */
const homeScreen = document.getElementById("home-screen");
const homeBtnBebidas = document.getElementById("home-btn-bebidas");
const homeBtnTiragostos = document.getElementById("home-btn-tiragostos");

const categoryView = document.getElementById("category-view");
const catTitle = document.getElementById("cat-title");
const catSubcats = document.getElementById("cat-subcats");

const subcatView = document.getElementById("subcat-view");
const subcatTitle = document.getElementById("subcat-title");
const subcatItems = document.getElementById("subcat-items");

const btnVoltar = document.getElementById("btn-voltar");
const btnChamarGarcom = document.getElementById("btn-chamar-garcom");
const footerButtons = document.getElementById("footer-buttons");

/* ===========================
   ESTADO
   =========================== */
let categoriaAtual = null;

/* ===========================
   HELPERS
   =========================== */
const fmt = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

/* ===========================
   NAVEGAÇÃO
   =========================== */
function showHome() {
  categoriaAtual = null;
  homeScreen.classList.remove("d-none");
  categoryView.classList.add("d-none");
  footerButtons.classList.add("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCategory(cat) {
  categoriaAtual = cat;
  homeScreen.classList.add("d-none");
  categoryView.classList.remove("d-none");
  footerButtons.classList.remove("d-none"); // exibe botões fixos no cardápio
  catTitle.textContent = cat;
  renderSubcats(cat);
  subcatView.classList.add("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSubcats(cat) {
  catSubcats.innerHTML = "";
  Object.keys(DATA[cat]).forEach((sub) => {
    const btn = document.createElement("button");
    btn.className = "btn-subcat";
    btn.textContent = sub;
    btn.addEventListener("click", (e) => showSubcat(e, sub));
    catSubcats.appendChild(btn);
  });
}

function showSubcat(e, sub) {
  subcatTitle.textContent = sub;
  subcatItems.innerHTML = "";
  subcatView.classList.remove("d-none");

  // marcar ativo
  catSubcats.querySelectorAll(".btn-subcat").forEach((b) => b.classList.remove("active"));
  e.target.classList.add("active");

  const data = DATA[categoriaAtual][sub];

  // array => lista simples
  if (Array.isArray(data)) {
    data.forEach((item) => appendItem(item));
    return;
  }

  // objeto => grupos
  for (const grupo in data) {
    const grpTitle = document.createElement("div");
    grpTitle.className = "text-warning fw-bold my-2 w-100";
    grpTitle.textContent = grupo;
    subcatItems.appendChild(grpTitle);
    data[grupo].forEach((item) => appendItem(item));
  }
}

function appendItem(item) {
  const col = document.createElement("div");
  col.className = "col-6 col-md-3";
  col.innerHTML = `
    <div class="item-card">
      <img src="${item.img}" alt="${item.nome}">
      <div class="item-card-body">
        <div class="item-card-name">${item.nome}</div>
        <div class="item-card-price">${fmt(item.preco)}</div>
      </div>
    </div>
  `;
  subcatItems.appendChild(col);
}

/* ===========================
   EVENTOS
   =========================== */
homeBtnBebidas.addEventListener("click", () => showCategory("Bebidas"));
homeBtnTiragostos.addEventListener("click", () => showCategory("Tiragostos"));

btnVoltar.addEventListener("click", showHome);
btnChamarGarcom.addEventListener("click", () =>
  alert("O garçom está a caminho! 🍻")
);

/* ===========================
   INICIALIZAÇÃO
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  // ano automático
  document.getElementById("current-year").textContent = new Date().getFullYear();
  showHome();
});
