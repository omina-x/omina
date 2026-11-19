/**
 * ANDIJON GRILL — MAIN APPLICATION JAVASCRIPT
 * Handles product catalog, category filtering, live search,
 * shopping cart with localStorage, checkout & receipt generation,
 * demo user authentication, contact form validation, and UI animations.
 */

'use strict';

/* =========================================================
   1. MENU & SPECIAL OFFERS DATA (UZS PRICING)
   ========================================================= */
const MENU_ITEMS = [
  // 1. Hot Dog
  {
    id: 'hd-1',
    name: 'Classic Andijon Hot Dog',
    category: 'Hot Dog',
    price: 16000,
    description: 'Yumshoq bulochka, mol go‘shtli sosiska, karam salati, xantal va maxsus pomidor sousi.',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hd-2',
    name: 'Double Cheese Royal Hot Dog',
    category: 'Hot Dog',
    price: 24000,
    description: 'Ikkita dudlangan sosiska, eritilgan Chedder pishlog‘i, qovurilgan piyoz va barbekyu sousi.',
    image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80'
  },

  // 2. Lavash
  {
    id: 'lv-1',
    name: 'Tandir Mol Go‘shtli Lavash',
    category: 'Lavash',
    price: 34000,
    description: 'Tovada qizartirilgan yupqa xamir, shirali mol go‘shti, pomidor, bodring, chips va oq sarimsoqli sous.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'lv-2',
    name: 'Pishloqli Tovuq Lavash',
    category: 'Lavash',
    price: 31000,
    description: 'Grilda pishgan tovuq filesi, ko‘p miqdorda motsarella pishlog‘i, yangi sabzavotlar va firma sousi.',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80'
  },

  // 3. Pizza
  {
    id: 'pz-1',
    name: 'Pepperoni Klassik (32 sm)',
    category: 'Pizza',
    price: 68000,
    description: 'Yupqa italyan xamiri, mol go‘shtli pepperoni kolbasasi, motsarella pishlog‘i va oregano ziravori.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pz-2',
    name: 'Andijon Assorti Pizza (35 sm)',
    category: 'Pizza',
    price: 82000,
    description: 'Mol go‘shti, tovuq filesi, qo‘ziqorin, zaytun, bulg‘or qalampiri va ikki xil pishloq uyg‘unligi.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },

  // 4. Burger
  {
    id: 'bg-1',
    name: 'Double Andijon Burger',
    category: 'Burger',
    price: 38000,
    description: 'Ikkita 100% mol go‘shti kotleti, ikki qavat Chedder pishlog‘i, tuzlangan bodring va maxsus grill sous.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bg-2',
    name: 'Crispy Chicken Burger',
    category: 'Burger',
    price: 29000,
    description: 'Qarsildoq panirovkadagi tovuq filesi, aysberg salati, yangi pomidor va mayin qaymoqli sous.',
    image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80'
  },

  // 5. Donar
  {
    id: 'dn-1',
    name: 'Tarelka Donar Kebab',
    category: 'Donar',
    price: 42000,
    description: 'Vertelda pishirilgan mol go‘shti, guruch, kartoshka fri, yangi salat va issiq non bilan tortiladi.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dn-2',
    name: 'Nonli Turk Donar',
    category: 'Donar',
    price: 28000,
    description: 'Xushbo‘y turk noni ichida shirali donar go‘shti, qizil piyoz, pomidor va maxsus achchiq-shirin sous.',
    image: 'https://images.unsplash.com/photo-1644704170910-a0cdf183649b?auto=format&fit=crop&w=600&q=80'
  },

  // 6. Gazli ichimliklar
  {
    id: 'gz-1',
    name: 'Coca-Cola 0.5L (Muzdek)',
    category: 'Gazli ichimliklar',
    price: 9000,
    description: 'Burger va lavashlar bilan eng zo‘r uyg‘unlashuvchi salqin gazlangan ichimlik.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gz-2',
    name: 'Fanta Apelsin 0.5L',
    category: 'Gazli ichimliklar',
    price: 9000,
    description: 'Yorqin apelsin ta’miga ega tetiklashtiruvchi gazli ichimlik.',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80'
  },

  // 7. Gazsiz ichimliklar
  {
    id: 'ng-1',
    name: 'Tabiiy Olma Sharbati 1L',
    category: 'Gazsiz ichimliklar',
    price: 15000,
    description: 'Farg‘ona vodiysining sarxil olmalaridan tayyorlangan 100% tabiiy gazsiz sharbat.',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ng-2',
    name: 'Limonli Ice Tea 0.5L',
    category: 'Gazsiz ichimliklar',
    price: 10000,
    description: 'Yalpiz va limon ekstrakti qo‘shilgan salqin ko‘k choy ichimligi.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80'
  }
];

const SPECIAL_OFFERS = {
  'offer-1': {
    id: 'offer-1',
    name: 'Andijon Mega Kombo (Aksiya)',
    category: 'Aksiya',
    price: 92000,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80'
  },
  'offer-2': {
    id: 'offer-2',
    name: 'Oilaviy Pepperoni Pizza + 1.5L Ichimlik',
    category: 'Aksiya',
    price: 79000,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80'
  },
  'offer-3': {
    id: 'offer-3',
    name: 'Tandoor Lavash Duet (2x Lavash + Ichimlik)',
    category: 'Aksiya',
    price: 69000,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80'
  }
};

/* =========================================================
   2. APPLICATION STATE & STORAGE KEYS
   ========================================================= */
const STORAGE_KEYS = {
  CART: 'andijon_grill_cart_v1',
  USERS: 'andijon_grill_users_v1',
  CURRENT_USER: 'andijon_grill_current_user_v1',
  ORDERS: 'andijon_grill_orders_v1'
};

const DELIVERY_FEE = 10000;
const FREE_DELIVERY_THRESHOLD = 100000;

let state = {
  cart: JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [],
  selectedCategory: 'all',
  searchQuery: '',
  cardQuantities: {},
  currentUser: JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) || null
};

/* =========================================================
   3. UTILITY HELPERS
   ========================================================= */

/** Formats numbers into clean Uzbek Som currency strings (e.g. 38 000 UZS) */
function formatUZS(amount) {
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} UZS`;
}

/** Shows floating toast notifications */
function showToast(message, type = 'default') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconClass =
    type === 'success'
      ? 'fa-circle-check'
      : type === 'error'
      ? 'fa-circle-exclamation'
      : 'fa-bag-shopping';

  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/** Saves current cart to localStorage and updates UI */
function saveCart() {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
  renderCart();
}

/* =========================================================
   4. MENU RENDERING, FILTERING & LIVE SEARCH
   ========================================================= */

/** Renders filtered food cards into #menu-grid */
function renderMenu() {
  const menuGrid = document.getElementById('menu-grid');
  const noResults = document.getElementById('no-results');

  const query = state.searchQuery.trim().toLowerCase();

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      state.selectedCategory === 'all' || item.category === state.selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filteredItems.length === 0) {
    menuGrid.innerHTML = '';
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  menuGrid.innerHTML = filteredItems
    .map((item) => {
      const qty = state.cardQuantities[item.id] || 1;
      return `
        <article class="product-card" data-id="${item.id}">
          <div class="product-img-box">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <span class="product-cat-tag">${item.category}</span>
          </div>
          <div class="product-body">
            <h3 class="product-title">${item.name}</h3>
            <p class="product-desc">${item.description}</p>
            <div class="product-meta">
              <span class="product-price">${formatUZS(item.price)}</span>
              <div class="card-qty-control" aria-label="Miqdor tanlash">
                <button type="button" class="card-qty-btn" data-action="dec" data-id="${item.id}">-</button>
                <span class="card-qty-val" id="card-qty-${item.id}">${qty}</span>
                <button type="button" class="card-qty-btn" data-action="inc" data-id="${item.id}">+</button>
              </div>
            </div>
            <button type="button" class="add-to-cart-btn" data-id="${item.id}">
              <i class="fa-solid fa-cart-plus"></i>
              <span>Savatga qo'shish</span>
            </button>
          </div>
        </article>
      `;
    })
    .join('');
}

/** Initializes category tabs, search input, and card quantity/add listeners */
function initMenuInteractions() {
  const categoryContainer = document.getElementById('category-filters');
  const searchInput = document.getElementById('menu-search');
  const clearSearchBtn = document.getElementById('clear-search');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const menuGrid = document.getElementById('menu-grid');

  // Category tab filtering
  categoryContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;

    document.querySelectorAll('.cat-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.selectedCategory = btn.dataset.category;
    renderMenu();
  });

  // Footer quick category links
  document.querySelectorAll('.footer-cat-link').forEach((link) => {
    link.addEventListener('click', () => {
      const cat = link.dataset.cat;
      state.selectedCategory = cat;
      document.querySelectorAll('.cat-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.category === cat);
      });
      renderMenu();
    });
  });

  // Live search input
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.hidden = state.searchQuery.length === 0;
    renderMenu();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.hidden = true;
    renderMenu();
  });

  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.hidden = true;
    state.selectedCategory = 'all';
    document.querySelectorAll('.cat-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.category === 'all');
    });
    renderMenu();
  });

  // Product card quantity selector & Add to Cart delegation
  menuGrid.addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('.card-qty-btn');
    if (qtyBtn) {
      const id = qtyBtn.dataset.id;
      const action = qtyBtn.dataset.action;
      let current = state.cardQuantities[id] || 1;
      if (action === 'inc') current += 1;
      if (action === 'dec' && current > 1) current -= 1;
      state.cardQuantities[id] = current;
      const qtySpan = document.getElementById(`card-qty-${id}`);
      if (qtySpan) qtySpan.textContent = current;
      return;
    }

    const addBtn = e.target.closest('.add-to-cart-btn');
    if (addBtn) {
      const id = addBtn.dataset.id;
      const product = MENU_ITEMS.find((p) => p.id === id);
      const qtyToAdd = state.cardQuantities[id] || 1;
      if (product) {
        addToCart(product, qtyToAdd);
        state.cardQuantities[id] = 1;
        const qtySpan = document.getElementById(`card-qty-${id}`);
        if (qtySpan) qtySpan.textContent = 1;
      }
    }
  });

  // Special Offer "Buy Now" buttons
  document.querySelectorAll('.buy-offer-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const offer = SPECIAL_OFFERS[btn.dataset.offerId];
      if (offer) {
        addToCart(offer, 1);
        openCartDrawer();
      }
    });
  });
}

/* =========================================================
   5. SHOPPING CART SYSTEM
   ========================================================= */

/** Adds a product or combo offer to the cart */
function addToCart(product, quantity = 1) {
  const existing = state.cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    });
  }
  saveCart();
  showToast(`"${product.name}" (${quantity} ta) savatga qo'shildi!`, 'success');
}

/** Calculates subtotal, delivery fee, and grand total */
function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  return { subtotal, delivery, total, totalCount };
}

/** Renders cart items inside the sidebar drawer and updates navbar counter */
function renderCart() {
  const container = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-footer');
  const badge = document.getElementById('cart-count');
  const subtotalEl = document.getElementById('cart-subtotal');
  const deliveryEl = document.getElementById('cart-delivery-fee');
  const hintEl = document.getElementById('free-delivery-hint');
  const totalEl = document.getElementById('cart-total');

  const { subtotal, delivery, total, totalCount } = calculateCartTotals();
  badge.textContent = totalCount;

  if (state.cart.length === 0) {
    footer.hidden = true;
    container.innerHTML = `
      <div class="empty-cart-state">
        <i class="fa-solid fa-basket-shopping"></i>
        <h4>Savatingiz hozircha bo'sh</h4>
        <p>Mazali burger, lavash yoki pitsalardan birini tanlab savatga qo'shing!</p>
        <a href="#menu" class="btn btn-primary" id="empty-cart-menu-btn">Menyuga o'tish</a>
      </div>
    `;
    const goMenuBtn = document.getElementById('empty-cart-menu-btn');
    if (goMenuBtn) {
      goMenuBtn.addEventListener('click', closeAllOverlays);
    }
    return;
  }

  footer.hidden = false;
  container.innerHTML = state.cart
    .map(
      (item) => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-price">${formatUZS(item.price * item.quantity)}</span>
          <div class="cart-item-controls">
            <button type="button" class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button type="button" class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
          </div>
        </div>
        <button type="button" class="remove-item-btn" data-id="${item.id}" title="O'chirish">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `
    )
    .join('');

  subtotalEl.textContent = formatUZS(subtotal);
  deliveryEl.textContent = delivery === 0 ? 'Bepul (0 UZS)' : formatUZS(delivery);

  if (subtotal >= FREE_DELIVERY_THRESHOLD) {
    hintEl.textContent = 'Tabriklaymiz! Siz uchun yetkazib berish bepul.';
  } else {
    const diff = FREE_DELIVERY_THRESHOLD - subtotal;
    hintEl.textContent = `Bepul yetkazish uchun yana ${formatUZS(diff)} qo'shing.`;
  }

  totalEl.textContent = formatUZS(total);
}

/** Initializes cart drawer events */
function initCartSystem() {
  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartBody = document.getElementById('cart-items-container');
  const clearCartBtn = document.getElementById('clear-cart-btn');
  const openCheckoutBtn = document.getElementById('open-checkout-btn');

  cartBtn.addEventListener('click', openCartDrawer);
  closeCartBtn.addEventListener('click', closeAllOverlays);

  cartBody.addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('.qty-btn');
    if (qtyBtn) {
      const id = qtyBtn.dataset.id;
      const action = qtyBtn.dataset.action;
      const item = state.cart.find((i) => i.id === id);
      if (!item) return;

      if (action === 'increase') {
        item.quantity += 1;
      } else if (action === 'decrease') {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter((i) => i.id !== id);
        }
      }
      saveCart();
      return;
    }

    const removeBtn = e.target.closest('.remove-item-btn');
    if (removeBtn) {
      const id = removeBtn.dataset.id;
      state.cart = state.cart.filter((i) => i.id !== id);
      saveCart();
      showToast('Mahsulot savatdan o‘chirildi.');
    }
  });

  clearCartBtn.addEventListener('click', () => {
    state.cart = [];
    saveCart();
    showToast('Savat tozalandi.');
  });

  openCheckoutBtn.addEventListener('click', () => {
    if (state.cart.length === 0) return;
    closeAllOverlays();
    openCheckoutModal();
  });
}

/* =========================================================
   6. CHECKOUT & DEMO ORDER SUBMISSION
   ========================================================= */

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const formView = document.getElementById('checkout-form-view');
  const receiptView = document.getElementById('order-receipt-view');
  const itemsList = document.getElementById('checkout-items-list');
  const finalTotalEl = document.getElementById('checkout-final-total');

  formView.hidden = false;
  receiptView.hidden = true;

  // Pre-fill customer details if logged in
  if (state.currentUser) {
    document.getElementById('cust-name').value = state.currentUser.name || '';
    document.getElementById('cust-phone').value = state.currentUser.phone || '';
  }

  const { subtotal, delivery, total } = calculateCartTotals();

  itemsList.innerHTML =
    state.cart
      .map(
        (item) => `
      <li>
        <span>${item.name} × ${item.quantity}</span>
        <strong>${formatUZS(item.price * item.quantity)}</strong>
      </li>
    `
      )
      .join('') +
    `<li><span>Yetkazib berish:</span><strong>${delivery === 0 ? 'Bepul' : formatUZS(delivery)}</strong></li>`;

  finalTotalEl.textContent = formatUZS(total);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function initCheckoutSystem() {
  const checkoutForm = document.getElementById('checkout-form');
  const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');
  const addressGroup = document.getElementById('address-field-group');
  const finishOrderBtn = document.getElementById('finish-order-btn');

  // Toggle address requirement based on Delivery vs Pickup
  orderTypeRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      const isPickup = radio.value === 'Olib ketish' && radio.checked;
      addressGroup.style.display = isPickup ? 'none' : 'block';
    });
  });

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const orderType = document.querySelector('input[name="orderType"]:checked').value;
    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const addressInput = document.getElementById('cust-address');
    const notesInput = document.getElementById('cust-notes');

    let isValid = true;

    if (nameInput.value.trim().length < 2) {
      setFieldError(nameInput, 'Iltimos, to‘liq ismingizni kiriting.');
      isValid = false;
    } else {
      clearFieldError(nameInput);
    }

    if (phoneInput.value.trim().length < 7) {
      setFieldError(phoneInput, 'Iltimos, to‘g‘ri telefon raqamini kiriting.');
      isValid = false;
    } else {
      clearFieldError(phoneInput);
    }

    if (orderType === 'Yetkazib berish' && addressInput.value.trim().length < 5) {
      setFieldError(addressInput, 'Yetkazib berish manzilini to‘liq kiriting.');
      isValid = false;
    } else {
      clearFieldError(addressInput);
    }

    if (!isValid) return;

    const { subtotal, delivery, total } = calculateCartTotals();
    const finalTotal = orderType === 'Olib ketish' ? subtotal : total;
    const orderNumber = `#AG-${Math.floor(100000 + Math.random() * 900000)}`;

    const orderRecord = {
      orderId: orderNumber,
      orderType,
      customerName: nameInput.value.trim(),
      customerPhone: phoneInput.value.trim(),
      address:
        orderType === 'Olib ketish'
          ? 'Andijon shahri markazi (Restorandan olib ketish)'
          : addressInput.value.trim(),
      notes: notesInput.value.trim(),
      items: [...state.cart],
      totalAmount: finalTotal,
      createdAt: new Date().toISOString()
    };

    // Save demo order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
    existingOrders.unshift(orderRecord);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(existingOrders));

    // Populate confirmation receipt
    document.getElementById('receipt-order-id').textContent = orderRecord.orderId;
    document.getElementById('receipt-order-type').textContent = orderRecord.orderType;
    document.getElementById('receipt-cust-name').textContent = orderRecord.customerName;
    document.getElementById('receipt-cust-phone').textContent = orderRecord.customerPhone;
    document.getElementById('receipt-cust-address').textContent = orderRecord.address;
    document.getElementById('receipt-total-amount').textContent = formatUZS(orderRecord.totalAmount);

    document.getElementById('receipt-items-list').innerHTML = orderRecord.items
      .map(
        (item) => `
        <li>
          <span>${item.name} × ${item.quantity}</span>
          <strong>${formatUZS(item.price * item.quantity)}</strong>
        </li>
      `
      )
      .join('');

    // Clear cart after successful order
    state.cart = [];
    saveCart();
    checkoutForm.reset();

    document.getElementById('checkout-form-view').hidden = true;
    document.getElementById('order-receipt-view').hidden = false;
    showToast(`Buyurtma ${orderNumber} muvaffaqiyatli yaratildi!`, 'success');
  });

  finishOrderBtn.addEventListener('click', () => {
    closeAllModals();
  });
}

/* =========================================================
   7. DEMO AUTHENTICATION (LOGIN & REGISTRATION)
   ========================================================= */

function updateAuthUI() {
  const authBtnText = document.getElementById('auth-btn-text');
  const profilePanel = document.getElementById('user-profile-panel');
  const authFormsWrapper = document.getElementById('auth-forms-wrapper');

  if (state.currentUser) {
    const firstName = state.currentUser.name.split(' ')[0];
    authBtnText.textContent = firstName;
    profilePanel.hidden = false;
    authFormsWrapper.hidden = true;

    document.getElementById('profile-display-name').textContent = state.currentUser.name;
    document.getElementById('profile-display-contact').textContent = `${state.currentUser.phone} • ${state.currentUser.email}`;
    const orders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
    document.getElementById('user-orders-count').textContent = orders.length;
  } else {
    authBtnText.textContent = 'Kirish';
    profilePanel.hidden = true;
    authFormsWrapper.hidden = false;
  }
}

function initAuthSystem() {
  const authBtn = document.getElementById('auth-btn');
  const authModal = document.getElementById('auth-modal');
  const authTabs = document.querySelectorAll('.auth-tab');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const logoutBtn = document.getElementById('logout-btn');

  authBtn.addEventListener('click', () => {
    updateAuthUI();
    authModal.classList.add('open');
    authModal.setAttribute('aria-hidden', 'false');
  });

  // Switch between Login and Register tabs
  authTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      authTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.tab;
      loginForm.hidden = target !== 'login';
      registerForm.hidden = target !== 'register';
    });
  });

  // Password visibility toggles
  document.querySelectorAll('.toggle-pass-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      const icon = btn.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  });

  // Registration Form Submission
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('reg-name');
    const phoneInput = document.getElementById('reg-phone');
    const emailInput = document.getElementById('reg-email');
    const passInput = document.getElementById('reg-password');
    const confirmInput = document.getElementById('reg-confirm');
    const feedback = document.getElementById('register-feedback');

    let valid = true;

    if (nameInput.value.trim().length < 2) {
      setFieldError(nameInput, 'To‘liq ismingizni kiriting.');
      valid = false;
    } else clearFieldError(nameInput);

    if (phoneInput.value.trim().length < 7) {
      setFieldError(phoneInput, 'Telefon raqamini kiriting.');
      valid = false;
    } else clearFieldError(phoneInput);

    if (!emailInput.value.includes('@')) {
      setFieldError(emailInput, 'To‘g‘ri email manzil kiriting.');
      valid = false;
    } else clearFieldError(emailInput);

    if (passInput.value.length < 6) {
      setFieldError(passInput, 'Parol kamida 6 ta belgidan iborat bo‘lsin.');
      valid = false;
    } else clearFieldError(passInput);

    if (confirmInput.value !== passInput.value || confirmInput.value === '') {
      setFieldError(confirmInput, 'Parollar mos kelmadi.');
      valid = false;
    } else clearFieldError(confirmInput);

    if (!valid) return;

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    const duplicate = users.some(
      (u) =>
        u.email.toLowerCase() === emailInput.value.trim().toLowerCase() ||
        u.phone === phoneInput.value.trim()
    );

    if (duplicate) {
      feedback.textContent = 'Ushbu email yoki telefon raqam allaqachon ro‘yxatdan o‘tgan.';
      feedback.className = 'form-feedback error';
      feedback.hidden = false;
      return;
    }

    const newUser = {
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
      password: passInput.value
    };

    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

    state.currentUser = newUser;
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));

    feedback.textContent = 'Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!';
    feedback.className = 'form-feedback success';
    feedback.hidden = false;

    registerForm.reset();
    showToast(`Xush kelibsiz, ${newUser.name}!`, 'success');

    setTimeout(() => {
      feedback.hidden = true;
      updateAuthUI();
    }, 900);
  });

  // Login Form Submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const identifierInput = document.getElementById('login-identifier');
    const passInput = document.getElementById('login-password');
    const feedback = document.getElementById('login-feedback');

    let valid = true;
    if (!identifierInput.value.trim()) {
      setFieldError(identifierInput, 'Telefon raqam yoki email kiriting.');
      valid = false;
    } else clearFieldError(identifierInput);

    if (!passInput.value) {
      setFieldError(passInput, 'Parolni kiriting.');
      valid = false;
    } else clearFieldError(passInput);

    if (!valid) return;

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    const idVal = identifierInput.value.trim().toLowerCase();

    const matchedUser = users.find(
      (u) =>
        (u.email.toLowerCase() === idVal || u.phone.toLowerCase() === idVal) &&
        u.password === passInput.value
    );

    if (!matchedUser) {
      feedback.textContent =
        'Login yoki parol noto‘g‘ri. Avval "Ro‘yxatdan o‘tish" bo‘limidan demo hisob yarating.';
      feedback.className = 'form-feedback error';
      feedback.hidden = false;
      return;
    }

    state.currentUser = matchedUser;
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(matchedUser));

    feedback.textContent = 'Tizimga muvaffaqiyatli kirdingiz!';
    feedback.className = 'form-feedback success';
    feedback.hidden = false;

    loginForm.reset();
    showToast(`Qaytganingizdan xursandmiz, ${matchedUser.name}!`, 'success');

    setTimeout(() => {
      feedback.hidden = true;
      updateAuthUI();
    }, 800);
  });

  // Logout
  logoutBtn.addEventListener('click', () => {
    state.currentUser = null;
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    updateAuthUI();
    showToast('Siz hisobdan chiqdingiz.');
  });
}

/* =========================================================
   8. CONTACT FORM VALIDATION
   ========================================================= */
function initContactForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const phoneInput = document.getElementById('contact-phone');
    const msgInput = document.getElementById('contact-message');

    let valid = true;

    if (nameInput.value.trim().length < 2) {
      setFieldError(nameInput, 'Ismingizni kiriting.');
      valid = false;
    } else clearFieldError(nameInput);

    if (phoneInput.value.trim().length < 7) {
      setFieldError(phoneInput, 'Telefon raqamingizni kiriting.');
      valid = false;
    } else clearFieldError(phoneInput);

    if (msgInput.value.trim().length < 5) {
      setFieldError(msgInput, 'Xabar matni kamida 5 ta belgidan iborat bo‘lsin.');
      valid = false;
    } else clearFieldError(msgInput);

    if (!valid) return;

    form.reset();
    showToast('Xabaringiz qabul qilindi! Tez orada bog‘lanamiz (Demo).', 'success');
  });
}

function setFieldError(inputEl, message) {
  const group = inputEl.closest('.form-group');
  if (!group) return;
  group.classList.add('invalid');
  const err = group.querySelector('.error-msg');
  if (err) err.textContent = message;
}

function clearFieldError(inputEl) {
  const group = inputEl.closest('.form-group');
  if (!group) return;
  group.classList.remove('invalid');
  const err = group.querySelector('.error-msg');
  if (err) err.textContent = '';
}

/* =========================================================
   9. NAVIGATION, DRAWERS, MODALS & SCROLL ANIMATIONS
   ========================================================= */
function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-drawer').setAttribute('aria-hidden', 'false');
  document.getElementById('nav-overlay').classList.add('active');
}

function closeAllOverlays() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-drawer').setAttribute('aria-hidden', 'true');
  document.getElementById('navbar').classList.remove('open');
  document.getElementById('hamburger-btn').classList.remove('active');
  document.getElementById('hamburger-btn').setAttribute('aria-expanded', 'false');
  document.getElementById('nav-overlay').classList.remove('active');
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach((m) => {
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
  });
}

function initNavigationAndAnimations() {
  const hamburger = document.getElementById('hamburger-btn');
  const navbar = document.getElementById('navbar');
  const overlay = document.getElementById('nav-overlay');
  const header = document.getElementById('header');
  const backToTop = document.getElementById('back-to-top');

  // Mobile Hamburger Menu
  hamburger.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    overlay.classList.toggle('active', isOpen);
  });

  overlay.addEventListener('click', closeAllOverlays);

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      closeAllOverlays();
    });
  });

  // Close modal buttons & backdrop click
  document.querySelectorAll('.close-modal-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetModal = document.getElementById(btn.dataset.modal);
      if (targetModal) {
        targetModal.classList.remove('open');
        targetModal.setAttribute('aria-hidden', 'true');
      }
    });
  });

  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // ESC key closes modals and drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllOverlays();
      closeAllModals();
    }
  });

  // Sticky header shadow, Back-to-Top button, and Active Nav Highlighting
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 30);
    backToTop.classList.toggle('visible', scrollY > 450);

    sections.forEach((sec) => {
      const top = sec.offsetTop - 130;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // IntersectionObserver for smooth scroll entrance animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* =========================================================
   10. INITIALIZE APPLICATION ON DOM READY
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Render initial UI
  renderMenu();
  renderCart();
  updateAuthUI();

  // Bind interactive systems
  initMenuInteractions();
  initCartSystem();
  initCheckoutSystem();
  initAuthSystem();
  initContactForm();
  initNavigationAndAnimations();

  // Hide preloader smoothly
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => preloader.classList.add('hidden'), 350);
  });
});