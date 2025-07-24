/* ===========================
   DADOS DO CARDÁPIO
   =========================== */
const DATA = {
  "Bebidas": {
    "CERVEJA": {
      "GARRAFA": [
        { nome: "Heineken 600ml", preco: 15.00, img: "assets/img/ghein.jpg" },
        { nome: "Spaten 600ml", preco: 12.00, img: "assets/img/gspaten.jpg" },
        { nome: "Budweiser 600ml", preco: 12.00, img: "assets/img/gbud600.jpg" },
        { nome: "Amstel 600ml", preco: 12.00, img: "assets/img/gamstel600.jpg" },
        { nome: "Itaipava 600ml", preco: 9.00, img: "assets/img/gitaipava600.jpg" },
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
      "MALZEBIER": [
        { nome: "Brahma Malzebier Lata 350ml", preco: 8.00, img: "assets/img/brahmamalzebier.jpg" },
        { nome: "Itaipava Malzebier Lata 350ml", preco: 7.00, img: "assets/img/itaipavamalzebier.jpg" }
      ],
      "SEM ÁLCOOL": [
        { nome: "Heineken Long Neck 350ml", preco: 9.00, img: "assets/img/lgheinzer0.jpg" },
        { nome: "Heineken Lata 350ml", preco: 7.00, img: "assets/img/lheinzer0350ml.jpg" },
        { nome: "Budweinser Long Neck 350ml", preco: 8.00, img: "assets/img/lgbud0.jpg" },
        { nome: "Budweinser Lata 350ml", preco: 7.00, img: "assets/img/lbud0.png" },
        { nome: "Itaipava Lata 350ml", preco: 6.00, img: "assets/img/litaipazer0350.jpg" },
        { nome: "Brahma Lata 350ml", preco: 6.00, img: "assets/img/lbrahmazero350.jpg" }
      ],
      "LITRINHO": [
        { nome: "Skol 300ml", preco: 4.50, img: "assets/img/skollitrinho.jpg" },
        { nome: "Brahma 300ml", preco: 4.50, img: "assets/img/litrinhobrahma300.jpg" }
      ]
    },
    "WHISKY (Doses)": [
      { nome: "Johnnie Walker Red - Dose", preco: 20.00, img: "assets/img/redlabel.jpg" },
      { nome: "Johnnie Walker Black - Dose", preco: 28.00, img: "assets/img/blacklabel.jpg" },
      { nome: "Ballantine's - Dose", preco: 18.00, img: "assets/img/ballantines.jpg" }
    ],
    "VINHO": {
      "Garrafa": [
        { nome: "Quinta do Morgado Suave", preco: 29.00, img: "assets/img/vinhoquinta.jpg" },
        { nome: "Pérgola Tinto Suave", preco: 30.00, img: "assets/img/pergola.jpg" }
      ],
      "Taça": [
        { nome: "Taça de Vinho Tinto", preco: 9.00, img: "assets/img/taça.jpg" },
        { nome: "Pérgola Tinto Suave", preco: 9.90, img: "assets/img/taça.jpg" }
      ]
    },
    "DESTILADO": {
      "Dose": [
        { nome: "Dreher / Domus", preco: 3.00, img: "assets/img/dreher.jpg" },
        { nome: "Domecq", preco: 5.00, img: "assets/img/domecq.jpg" },
        { nome: "Alcatrão", preco: 4.00, img: "assets/img/alcatrao.jpg" },
        { nome: "Campari", preco: 6.00, img: "assets/img/campari.jpg" },
        { nome: "Genebra", preco: 9.00, img: "assets/img/genebra.jpg" },
        { nome: "Acrescentar Limão e Mel", preco: 1.00, img: "assets/img/limaoemel.jpg" }
      ],

    },
    "Bebidas Não Alcoólicas": {
      "REFRIGERANTE": [
        { nome: "Coca-cola 1L", preco: 7.50, img: "assets/img/cola1l.jpg" },
        { nome: "Pepsi Cola 1L", preco: 7.00, img: "assets/img/pepsi1l.jpg" },
        { nome: "Coca-cola Lata 350ml", preco: 4.50, img: "assets/img/colalata.jpg" },
        { nome: "Pespsi  Lata 350ml", preco: 4.50, img: "assets/img/pepsilata.jpg" },
        { nome: "Pet Garrafinha 255ml", preco: 3.50, img: "assets/img/pitulha.jpg" }
      ],
      "ÁGUA e Outros": [
        { nome: "Água com gás 500ml", preco: 3.00, img: "assets/img/aguacomgas.jpg" },
        { nome: "Água sem gás 500ml", preco: 2.00, img: "assets/img/aguasem.jpg" },
        { nome: "Água Tônica  350ml", preco: 3.00, img: "assets/img/aguatonica.jpg" },
        { nome: "Suco", preco: 2.50, img: "assets/img/suco.jpg" },
        { nome: "Chá", preco: 9.50, img: "assets/img/cha.jpg" },
        { nome: "Energético", preco: 7.50, img: "assets/img/energetico.jpg" }
      ]
    }
  },

  "Tiragostos": {
    "Petiscos": [
      { nome: "Salame", preco: 15.00, img: "assets/img/" },
      { nome: "Salame com Queijo", preco: 25.00, img: "assets/img/" },
      { nome: "Azeitonas", preco: 7.00, img: "assets/img/" },
      { nome: "Petisco Completo", preco: 30.00, img: "assets/img/salamecompleto.jpg" },
      { nome: "Queijo", preco: 15.00, img: "assets/img/" },
     
    ],
    "Fritas": [
      { nome: "Carne do Sol com Farofa e Salada", preco: 25.00, img: "assets/img/fritas_carne_sol.jpg" },
      { nome: "Carne do Sol com Batatas Fritas", preco: 30.00, img: "assets/img/fritascarnesol.jpg" },
      { nome: "Carne do Sol com Pirão de Aipim", preco: 35.00, img: "assets/img/" },
      { nome: "Arrumadinho de Carne", preco: 35.00, img: "assets/img/arrumadinho_2.jpg" },
      { nome: "Arrumadinho Pequeno de Carne", preco: 25.00, img: "assets/img/" },
      { nome: "Isca de Frango com Fritas", preco: 40.00, img: "assets/img/" },
      { nome: "Isca de Frango com Salada e Farofa", preco: 30.00, img: "assets/img/" },
       { nome: "Porção Batatas Fritas", preco: 15.00, img: "assets/img/fritas.jpg" },
      { nome: "Frango a Passarinha", preco: 35.00, img: "assets/img/frangoapassarinha.jpg" },
      { nome: "Camarão Alho e Óleo", preco: 35.00, img: "assets/img/" }
    ],
    "Caldos": [
      { nome: "Caldo de Sururu", preco: 10.00, img: "assets/img/" },
      { nome: "Caldo de Camarão", preco: 10.00, img: "assets/img/" },
      { nome: "Caldo Verde", preco: 8.00, img: "assets/img/" }
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
   FUNÇÕES DO GARÇOM
   =========================== */
const GARCOM_PHONE_E164 = "557184334896"; // número do garçom no formato DDI + DDD + número

function showToast(text, timeout = 2500) {
  let toast = document.getElementById("bp-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "bp-toast";
    toast.style.position = "fixed";
    toast.style.bottom = "80px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "rgba(0,0,0,.85)";
    toast.style.color = "#fff";
    toast.style.padding = "8px 16px";
    toast.style.borderRadius = "8px";
    toast.style.fontSize = "0.95rem";
    toast.style.zIndex = "10000";
    toast.style.pointerEvents = "none";
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.style.opacity = "1";
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.style.opacity = "0";
  }, timeout);
}

function chamarGarcom() {
  let mesa = prompt("Informe o número da mesa (opcional):");
  mesa = mesa ? mesa.trim() : "";

  const mensagemBase = "Olá, gostaria de chamar o garçom";
  const msgCompleta = mesa
    ? `${mensagemBase} na mesa ${mesa} no Black Point.`
    : `${mensagemBase} no Black Point.`;

  const encoded = encodeURIComponent(msgCompleta);
  const appURL = `whatsapp://send?phone=${GARCOM_PHONE_E164}&text=${encoded}`;
  const webURL = `https://wa.me/${GARCOM_PHONE_E164}?text=${encoded}`;

  if (navigator.vibrate) navigator.vibrate(50);
  showToast("Chamando o garçom...");

  let opened = false;
  try {
    const w = window.open(appURL, "_blank");
    opened = !!w;
  } catch (_) { }

  setTimeout(() => {
    if (!opened) {
      window.open(webURL, "_blank");
    }
  }, 600);
}

/* ===========================
   EVENTOS
   =========================== */
homeBtnBebidas.addEventListener("click", () => showCategory("Bebidas"));
homeBtnTiragostos.addEventListener("click", () => showCategory("Tiragostos"));

btnVoltar.addEventListener("click", showHome);
btnChamarGarcom.addEventListener("click", chamarGarcom);

/* ===========================
   INICIALIZAÇÃO
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  // ano automático
  document.getElementById("current-year").textContent = new Date().getFullYear();
  showHome();
});
