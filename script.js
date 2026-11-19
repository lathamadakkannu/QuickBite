/* ==========================================================
   1. COMPONENT LOADER
   ========================================================== */

const headerHTML = `
<header id="header">
    <div class="container header-inner">
        <div class="logo-group">
            <a href="index.html" class="logo">
                <i class="ph-fill ph-bowl-food"></i>
                <span>QuickBite</span>
            </a>
            <div class="location-selector" id="locationSelector">
                <span id="selectedLocation">Bangalore</span>
                <i class="ph ph-caret-down"></i>
                <div class="location-dropdown" id="locationDropdown">
                    <ul id="locationList">
                        <li data-location="Bangalore">Bangalore</li>
                        <li data-location="Mumbai">Mumbai</li>
                        <li data-location="Delhi">Delhi</li>
                        <li data-location="Gurgaon">Gurgaon</li>
                        <li data-location="Hyderabad">Hyderabad</li>
                        <li data-location="Pune">Pune</li>
                        <li data-location="Chennai">Chennai</li>
                        <li data-location="Kolkata">Kolkata</li>
                    </ul>
                </div>
            </div>
        </div>

        <nav>
            <ul class="nav-links">
                <li class="mobile-nav-close-item">
                    <button class="mobile-nav-close" id="closeMobileMenu" type="button" aria-label="Close navigation menu"><i class="ph ph-x"></i></button>
                </li>
                <li><a href="index.html" class="nav-link" data-page="index"><i class="ph ph-magnifying-glass"></i> Search</a></li>
                <li><a href="offers.html" class="nav-link" data-page="offers"><i class="ph ph-percent"></i> Offers</a></li>
                <li><a href="help.html" class="nav-link" data-page="help"><i class="ph ph-info"></i> Help</a></li>
                <li><a href="#" class="nav-link cart-link" id="cartToggle"><i class="ph ph-shopping-cart"></i> Cart <span class="cart-count" id="cartBadge">0</span></a></li>
                
                <li class="nav-link auth-dropdown-container" id="authContainer">
                    <a href="#" class="nav-link" id="signInLink"><i class="ph ph-user"></i> <span id="authLinkText">Sign In</span></a>
                    <div class="auth-dropdown" id="authDropdown">
                        <a href="#" id="logoutBtn"><i class="ph ph-sign-out"></i> Logout</a>
                    </div>
                </li>
            </ul>
            <button class="menu-toggle" id="menuToggle">
                <i class="ph ph-list"></i>
            </button>
        </nav>
    </div>
</header>
`;

const footerHTML = `
<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <a href="index.html" class="logo" style="color: white; margin-bottom: 20px;">
                    <i class="ph-fill ph-bowl-food" style="color: white;"></i>
                    <span>QuickBite</span>
                </a>
                <ul>
                    <li>© 2026 Bundl Technologies Pvt. Ltd</li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="careers.html">Careers</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="bite-one.html">QuickBite One</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact us</h4>
                <ul>
                    <li><a href="help.html">Help & Support</a></li>
                    <li><a href="partner.html">Partner with us</a></li>
                    <li><a href="ride.html">Ride with us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>We deliver to:</h4>
                <ul>
                    <li><a href="#">Bangalore</a></li>
                    <li><a href="#">Gurgaon</a></li>
                    <li><a href="#">Hyderabad</a></li>
                    <li><a href="#">Delhi</a></li>
                    <li><a href="#">Mumbai</a></li>
                    <li><a href="#">Pune</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="social-links">
                <a href="#"><i class="ph ph-facebook-logo"></i></a>
                <a href="#"><i class="ph ph-instagram-logo"></i></a>
                <a href="#"><i class="ph ph-twitter-logo"></i></a>
            </div>
            <div class="app-links">
                <span>Get the app on:</span>
                <a href="#">App Store</a>
                <a href="#">Google Play</a>
            </div>
        </div>
    </div>
</footer>
`;

const modalsHTML = `
<!-- Login Modal -->
<div class="modal-overlay" id="authModal">
    <div class="modal-content">
        <div class="modal-close" id="closeModal"><i class="ph ph-x"></i></div>
        <h2 class="modal-title">Login</h2>
        <form id="authForm" novalidate>
            <div class="form-group">
                <input type="text" id="userName" placeholder="Full Name" maxlength="50" required>
                <div class="form-error" id="nameError"></div>
            </div>
            <div class="form-group">
                <input type="tel" id="userMobile" placeholder="Phone Number" maxlength="10" required>
                <div class="form-error" id="mobileError"></div>
            </div>
            <button type="submit" class="auth-btn">LOGIN</button>
        </form>
        <p style="margin-top: 20px; font-size: 14px; color: var(--text-muted);">
            By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
    </div>
</div>

<!-- Cart Drawer -->
<div class="cart-drawer-overlay" id="cartDrawerOverlay">
    <div class="cart-drawer">
        <div class="drawer-header">
            <h3>Your Cart</h3>
            <i class="ph ph-x" id="closeCart"></i>
        </div>
        <div class="drawer-body" id="cartItemsContainer">
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <span>Good food is always cooking! Go ahead, order some yummy items from the menu.</span>
            </div>
        </div>
        <div class="drawer-footer">
            <button class="checkout-btn">Checkout</button>
        </div>
    </div>
</div>

<!-- Order Success Modal -->
<div class="order-success-overlay" id="orderSuccessModal">
    <div class="order-success-card">
        <div class="success-icon"><i class="ph-fill ph-check-circle"></i></div>
        <h2>Order Placed!</h2>
        <p class="order-success-msg">Your delicious food is being prepared.</p>
        <div class="order-success-total" id="orderSuccessTotal"></div>
        <button class="order-success-btn" id="orderSuccessClose">Awesome, thanks!</button>
    </div>
</div>

<!-- Restaurant Menu Modal (NEW) -->
<div class="restaurant-modal-overlay" id="restaurantModal">
    <div class="restaurant-modal">
        <div class="restaurant-modal-header">
            <div class="restaurant-modal-info">
                <h2 id="rmName">Restaurant</h2>
                <p id="rmMeta">Rating · Delivery time</p>
            </div>
            <button class="restaurant-modal-close" id="closeRestaurantModal"><i class="ph ph-x"></i></button>
        </div>
        <div class="restaurant-modal-body" id="rmFoodList"></div>
    </div>
</div>
`;

/* ==========================================================
   2. DATA
   ========================================================== */
const categories = [
    { id: 1, name: "Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=200" },
    { id: 2, name: "Pizza & Burgers", image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=200&q=80" },
    { id: 3, name: "Chinese", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=200" },
    { id: 4, name: "Desserts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=200" },
    { id: 5, name: "Healthy", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200" },
    { id: 6, name: "North Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=200" },
    { id: 7, name: "South Indian", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=200" }
];

const restaurants = [
    { id: 1, name: "Pizza Hut", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600", rating: 4.2, deliveryTime: "30-35 mins", cuisines: "Pizzas, Fast Food", location: "Bangalore", veg: false, price: 400, offers: true },
    { id: 2, name: "Biryani Blues", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600", rating: 4.5, deliveryTime: "25-30 mins", cuisines: "Biryani, Hyderabadi", location: "Bangalore", veg: false, price: 350, offers: true },
    { id: 3, name: "Green Salad Co.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600", rating: 4.8, deliveryTime: "15-20 mins", cuisines: "Healthy, Salads", location: "Bangalore", veg: true, price: 250, offers: false },
    { id: 4, name: "Cafe Coffee Day", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600", rating: 4.1, deliveryTime: "20-25 mins", cuisines: "Beverages, Desserts", location: "Bangalore", veg: true, price: 200, offers: true },
    { id: 5, name: "Empire Restaurant", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600", rating: 4.6, deliveryTime: "35-40 mins", cuisines: "North Indian, Mughlai, Chinese", location: "Bangalore", veg: false, price: 500, offers: true },
    { id: 6, name: "MTR - Mavalli Tiffin Room", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600", rating: 4.7, deliveryTime: "25-30 mins", cuisines: "South Indian, Vegetarian", location: "Bangalore", veg: true, price: 280, offers: false },
    { id: 7, name: "Sweet Treats", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600", rating: 4.6, deliveryTime: "20-25 mins", cuisines: "Desserts, Cakes", location: "Bangalore", veg: true, price: 250, offers: false },
    { id: 8, name: "Meghana Foods", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600", rating: 4.3, deliveryTime: "40-45 mins", cuisines: "Biryani, Andhra, Chinese", location: "Bangalore", veg: false, price: 380, offers: true },
    { id: 9, name: "The Bowl Company", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600", rating: 4.2, deliveryTime: "25-30 mins", cuisines: "Bowls, Healthy, Asian", location: "Bangalore", veg: true, price: 320, offers: false },
    { id: 10, name: "The Burger Club", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600", rating: 4.0, deliveryTime: "35-40 mins", cuisines: "Burgers, Beverages", location: "Mumbai", veg: false, price: 300, offers: true },
    { id: 11, name: "Mumbai Darbar", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600", rating: 4.4, deliveryTime: "30-35 mins", cuisines: "Mughlai, North Indian", location: "Mumbai", veg: false, price: 450, offers: true },
    { id: 12, name: "Leopold Cafe", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600", rating: 4.5, deliveryTime: "35-40 mins", cuisines: "Continental, Fast Food", location: "Mumbai", veg: false, price: 550, offers: false },
    { id: 13, name: "Shree Thaker Bhojanalay", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600", rating: 4.6, deliveryTime: "25-30 mins", cuisines: "Gujarati, Thali, Vegetarian", location: "Mumbai", veg: true, price: 350, offers: true },
    { id: 14, name: "Bademiya", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600", rating: 4.3, deliveryTime: "30-35 mins", cuisines: "Rolls, Kebabs, Mughlai", location: "Mumbai", veg: false, price: 400, offers: true },
    { id: 15, name: "Cafe Madras", image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600", rating: 4.4, deliveryTime: "20-25 mins", cuisines: "South Indian, Filter Coffee", location: "Mumbai", veg: true, price: 220, offers: false },
    { id: 16, name: "Royal Treat", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600", rating: 4.3, deliveryTime: "40-45 mins", cuisines: "North Indian, Thali", location: "Delhi", veg: true, price: 320, offers: false },
    { id: 17, name: "Delhi Chaat Corner", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600", rating: 4.6, deliveryTime: "20-25 mins", cuisines: "Chaat, Street Food", location: "Delhi", veg: true, price: 180, offers: false },
    { id: 18, name: "Karim's", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600", rating: 4.7, deliveryTime: "35-40 mins", cuisines: "Mughlai, Kebabs, Non-Veg", location: "Delhi", veg: false, price: 500, offers: true },
    { id: 19, name: "Saravana Bhavan", image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600", rating: 4.4, deliveryTime: "25-30 mins", cuisines: "South Indian, Vegetarian", location: "Delhi", veg: true, price: 250, offers: false },
    { id: 20, name: "KFC", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600", rating: 4.0, deliveryTime: "30-35 mins", cuisines: "Fried Chicken, Fast Food", location: "Delhi", veg: false, price: 350, offers: true },
    { id: 21, name: "Haldiram's", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600", rating: 4.3, deliveryTime: "25-30 mins", cuisines: "North Indian, Sweets, Snacks", location: "Delhi", veg: true, price: 280, offers: true },
    { id: 22, name: "Paradise Biryani", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600", rating: 4.8, deliveryTime: "30-35 mins", cuisines: "Biryani, Hyderabadi", location: "Hyderabad", veg: false, price: 420, offers: true },
    { id: 23, name: "Bawarchi", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600", rating: 4.6, deliveryTime: "35-40 mins", cuisines: "Biryani, Andhra", location: "Hyderabad", veg: false, price: 380, offers: true },
    { id: 24, name: "Chutneys", image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600", rating: 4.4, deliveryTime: "20-25 mins", cuisines: "South Indian, Breakfast", location: "Hyderabad", veg: true, price: 220, offers: false },
    { id: 25, name: "Vaishali", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600", rating: 4.5, deliveryTime: "20-25 mins", cuisines: "South Indian, Fast Food", location: "Pune", veg: true, price: 200, offers: false },
    { id: 26, name: "George Restaurant", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600", rating: 4.3, deliveryTime: "30-35 mins", cuisines: "Burgers, Sandwiches, Fast Food", location: "Pune", veg: false, price: 350, offers: true },
    { id: 27, name: "Shabree", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600", rating: 4.4, deliveryTime: "25-30 mins", cuisines: "North Indian, Mughlai", location: "Pune", veg: false, price: 400, offers: true },
    { id: 28, name: "Murugan Idli Shop", image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600", rating: 4.5, deliveryTime: "15-20 mins", cuisines: "South Indian, Idli, Dosa", location: "Chennai", veg: true, price: 150, offers: false },
    { id: 29, name: "Anjappar", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600", rating: 4.4, deliveryTime: "30-35 mins", cuisines: "Chettinad, Seafood, Non-Veg", location: "Chennai", veg: false, price: 450, offers: true },
    { id: 30, name: "Ponnusamy Hotel", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600", rating: 4.3, deliveryTime: "35-40 mins", cuisines: "Non-Veg, Biryani, Andhra", location: "Chennai", veg: false, price: 380, offers: true },
    { id: 31, name: "Peter Cat", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600", rating: 4.6, deliveryTime: "30-35 mins", cuisines: "Continental, Kebabs, Bengali", location: "Kolkata", veg: false, price: 550, offers: true },
    { id: 32, name: "Kusum Snacks", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=600", rating: 4.3, deliveryTime: "15-20 mins", cuisines: "Street Food, Chaat, Sweets", location: "Kolkata", veg: true, price: 120, offers: false },
    { id: 33, name: "Oh! Calcutta", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600", rating: 4.5, deliveryTime: "35-40 mins", cuisines: "Bengali, Seafood", location: "Kolkata", veg: false, price: 600, offers: true },
    { id: 34, name: "Dessert Delight", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600", rating: 4.4, deliveryTime: "25-30 mins", cuisines: "Ice Cream, Desserts", location: "Bangalore", veg: true, price: 200, offers: true },
    { id: 35, name: "Pizza Corner", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=600", rating: 4.5, deliveryTime: "30-35 mins", cuisines: "Pizza, Italian", location: "Bangalore", veg: true, price: 400, offers: true },
    { id: 36, name: "Burger Hub", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600", rating: 4.3, deliveryTime: "25-30 mins", cuisines: "Burgers, Fast Food", location: "Bangalore", veg: false, price: 300, offers: true }
];

/* ==========================================================
   3. STATE
   ========================================================== */
let cart = JSON.parse(localStorage.getItem('bite-cart')) || [];
let currentFilter = "all";
let currentSearchQuery = "";
let currentLocation = "Bangalore";
let header, categoryGrid, restaurantGrid, searchInput, searchClear, searchBtn, menuToggle, cartBadge, filterBtns, cartItemsContainer, cartFooter;

/* ==========================================================
   4. INIT
   ========================================================== */
function init() {
    const headerContainer = document.getElementById('site-header');
    const footerContainer = document.getElementById('site-footer');
    const modalsContainer = document.getElementById('site-modals');

    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;
    if (modalsContainer) modalsContainer.innerHTML = modalsHTML;

    const currentPage = document.body.dataset.page;
    if (currentPage) {
        const activeLink = document.querySelector(`.nav-link[data-page="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            activeLink.style.color = 'var(--primary-color)';
        }
    }

    header = document.getElementById('header');
    categoryGrid = document.getElementById('categoryGrid');
    restaurantGrid = document.getElementById('restaurantGrid');
    searchInput = document.getElementById('searchInput');
    searchClear = document.getElementById('searchClear');
    searchBtn = document.getElementById('searchBtn');
    menuToggle = document.getElementById('menuToggle');
    cartBadge = document.getElementById('cartBadge');
    filterBtns = document.querySelectorAll('.filter-btn');
    cartItemsContainer = document.getElementById('cartItemsContainer');
    cartFooter = document.querySelector('.drawer-footer');

    renderCategories();
    renderRestaurants();
    renderCart();

    setupEventListeners();
    setupLocationSelector();
    setupCategoryFilters();
    setupHelpPage();
    setupAuthValidation();
    setupOrderSuccessModal();
    setupPartnerForms();
    setupRestaurantModal();
    updateAuthUI();
}

/* ==========================================================
   5. RENDER
   ========================================================== */
function renderCategories() {
    if (!categoryGrid) return;
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-card" data-category-name="${cat.name}">
            <div class="category-img-wrapper"><img src="${cat.image}" alt="${cat.name}"></div>
            <p class="category-name">${cat.name}</p>
        </div>
    `).join('');
}

function getFilteredRestaurants() {
    let filtered = restaurants.filter(r => r.location.toLowerCase().includes(currentLocation.toLowerCase()));
    if (currentSearchQuery.trim() !== "") {
        const keywords = currentSearchQuery.toLowerCase().split("&").map(k => k.trim());
        filtered = filtered.filter(r =>
            keywords.some(keyword =>
                r.name.toLowerCase().includes(keyword) || r.cuisines.toLowerCase().includes(keyword)
            )
        );
    }
    if (currentFilter === "fast-delivery") filtered.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));
    else if (currentFilter === "top-rated") filtered = filtered.filter(r => r.rating >= 4.5);
    else if (currentFilter === "veg") filtered = filtered.filter(r => r.veg === true);
    else if (currentFilter === "offers") filtered = filtered.filter(r => r.offers === true);
    else if (currentFilter === "price-low") filtered.sort((a, b) => a.price - b.price);
    return filtered;
}

function renderRestaurants() {
    if (!restaurantGrid) return;
    const filtered = getFilteredRestaurants();
    if (filtered.length === 0) {
        restaurantGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No restaurants found matching your criteria in ${currentLocation}.</p>`;
        return;
    }
    restaurantGrid.innerHTML = filtered.map(res => `
        <div class="restaurant-card" data-res-id="${res.id}" onclick="openRestaurantModal(${res.id})">
            <div class="res-img-wrapper">
                <img src="${res.image}" alt="${res.name}">
                ${res.offers ? '<div class="res-overlay">60% OFF UPTO ₹120</div>' : ''}
            </div>
            <div class="res-info">
                <h3 class="res-name">${res.name}</h3>
                <div class="res-rating-info">
                    <div class="res-rating"><i class="ph-fill ph-star"></i><span>${res.rating}</span></div>
                    <span>•</span><span>${res.deliveryTime}</span>
                </div>
                <p class="res-cuisines">${res.cuisines}</p>
                <p class="res-loc">${res.location}</p>
            </div>
        </div>
    `).join('');
}

/* ==========================================================
   6. RESTAURANT MENU MODAL (NEW)
   ========================================================== */
const foodMenus = {
    default: [
        { name: "Chicken Biryani", price: 299, veg: false, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400" },
        { name: "Paneer Butter Masala", price: 249, veg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400" },
        { name: "Veg Fried Rice", price: 199, veg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=400" },
        { name: "Butter Naan", price: 49, veg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400" },
        { name: "Gulab Jamun", price: 99, veg: true, image: "https://images.unsplash.com/photo-1601303516361-4b08b9c5c6a9?auto=format&fit=crop&q=80&w=400" }
    ]
};

window.openRestaurantModal = function (resId) {
    const res = restaurants.find(r => r.id === resId);
    if (!res) return;

    const modal = document.getElementById('restaurantModal');
    const nameEl = document.getElementById('rmName');
    const metaEl = document.getElementById('rmMeta');
    const listEl = document.getElementById('rmFoodList');

    if (nameEl) nameEl.textContent = res.name;
    if (metaEl) metaEl.textContent = `⭐ ${res.rating} · ${res.deliveryTime} · ${res.cuisines}`;

    const menu = foodMenus.default;
    if (listEl) {
        listEl.innerHTML = menu.map((food, idx) => `
            <div class="food-item">
                <img src="${food.image}" alt="${food.name}" class="food-item-img">
                <div class="food-item-info">
                    <h4 class="food-item-name">${food.name}</h4>
                    <p class="food-item-price">₹${food.price}</p>
                </div>
                <button class="food-add-btn" onclick="addFoodToCart(${res.id}, ${idx}, '${food.name}', ${food.price}, '${food.image}')">
                    Add
                </button>
            </div>
        `).join('');
    }

    if (modal) modal.style.display = 'flex';
};

window.addFoodToCart = function (resId, idx, foodName, price, image) {
    const existingItem = cart.find(item => item.name === foodName && item.restaurantId === resId);
    if (existingItem) existingItem.quantity += 1;
    else cart.push({
        id: resId,
        restaurantId: resId,
        name: foodName,
        price: price,
        image: image,
        quantity: 1
    });
    saveAndRenderCart();
    showToast(`${foodName} added to cart!`);
};

function setupRestaurantModal() {
    const modal = document.getElementById('restaurantModal');
    const closeBtn = document.getElementById('closeRestaurantModal');
    if (!modal) return;
    if (closeBtn) closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
}

/* ==========================================================
   7. CART (grouped by restaurant)
   ========================================================== */
window.addToCart = function (resId) {
    const restaurant = restaurants.find(r => r.id === resId);
    if (!restaurant) return;
    const existingItem = cart.find(item => item.id === resId && item.restaurantId === resId);
    if (existingItem) existingItem.quantity += 1;
    else cart.push({
        id: resId,
        restaurantId: resId,
        name: restaurant.name,
        price: restaurant.price,
        image: restaurant.image,
        quantity: 1
    });
    saveAndRenderCart();
    showToast(`${restaurant.name} added to cart!`);
};

window.updateQuantity = function (index, change) {
    const item = cart[index];
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) removeItem(index);
    else saveAndRenderCart();
};

window.removeItem = function (index) {
    if (index < 0 || index >= cart.length) return;
    cart.splice(index, 1);
    saveAndRenderCart();
};

function saveAndRenderCart() {
    localStorage.setItem('bite-cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
        if (totalItems > 0) {
            cartBadge.innerText = totalItems;
            cartBadge.style.display = 'inline-block';
        } else {
            cartBadge.style.display = 'none';
        }
    }
    if (!cartItemsContainer) return;
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <span>Good food is always cooking! Go ahead, order some yummy items from the menu.</span>
            </div>`;
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }
    if (cartFooter) cartFooter.style.display = 'block';

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Group by restaurant
    const grouped = {};
    cart.forEach(item => {
        const res = restaurants.find(r => r.id === (item.restaurantId || item.id));
        const key = res ? res.name : item.name;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(item);
    });

    let html = `<div class="cart-restaurant-groups">`;
    Object.keys(grouped).forEach(resName => {
        const items = grouped[resName];
        const groupTotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
        html += `
            <div class="cart-restaurant-group">
                <div class="cart-restaurant-header">
                    <div class="cart-restaurant-icon"><i class="ph-fill ph-storefront"></i></div>
                    <div class="cart-restaurant-meta">
                        <h4 class="cart-restaurant-name">${resName}</h4>
                        <p class="cart-restaurant-sub">${items.length} item${items.length > 1 ? 's' : ''} · ₹${groupTotal}</p>
                    </div>
                </div>
                <div class="cart-group-items">
        `;
        items.forEach(item => {
            const cartIndex = cart.indexOf(item);
            html += `
                <div class="cart-group-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <p class="cart-item-price">${item.name} · ₹${item.price}</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${cartIndex}, -1)" ${item.quantity <= 1 ? 'disabled' : ''} aria-label="Decrease quantity">−</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${cartIndex}, 1)" aria-label="Increase quantity">+</button>
                    </div>
                    <i class="ph ph-trash remove-item" onclick="removeItem(${cartIndex})"></i>
                </div>
            `;
        });
        html += `</div></div>`;
    });
    html += `</div>`;
    cartItemsContainer.innerHTML = html;

    if (cartFooter) {
        cartFooter.innerHTML = `
            <div class="cart-summary">
                <span class="summary-title">Subtotal</span>
                <span class="summary-total">₹${subtotal}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Checkout</button>
        `;
    }
}

window.checkout = function () {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const modal = document.getElementById('orderSuccessModal');
    const totalEl = document.getElementById('orderSuccessTotal');
    if (totalEl) totalEl.textContent = `Total: ₹${total}`;
    if (modal) modal.style.display = 'flex';
    cart = [];
    saveAndRenderCart();
    const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
    if (cartDrawerOverlay) cartDrawerOverlay.style.display = 'none';
};

function setupOrderSuccessModal() {
    const modal = document.getElementById('orderSuccessModal');
    const closeBtn = document.getElementById('orderSuccessClose');
    if (!modal) return;
    if (closeBtn) closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
}

function showToast(message, type = 'default') {
    const existing = document.querySelector('.bite-toast');
    if (existing) existing.remove();

    const isSuccess = type === 'success';
    const toast = document.createElement('div');
    toast.className = 'bite-toast';
    toast.innerHTML = `
        <i class="ph-fill ${isSuccess ? 'ph-check-circle' : 'ph-info'}"></i>
        <span>${message}</span>
        <button class="bite-toast-close" aria-label="Close">&times;</button>
    `;
    toast.style.cssText = `
        position: fixed; bottom: 24px; left: 50%;
        transform: translateX(-50%) translateY(20px);
        display: flex; align-items: center; gap: 10px;
        background: ${isSuccess ? '#48c479' : 'var(--secondary-color)'};
        color: #fff; padding: 14px 18px; border-radius: 10px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        z-index: 9999; font-size: 14px; font-weight: 500;
        opacity: 0; transition: all 0.3s ease; max-width: 90vw;
    `;
    const closeBtn = toast.querySelector('.bite-toast-close');
    closeBtn.style.cssText = `background: none; border: none; color: #fff; font-size: 18px; line-height: 1; cursor: pointer; opacity: 0.8;`;
    closeBtn.addEventListener('click', () => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ==========================================================
   8. LOCATION / CATEGORIES / AUTH / HELP / PARTNER
   ========================================================== */
function setupLocationSelector() {
    const locationSelector = document.getElementById('locationSelector');
    const locationDropdown = document.getElementById('locationDropdown');
    const locationList = document.getElementById('locationList');
    const selectedLocationSpan = document.getElementById('selectedLocation');
    if (!locationSelector) return;

    locationSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        locationDropdown.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
        if (!locationSelector.contains(e.target)) locationDropdown.classList.remove('active');
    });
    locationList.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            const location = item.getAttribute('data-location');
            currentLocation = location;
            selectedLocationSpan.textContent = location;
            locationDropdown.classList.remove('active');
            renderRestaurants();
            const sec = document.getElementById('restaurantsSection');
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function setupCategoryFilters() {
    if (!categoryGrid) return;
    categoryGrid.addEventListener('click', (e) => {
        const categoryCard = e.target.closest('.category-card');
        if (categoryCard) {
            const categoryName = categoryCard.querySelector('.category-name')?.textContent || '';
            if (searchInput) {
                searchInput.value = categoryName;
                if (searchClear) searchClear.hidden = !categoryName;
                currentSearchQuery = categoryName;
                renderRestaurants();
                const sec = document.getElementById('restaurantsSection');
                if (sec) sec.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

/* ==========================================================
   AUTH VALIDATION (errors clear on close, logout on hover)
   ========================================================== */
function setupAuthValidation() {
    const authForm = document.getElementById('authForm');
    if (!authForm) return;

    const userName = document.getElementById('userName');
    const userMobile = document.getElementById('userMobile');
    const nameError = document.getElementById('nameError');
    const mobileError = document.getElementById('mobileError');
    const authModal = document.getElementById('authModal');
    const closeModal = document.getElementById('closeModal');

    const clearErr = (input, errEl) => {
        if (input) input.style.borderColor = '';
        if (errEl) errEl.textContent = '';
    };
    const setErr = (input, errEl, msg) => {
        if (input) input.style.borderColor = '#e74c3c';
        if (errEl) errEl.textContent = msg;
    };

    function clearAllAuthErrors() {
        clearErr(userName, nameError);
        clearErr(userMobile, mobileError);
    }

    function closeAuthModal() {
        if (authModal) authModal.style.display = 'none';
        clearAllAuthErrors();
        authForm.reset();
    }

    if (userName) {
        userName.addEventListener('input', () => {
            const val = userName.value.trim();
            if (!val) { clearErr(userName, nameError); return; }
            if (!/^[A-Za-z\s.'-]+$/.test(val)) setErr(userName, nameError, 'Name can only contain letters');
            else if (val.length > 50) setErr(userName, nameError, 'Name cannot exceed 50 characters');
            else clearErr(userName, nameError);
        });
    }
    if (userMobile) {
        userMobile.addEventListener('input', () => {
            userMobile.value = userMobile.value.replace(/\D/g, '').slice(0, 10);
            const val = userMobile.value;
            if (!val) { clearErr(userMobile, mobileError); return; }
            if (val.length !== 10) setErr(userMobile, mobileError, 'Mobile number must be 10 digits');
            else clearErr(userMobile, mobileError);
        });
    }

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameVal = userName?.value.trim() || '';
        const mobileVal = userMobile?.value.trim() || '';
        let valid = true;

        if (!nameVal) {
            setErr(userName, nameError, 'Name is required');
            valid = false;
        } else if (!/^[A-Za-z\s.'-]+$/.test(nameVal)) {
            setErr(userName, nameError, 'Name can only contain letters');
            valid = false;
        } else if (nameVal.length > 50) {
            setErr(userName, nameError, 'Name cannot exceed 50 characters');
            valid = false;
        } else {
            clearErr(userName, nameError);
        }

        if (!mobileVal) {
            setErr(userMobile, mobileError, 'Mobile number is required');
            valid = false;
        } else if (!/^\d{10}$/.test(mobileVal)) {
            setErr(userMobile, mobileError, 'Mobile number must be 10 digits');
            valid = false;
        } else {
            clearErr(userMobile, mobileError);
        }

        if (!valid) return;

        const userObj = { name: nameVal, mobile: mobileVal };
        localStorage.setItem('bite-user', JSON.stringify(userObj));

        closeAuthModal();
        showToast(`Welcome, ${nameVal}! Login successful.`, 'success');
        updateAuthUI();
        window.location.href = 'index.html';
    });

    const logoutBtn = document.getElementById('logoutBtn');
    const authContainer = document.getElementById('authContainer');
    const authDropdown = document.getElementById('authDropdown');
    const signInLink = document.getElementById('signInLink');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('bite-user');
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) navLinks.classList.remove('mobile-open');
            updateAuthUI();
            showToast('Logged out successfully.', 'default');
            window.location.href = 'index.html';
        });
    }

    if (signInLink) {
        signInLink.addEventListener('click', (e) => {
            e.preventDefault();
            const currentUser = JSON.parse(localStorage.getItem('bite-user'));
            if (!currentUser) {
                if (authModal) authModal.style.display = 'flex';
            }
        });
    }

    if (closeModal) closeModal.addEventListener('click', closeAuthModal);
    if (authModal) {
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) closeAuthModal();
        });
    }
}

function updateAuthUI() {
    const authLinkText = document.getElementById('authLinkText');
    const authDropdown = document.getElementById('authDropdown');
    const currentUser = JSON.parse(localStorage.getItem('bite-user'));

    if (currentUser) {
        const displayName = currentUser.name.length > 10 ? currentUser.name.substring(0, 10) + '...' : currentUser.name;
        if (authLinkText) authLinkText.innerText = displayName;
        if (authDropdown) {
            authDropdown.style.display = 'flex';
            authDropdown.classList.remove('active');
        }
    } else {
        if (authLinkText) authLinkText.innerText = 'Sign In';
        if (authDropdown) {
            authDropdown.classList.remove('active');
            authDropdown.style.display = 'none';
        }
    }
}

function setupHelpPage() {
    const faqData = {
        orders: [
            { question: "What is QuickBite One?", answer: "QuickBite One is a membership program that offers unlimited free delivery on thousands of restaurants and other benefits like priority support and exclusive discounts." },
            { question: "What is an invoice?", answer: "You can find the invoice in the 'My Orders' section under the specific order details. Click on the order and select 'Download Invoice'." },
            { question: "How can I edit my order?", answer: "Orders cannot be edited once placed. However, you can cancel within 60 seconds and place a new order." },
            { question: "My payment was debited but order not placed", answer: "Don't worry, the amount will be automatically refunded to your original payment method within 5-7 business days." },
            { question: "How do I track my order?", answer: "You can track your order in real-time from the 'My Orders' section. Click on the active order to see the live location of your delivery partner." }
        ],
        general: [
            { question: "How do I change my delivery address?", answer: "You can change your delivery address from the app/site by going to Profile > Saved Addresses." },
            { question: "What payment methods are accepted?", answer: "We accept all major credit/debit cards, net banking, UPI, and cash on delivery." },
            { question: "How to apply a coupon code?", answer: "You can apply coupon codes at checkout. Look for the 'Apply Coupon' section, enter your code, and click 'Apply'." },
            { question: "What is the cancellation policy?", answer: "Orders can be cancelled within 60 seconds of placing them. After that, cancellation may incur a small fee." },
            { question: "How do I report an issue with my order?", answer: "Go to 'My Orders', select the problematic order, and click on 'Report an Issue'." }
        ],
        legal: [
            { question: "What is your refund policy?", answer: "Refunds are processed within 5-7 business days to the original payment method." },
            { question: "How is my data protected?", answer: "We take data privacy seriously. All personal information is encrypted and we comply with data protection regulations." },
            { question: "What are the terms for QuickBite One membership?", answer: "QuickBite One is a subscription service that auto-renews monthly/yearly. You can cancel anytime from your account settings." },
            { question: "Who is liable for incorrect orders?", answer: "If you receive an incorrect or incomplete order, please report within 2 hours." },
            { question: "What is your dispute resolution process?", answer: "For any disputes, contact our customer support first. Unresolved issues can be escalated to our grievance officer." }
        ]
    };

    function loadFAQs(tab) {
        const faqContainer = document.getElementById('faqContent');
        if (!faqContainer) return;
        let data;
        if (tab === 'orders') data = faqData.orders;
        else if (tab === 'general') data = faqData.general;
        else data = faqData.legal;
        faqContainer.innerHTML = data.map(faq => `
            <div class="faq-item">
                <h3>${faq.question}</h3>
                <p>${faq.answer}</p>
            </div>
        `).join('');
    }

    const sidebarItems = document.querySelectorAll('.help-sidebar ul li');
    if (sidebarItems.length) {
        loadFAQs('orders');
        sidebarItems.forEach(item => {
            item.addEventListener('click', () => {
                sidebarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                loadFAQs(item.getAttribute('data-tab'));
            });
        });
    }
}

function setupPartnerForms() {
    const partnerForm = document.getElementById('partnerForm');
    if (partnerForm) {
        bindSimpleForm(partnerForm, [
            { input: document.getElementById('restaurantName'), errId: 'restaurantNameError', label: 'Restaurant name' },
            { input: document.getElementById('partnerPhone'), errId: 'partnerPhoneError', label: 'Phone number', phone: true },
            { input: document.getElementById('partnerCity'), errId: 'partnerCityError', label: 'City', letters: true }
        ], 'Application submitted! We will contact you soon.');
    }
    const rideForm = document.getElementById('rideForm');
    if (rideForm) {
        bindSimpleForm(rideForm, [
            { input: document.getElementById('riderName'), errId: 'riderNameError', label: 'Name', letters: true },
            { input: document.getElementById('riderPhone'), errId: 'riderPhoneError', label: 'Phone number', phone: true },
            { input: document.getElementById('riderCity'), errId: 'riderCityError', label: 'City', letters: true },
            { input: document.getElementById('vehicleType'), errId: 'vehicleTypeError', label: 'Vehicle type', required: true }
        ], 'Application submitted! Our team will reach out soon.');
    }
}

function bindSimpleForm(form, fields, successMsg) {
    const validateField = (field) => {
        const val = (field.input?.value || '').trim();
        const errEl = document.getElementById(field.errId);
        if (field.input) field.input.style.borderColor = '';
        if (errEl) errEl.textContent = '';

        let error = '';
        if (!val) error = `${field.label} is required`;
        else if (field.phone && !/^\d{10}$/.test(val)) error = 'Must be 10 digits';
        else if (field.letters && !/^[A-Za-z\s.'-]+$/.test(val)) error = `${field.label} can only contain letters`;

        if (error) {
            if (errEl) errEl.textContent = error;
            if (field.input) field.input.style.borderColor = '#e74c3c';
            return false;
        }
        return true;
    };

    fields.forEach(field => {
        if (!field.input) return;
        const eventName = field.input.tagName === 'SELECT' ? 'change' : 'input';
        field.input.addEventListener(eventName, () => {
            if (field.phone) field.input.value = field.input.value.replace(/\D/g, '').slice(0, 10);
            validateField(field);
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const valid = fields.map(validateField).every(Boolean);
        if (valid) { showToast(successMsg, 'success'); form.reset(); }
    });
}

/* ==========================================================
   9. EVENT LISTENERS
   ========================================================== */
function setupEventListeners() {
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) header.classList.add('sticky');
            else header.classList.remove('sticky');
        });
    }

    const updateSearch = () => {
        if (searchInput) {
            currentSearchQuery = searchInput.value;
            renderRestaurants();
            const sec = document.getElementById('restaurantsSection');
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        }
    };
    if (searchBtn) searchBtn.addEventListener('click', updateSearch);
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') updateSearch(); });
        searchInput.addEventListener('input', function () {
            if (searchClear) searchClear.hidden = !this.value;
            if (this.value === "") { currentSearchQuery = ""; renderRestaurants(); }
        });
    }
    if (searchClear && searchInput) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            currentSearchQuery = '';
            searchClear.hidden = true;
            renderRestaurants();
            searchInput.focus();
        });
    }

    const cartToggle = document.getElementById('cartToggle');
    const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
    const closeCart = document.getElementById('closeCart');
    if (cartToggle && cartDrawerOverlay) cartToggle.addEventListener('click', (e) => { e.preventDefault(); cartDrawerOverlay.style.display = 'block'; });
    if (closeCart && cartDrawerOverlay) closeCart.addEventListener('click', () => { cartDrawerOverlay.style.display = 'none'; });

    window.addEventListener('click', (e) => {
        if (e.target === cartDrawerOverlay) cartDrawerOverlay.style.display = 'none';
    });

    if (filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.getAttribute('data-filter');
                renderRestaurants();
            });
        });
    }

    if (menuToggle) {
        const navLinks = document.querySelector('.nav-links');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const closeMenu = () => {
            if (navLinks) navLinks.classList.remove('mobile-open');
        };
        menuToggle.addEventListener('click', () => {
            if (navLinks) navLinks.classList.toggle('mobile-open');
        });
        if (closeMobileMenu) closeMobileMenu.addEventListener('click', closeMenu);
        if (navLinks) {
            navLinks.addEventListener('click', (e) => {
                if (e.target.closest('a')) closeMenu();
            });
        }
    }
}

/* ==========================================================
   10. BOOT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    init();
});