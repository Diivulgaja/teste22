
// Converted from React to vanilla JS - simplified version
const PRODUCTS = [
  {
    "id": 9,
    "name": "Red velvet com Ninho e Morangos",
    "price": 15.9,
    "category": "bolos",
    "description": "Massa aveludada e macia, coberta com creme de leite Ninho cremoso e morangos fresquinhos no topo. Uma combinação elegante.",
    "imageUrl": "https://i.imgur.com/3UDWhLR.png"
  },
  {
    "id": 2,
    "name": "Bolo Cenoura com chocolate",
    "price": 15.9,
    "category": "bolos",
    "description": "Mini vulcão de cenoura: uma massa fofinha e úmida de bolo de cenoura, recheada com explosão de calda cremosa de chocolate que transborda a cada mordida. Um clássico em versão irresistível e perfeita para se deliciar sem culpa!",
    "imageUrl": "https://i.imgur.com/aaUdL2b.png"
  },
  {
    "id": 10,
    "name": "Chocolate com Morangos",
    "price": 15.9,
    "category": "bolos",
    "description": "Mini vulcão de chocolate: bolo fofinho e úmido de massa de chocolate, coberto com calda cremosa de chocolate 50% recheado e finalizado com morangos fresquinhos que trazem o toque perfeito de frescor e sabor. Uma combinação clássica e irresistível!",
    "imageUrl": "https://i.imgur.com/MMbQohl.png"
  },
  {
    "id": 13,
    "name": "Chocolatudo!!!",
    "price": 15.9,
    "category": "bolos",
    "description": "Delicioso bolo de chocolate fofinho, coberto com uma cremosa calda de chocolate 50% cacau e finalizado com generosos granulados. Uma explosão de sabor intenso e equilibrado para os verdadeiros amantes de chocolate!",
    "imageUrl": "https://i.imgur.com/3Hva4Df.png"
  },
  {
    "id": 16,
    "name": "Bolo de Ferreiro com Nutella",
    "price": 16.9,
    "category": "bolos",
    "description": "Bolo Vulcão de Chocolate com Amendoim e Nutella. Massa macia e chocolatuda com pedacinhos crocantes de amendoim. Coberto com chocolate 50% intenso, finalizado com Nutella cremosa e amendoim torrado por cima.",
    "imageUrl": "https://i.imgur.com/OamNqov.png"
  },
  {
    "id": 17,
    "name": "Copo Oreo com Nutella",
    "price": 24.9,
    "category": "copo_felicidade",
    "description": "Primeira camada de creme de Ninho bem cremoso, seguida de biscoitos Oreo crocantes. Depois, uma camada generosa de chocolate 50%, finalizando com Nutella e mais Oreo por cima. Uma combinação que conquista no olhar... e vicia no sabor!",
    "imageUrl": "https://i.imgur.com/1EZRMVl.png"
  },
  {
    "id": 24,
    "name": "Copo Maracujá com Brownie",
    "price": 24.9,
    "category": "copo_felicidade",
    "description": "Camadas de creme de maracujá bem cremoso, seguidas de chocolate 50% e pedaços de brownie macio. Depois, mais uma sequência irresistível de creme de maracujá e chocolate 50%, tudo finalizado com chantilly leve para completar essa explosão de sabor!",
    "imageUrl": "https://i.imgur.com/PypEwAz.png"
  },
  {
    "id": 25,
    "name": "Copo Brawnie Dois Amores",
    "price": 22.9,
    "category": "copo_felicidade",
    "description": "Camadas de creme de Ninho (Leite) cremoso e Brigadeiro Clássico, intercaladas com pedaços macios e úmidos de brownie de chocolate. Uma combinação clássica dos dois amores do Brasil, perfeita para os chocólatras.",
    "imageUrl": "https://i.imgur.com/mMQtXDB.png"
  },
  {
    "id": 26,
    "name": "Copo Encanto de Ninho e Morangos",
    "price": 22.9,
    "category": "copo_felicidade",
    "description": "Ninho com Morangos Camadas cremosas de creme de Ninho intercaladas com morangos frescos, criando um equilíbrio perfeito entre o doce e o azedinho da fruta. Finalizado com chantilly suave e um morango fresco por cima, trazendo aquele toque especial que conquista no primeiro olhar... e no primeiro sabor!",
    "imageUrl": "https://i.imgur.com/EgFhhwL.png"
  },
  {
    "id": 27,
    "name": "Copo de Brownie com Ferreiro e Nutella",
    "price": 26.9,
    "category": "copo_felicidade",
    "description": "Brownie, Ferrero & Nutella Começa com uma camada de chocolate 50% com amendoim e Nutella, seguida de brownie macio no meio. Depois, mais chocolate 50% com amendoim e bastante Nutella, finalizando com Nutella cremosa por cima e um pedaço de brownie para completar essa explosão de sabor.",
    "imageUrl": "https://i.imgur.com/t6xeVDf.png"
  },
  {
    "id": 20,
    "name": "Brownie De Ninho e Nutella",
    "price": 11.9,
    "category": "brownie",
    "description": "Brownie gourmet coberto com creme de Ninho, finalizado com Nutella e morango fresco. Uma combinação irresistível para adoçar seu Dia! 8x8",
    "imageUrl": "https://i.imgur.com/vWdYZ8K.png"
  },
  {
    "id": 21,
    "name": "Brownie Recheado com Nutella e Morangos",
    "price": 22.9,
    "category": "brownie",
    "description": "Duas camadas de brownie super molhadinho, recheado e coberto com creme de leite Ninho, finalizado com Nutella e morango fresco para aquele toque especial. Simples, irresistível e feito para adoçar seu Dia!",
    "imageUrl": "https://i.imgur.com/P1pprjF.png"
  },
  {
    "id": 22,
    "name": "Brownie Ferreiro com Nutella",
    "price": 11.9,
    "category": "brownie",
    "description": "Um brownie super cremoso e chocolatudo, coberto com Nutella na medida certa e finalizado com amendoim torrado crocante. A mistura perfeita entre o doce intenso do chocolate e o toque salgado do amendoim, simplesmente irresistível",
    "imageUrl": "https://i.imgur.com/rmp3LtH.png"
  },
  {
    "id": 23,
    "name": "Brownie Duo com Oreo",
    "price": 11.9,
    "category": "brownie",
    "description": "Brownie macio e úmido, coberto com creme de chocolate e finalizado com pedaços crocantes de Oreo. Uma explosão de sabor em cada mordida!",
    "imageUrl": "https://i.imgur.com/8IbcWWj.png"
  },
  {
    "name": "Copo de Açaí 250ml",
    "category": "acai",
    "description": "Copo de Açai cremoso e saboroso. Escolha seus acompanhamentos e saboreie.",
    "imageUrl": "https://i.imgur.com/OrErP8N.png"
  },
  {
    "id": 6,
    "name": "Empada de Camarão e Requeijão",
    "price": 12.0,
    "category": "salgado",
    "description": "Camarão Cremoso com Requeijão: Camarões selecionados salteados e envoltos em um cremoso molho e Requeijão com tempero caseiro e sabor marcante. Servido na marmitinha, é a combinação perfeita de praticidade e sabor em cada garfada!",
    "imageUrl": "https://i.imgur.com/rV18DkJ.png"
  }
];

// Simple app to render products and a cart
const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));
const categoriesMap = {{}};
categories.forEach(c => categoriesMap[c] = c);

const state = {{
  products: PRODUCTS,
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  filter: null
}};

function formatPrice(v) {{
  return v.toFixed(2).replace('.',',');
}}

function renderCategories() {{
  const el = document.getElementById('categories');
  el.innerHTML = '';
  const btnAll = document.createElement('button');
  btnAll.textContent = 'Todos';
  btnAll.className = 'px-3 py-1 mr-2 mb-2 border rounded';
  btnAll.onclick = () => {{ state.filter = null; renderProducts(); }};
  el.appendChild(btnAll);
  categories.forEach(c => {{
    const b = document.createElement('button');
    b.textContent = c;
    b.className = 'px-3 py-1 mr-2 mb-2 border rounded';
    b.onclick = () => {{ state.filter = c; renderProducts(); }};
    el.appendChild(b);
  }});
}}

function renderProducts() {{
  const el = document.getElementById('products');
  el.innerHTML = '';
  const list = state.filter ? state.products.filter(p=>p.category===state.filter) : state.products;
  list.forEach(p => {{
    const card = document.createElement('div');
    card.className = 'border rounded p-3 flex flex-col';
    card.innerHTML = `
      <img src="${{p.imageUrl}}" alt="${{p.name}}" class="w-full h-48 object-cover mb-2" />
      <h3 class="font-bold text-lg">${{p.name}}</h3>
      <p class="text-sm mb-2">${{p.description || ''}}</p>
      <div class="mt-auto flex items-center justify-between">
        <div class="font-bold">R$ ${{formatPrice(p.price)}}</div>
        <button data-id="${{p.id}}" class="addBtn px-3 py-1 bg-blue-600 text-white rounded">Adicionar</button>
      </div>
    `;
    el.appendChild(card);
  }});
  // attach handlers
  document.querySelectorAll('.addBtn').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const id = Number(e.currentTarget.dataset.id);
      addToCart(id);
    });
  });
}}

function saveCart() {{
  localStorage.setItem('cart', JSON.stringify(state.cart));
}}

function addToCart(id) {{
  const item = state.products.find(p=>p.id===id);
  if(!item) return;
  const existing = state.cart.find(c=>c.id===id);
  if(existing) existing.qty++;
  else state.cart.push({{...item, qty:1}});
  saveCart();
  renderCartCount();
}}

function renderCartCount() {{
  const count = state.cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartCount').textContent = count;
}}

function renderCartModal() {{
  const modal = document.getElementById('cartModal');
  const itemsEl = document.getElementById('cartItems');
  itemsEl.innerHTML = '';
  if(state.cart.length===0) {{
    itemsEl.textContent = 'Seu carrinho está vazio';
  }} else {{
    state.cart.forEach(i=>{
      const row = document.createElement('div');
      row.className = 'flex justify-between items-center mb-2';
      row.innerHTML = `<div>
        <div class="font-bold">${{i.name}}</div>
        <div class="text-sm">R$ ${{formatPrice(i.price)}} x ${{i.qty}}</div>
      </div>
      <div>
        <button data-id="${{i.id}}" class="minus px-2 py-1 border rounded mr-1">-</button>
        <button data-id="${{i.id}}" class="plus px-2 py-1 border rounded">+</button>
      </div>`;
      itemsEl.appendChild(row);
    });
  }}
  const total = state.cart.reduce((s,i)=>s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = formatPrice(total);
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
  // handlers
  document.querySelectorAll('.minus').forEach(b=>b.onclick = function(){{
    const id=Number(this.dataset.id);
    const it=state.cart.find(x=>x.id===id);
    if(!it) return;
    it.qty--;
    if(it.qty<=0) state.cart = state.cart.filter(x=>x.id!==id);
    saveCart(); renderCartModal(); renderCartCount();
  }});
  document.querySelectorAll('.plus').forEach(b=>b.onclick = function(){{
    const id=Number(this.dataset.id);
    const it=state.cart.find(x=>x.id===id);
    if(!it) return;
    it.qty++; saveCart(); renderCartModal(); renderCartCount();
  }});
}}

function init() {{
  renderCategories();
  renderProducts();
  renderCartCount();
  // open cart
  document.getElementById('cartBtn').onclick = ()=> renderCartModal();
  document.getElementById('closeCart').onclick = ()=> {{
    const modal=document.getElementById('cartModal');
    modal.classList.add('hidden'); modal.style.display='none';
  }};
  document.getElementById('checkout').onclick = ()=> {{
    alert('Checkout não configurado nesta versão.'); 
  }};
}}

document.addEventListener('DOMContentLoaded', init);
