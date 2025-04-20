// Products data
const products = [
  {
    id: "hydrating-serum",
    name: "Hydrating Serum",
    price: 39.99,
    rating: 4,
    reviews: 128,
    image: "https://placehold.co/400x400",
    shortDescription: "Intense hydration for all skin types",
    description:
      "Our Hydrating Serum is a lightweight, fast-absorbing formula that delivers intense hydration to all skin types. Infused with hyaluronic acid, this serum helps to plump and hydrate the skin, reducing the appearance of fine lines and wrinkles. The addition of vitamin B5 helps to soothe and heal the skin, while aloe vera provides additional hydration and anti-inflammatory benefits.",
    benefits: [
      "Provides intense hydration",
      "Reduces the appearance of fine lines",
      "Soothes and calms irritated skin",
      "Improves skin elasticity",
      "Suitable for all skin types",
    ],
    usage: "Apply 2-3 drops to clean, damp skin morning and night. Gently pat into skin and follow with moisturizer.",
    ingredients:
      "Water, Glycerin, Hyaluronic Acid, Panthenol (Vitamin B5), Aloe Barbadensis Leaf Juice, Niacinamide, Sodium PCA, Allantoin, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.",
    amazonLink: "https://www.amazon.com",
    category: "serums"
  },
  {
    id: "vitamin-c-cream",
    name: "Vitamin C Brightening Cream",
    price: 45.99,
    rating: 5,
    reviews: 94,
    image: "https://placehold.co/400x400",
    shortDescription: "Brightens and evens skin tone",
    description:
      "Our Vitamin C Brightening Cream is formulated with a stable form of vitamin C to brighten and even skin tone while protecting against environmental damage. This rich cream also contains vitamin E and ferulic acid to enhance the antioxidant benefits of vitamin C. Regular use helps to reduce the appearance of dark spots and hyperpigmentation, revealing a more radiant complexion.",
    benefits: [
      "Brightens and evens skin tone",
      "Reduces dark spots and hyperpigmentation",
      "Protects against environmental damage",
      "Boosts collagen production",
      "Provides antioxidant protection",
    ],
    usage: "Apply a small amount to clean skin morning and night. For best results, use after our Hydrating Serum.",
    ingredients:
      "Water, Glycerin, Ascorbic Acid (Vitamin C), Tocopherol (Vitamin E), Ferulic Acid, Sodium Hyaluronate, Squalane, Cetyl Alcohol, Stearic Acid, Glyceryl Stearate, Dimethicone, Phenoxyethanol, Ethylhexylglycerin.",
    amazonLink: "https://www.amazon.com",
    category: "moisturizers"
  },
  {
    id: "night-repair-cream",
    name: "Night Repair Cream",
    price: 49.99,
    rating: 4,
    reviews: 76,
    image: "https://placehold.co/400x400",
    shortDescription: "Repairs and rejuvenates while you sleep",
    description:
      "Our Night Repair Cream is a rich, nourishing formula designed to repair and rejuvenate your skin while you sleep. Infused with retinol, this cream helps to stimulate cell turnover and collagen production, reducing the appearance of fine lines and wrinkles. The addition of peptides and ceramides helps to strengthen the skin barrier, while shea butter and jojoba oil provide deep hydration.",
    benefits: [
      "Stimulates cell turnover and collagen production",
      "Reduces the appearance of fine lines and wrinkles",
      "Strengthens the skin barrier",
      "Provides deep hydration",
      "Improves skin texture and tone",
    ],
    usage:
      "Apply a small amount to clean skin before bed. If you're new to retinol, start by using 2-3 times per week and gradually increase frequency as your skin adjusts.",
    ingredients:
      "Water, Glycerin, Retinol, Peptide Complex, Ceramides, Butyrospermum Parkii (Shea) Butter, Simmondsia Chinensis (Jojoba) Seed Oil, Squalane, Dimethicone, Glyceryl Stearate, Cetyl Alcohol, Phenoxyethanol, Ethylhexylglycerin.",
    amazonLink: "https://www.amazon.com",
    category: "moisturizers"
  },
  {
    id: "gentle-cleanser",
    name: "Gentle Foaming Cleanser",
    price: 24.99,
    rating: 5,
    reviews: 152,
    image: "https://placehold.co/400x400",
    shortDescription: "Cleanses without stripping the skin",
    description:
      "Our Gentle Foaming Cleanser effectively removes dirt, oil, and makeup without stripping the skin of its natural oils. Formulated with gentle surfactants and soothing ingredients like chamomile and aloe vera, this cleanser is suitable for all skin types, including sensitive skin. The addition of glycerin helps to maintain the skin's moisture balance, leaving your face feeling clean, soft, and hydrated.",
    benefits: [
      "Effectively removes dirt, oil, and makeup",
      "Doesn't strip the skin of natural oils",
      "Soothes and calms irritated skin",
      "Maintains the skin's moisture balance",
      "Suitable for all skin types, including sensitive skin",
    ],
    usage: "Massage a small amount onto damp skin morning and night. Rinse thoroughly with lukewarm water.",
    ingredients:
      "Water, Glycerin, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Chamomilla Recutita (Matricaria) Flower Extract, Aloe Barbadensis Leaf Juice, Panthenol, Allantoin, Sodium PCA, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    amazonLink: "https://www.amazon.com",
    category: "cleansers"
  },
  {
    id: "exfoliating-mask",
    name: "Exfoliating Mask",
    price: 34.99,
    rating: 4,
    reviews: 68,
    image: "https://placehold.co/400x400",
    shortDescription: "Reveals smoother, brighter skin",
    description:
      "Our Exfoliating Mask combines chemical and physical exfoliation to reveal smoother, brighter skin. Formulated with a blend of alpha and beta hydroxy acids, this mask helps to dissolve dead skin cells and unclog pores, while fine jojoba beads provide gentle physical exfoliation. The addition of kaolin clay helps to absorb excess oil and impurities, leaving your skin looking fresh and radiant.",
    benefits: [
      "Dissolves dead skin cells",
      "Unclogs pores",
      "Absorbs excess oil and impurities",
      "Smooths and brightens the skin",
      "Improves skin texture",
    ],
    usage:
      "Apply a thin layer to clean, dry skin, avoiding the eye area. Leave on for 10-15 minutes, then massage gently with wet fingertips and rinse thoroughly. Use 1-2 times per week.",
    ingredients:
      "Water, Kaolin, Glycolic Acid, Salicylic Acid, Jojoba Beads, Glycerin, Aloe Barbadensis Leaf Juice, Panthenol, Allantoin, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.",
    amazonLink: "https://www.amazon.com",
    category: "masks"
  },
  {
    id: "eye-cream",
    name: "Revitalizing Eye Cream",
    price: 42.99,
    rating: 4,
    reviews: 87,
    image: "https://placehold.co/400x400",
    shortDescription: "Reduces dark circles and puffiness",
    description:
      "Our Revitalizing Eye Cream is specifically formulated to address the delicate skin around the eyes. This lightweight cream helps to reduce the appearance of dark circles, puffiness, and fine lines. Infused with caffeine, this cream helps to stimulate circulation and reduce puffiness, while peptides help to strengthen the skin and reduce the appearance of fine lines. The addition of hyaluronic acid provides intense hydration without feeling heavy.",
    benefits: [
      "Reduces the appearance of dark circles",
      "Diminishes puffiness",
      "Minimizes fine lines and wrinkles",
      "Strengthens the delicate skin around the eyes",
      "Provides intense hydration",
    ],
    usage:
      "Using your ring finger, gently pat a small amount around the orbital bone morning and night. Avoid direct contact with the eyes.",
    ingredients:
      "Water, Glycerin, Caffeine, Peptide Complex, Sodium Hyaluronate, Niacinamide, Squalane, Dimethicone, Cetyl Alcohol, Glyceryl Stearate, Phenoxyethanol, Ethylhexylglycerin.",
    amazonLink: "https://www.amazon.com",
    category: "moisturizers"
  }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobileNav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
  
  // Products page
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    renderProducts(products, productsGrid);
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        if (category === 'all') {
          renderProducts(products, productsGrid);
        } else {
          const filteredProducts = products.filter(product => product.category === category);
          renderProducts(filteredProducts, productsGrid);
        }
      });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
          renderProducts(products, productsGrid);
          return;
        }
        
        const filteredProducts = products.filter(product => 
          product.name.toLowerCase().includes(searchTerm) || 
          product.shortDescription.toLowerCase().includes(searchTerm)
        );
        
        renderProducts(filteredProducts, productsGrid);
      });
    }
  }
  
  // Product detail page
  const productDetail = document.getElementById('productDetail');
  if (productDetail) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
      const product = products.find(p => p.id === productId);
      
      if (product) {
        // Update page title
        document.title = `${product.name} - PurelyU`;
        
        // Render product detail
        productDetail.innerHTML = `
          <div class="product-gallery">
            <div class="main-image">
              <img src="${product.image}" alt="${product.name}" width="600" height="600">
            </div>
            <div class="thumbnails">
              ${Array(4).fill().map(() => `
                <div class="thumbnail">
                  <img src="${product.image}" alt="${product.name} thumbnail" width="150" height="150">
                </div>
              `).join('')}
            </div>
          </div>
          <div class="product-details">
            <div class="product-header">
              <h1 class="product-name">${product.name}</h1>
              <div class="product-rating">
                <div class="stars">
                  ${Array(5).fill().map((_, i) => `
                    <i class="${i < product.rating ? 'fas' : 'far'} fa-star"></i>
                  `).join('')}
                </div>
                <span class="reviews-count">(${product.reviews} reviews)</span>
              </div>
            </div>
            
            <div class="product-price">$${product.price.toFixed(2)}</div>
            
            <div class="detail-section">
              <h3 class="detail-title">Description</h3>
              <p>${product.description}</p>
            </div>
            
            <div class="detail-section">
              <h3 class="detail-title">Key Benefits</h3>
              <ul class="benefits-list">
                ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
              </ul>
            </div>
            
            <div class="detail-section">
              <h3 class="detail-title">How to Use</h3>
              <p>${product.usage}</p>
            </div>
            
            <div class="detail-section">
              <h3 class="detail-title">Ingredients</h3>
              <p>${product.ingredients}</p>
            </div>
            
            <div class="buy-button">
              <a href="${product.amazonLink}" target="_blank" rel="noopener noreferrer" class="button primary-button full-width">
                <i class="fas fa-shopping-cart"></i>
                Buy on Amazon
              </a>
            </div>
          </div>
        `;
        
        // Render related products
        const relatedProducts = document.getElementById('relatedProducts');
        if (relatedProducts) {
          const related = products.filter(p => p.id !== productId).slice(0, 4);
          
          relatedProducts.innerHTML = related.map(product => `
            <a href="product-detail.html?id=${product.id}" class="related-product">
              <div class="related-image">
                <img src="${product.image}" alt="${product.name}" width="300" height="300">
              </div>
              <h3 class="related-name">${product.name}</h3>
              <p class="related-price">$${product.price.toFixed(2)}</p>
            </a>
          `).join('');
        }
      } else {
        productDetail.innerHTML = '<div class="error-message">Product not found</div>';
      }
    }
  }
});

// Helper function to render products
function renderProducts(productsToRender, container) {
  if (!container) return;
  
  if (productsToRender.length === 0) {
    container.innerHTML = '<div class="no-products">No products found</div>';
    return;
  }
  
  container.innerHTML = productsToRender.map(product => `
    <div class="product-card">
      <a href="product-detail.html?id=${product.id}" class="product-image-container">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" width="400" height="400">
        </div>
      </a>
      <div class="product-info">
        <div class="product-rating">
          <div class="stars">
            ${Array(5).fill().map((_, i) => `
              <i class="${i < product.rating ? 'fas' : 'far'} fa-star"></i>
            `).join('')}
          </div>
          <span class="reviews-count">(${product.reviews})</span>
        </div>
        <a href="product-detail.html?id=${product.id}">
          <h3 class="product-title">${product.name}</h3>
        </a>
        <p class="product-description">${product.shortDescription}</p>
        <div class="product-footer">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <a href="product-detail.html?id=${product.id}" class="button small outline-button">View Details</a>
        </div>
      </div>
    </div>
  `).join('');
}