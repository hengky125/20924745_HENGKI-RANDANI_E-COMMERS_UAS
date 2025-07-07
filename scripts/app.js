// This file contains the JavaScript code for the e-commerce website.

const products = [
    { id: 1, name: "Product 1", price: 10.00 },
    { id: 2, name: "Product 2", price: 15.00 },
    { id: 3, name: "Product 3", price: 20.00 },
];

let cart = [];

function displayProducts() {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalDisplay = document.createElement('div');
    totalDisplay.innerHTML = `<h4>Total: $${total.toFixed(2)}</h4>`;
    cartContainer.appendChild(totalDisplay);
}

document.addEventListener('DOMContentLoaded', displayProducts);