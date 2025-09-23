const categoryButtons = document.querySelectorAll('.categories button');
const productGrid = document.getElementById('product-grid');
const categoryTitle = document.getElementById('category-title');
const productCount = document.getElementById('product-count');

function filterCategory(category, btn) {
  categoryButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const allProducts = productGrid.querySelectorAll('.product-card');
  let visibleCount = 0;

  allProducts.forEach(p => {
    if (category === 'todos' || p.dataset.category === category) {
      p.style.display = 'block';
      visibleCount++;
    } else {
      p.style.display = 'none';
    }
  });

  categoryTitle.textContent = btn.textContent;
  productCount.textContent = visibleCount + ' productos encontrados';
}

function logout() {
  window.location.href = '../index.html';
}

// 🔎 Buscador
document.getElementById('search').addEventListener('input', function() {
  const term = this.value.toLowerCase();
  const allProducts = productGrid.querySelectorAll('.product-card');
  let visibleCount = 0;

  allProducts.forEach(p => {
    if (p.dataset.name.toLowerCase().includes(term)) {
      p.style.display = 'block';
      visibleCount++;
    } else {
      p.style.display = 'none';
    }
  });

  productCount.textContent = visibleCount + ' productos encontrados';
});

// 🛒 Carrito con localStorage
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function toggleCart() {
  const cartEl = document.getElementById('cart');
  cartEl.style.display = cartEl.style.display === 'none' ? 'block' : 'none';
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.style.marginBottom = '0.5rem';
    li.innerHTML = `
      ${item.name} - ${item.price} 
      <button onclick="removeFromCart(${index})" style="margin-left:0.5rem;">❌</button>
    `;
    cartItems.appendChild(li);

    total += parseFloat(item.price.replace('$',''));
  });

  document.getElementById('cart-total').textContent = 'Total: $' + total.toFixed(2);
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function checkout() {
  alert('Compraste ' + cart.length + ' productos por un total de ' + document.getElementById('cart-total').textContent);
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// Inicializar contador
updateCartCount();