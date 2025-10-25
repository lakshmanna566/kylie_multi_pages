
const KC_CART_KEY = 'kc_cart_v1';
function getCart(){ const raw = localStorage.getItem(KC_CART_KEY); return raw? JSON.parse(raw): []; }
function saveCart(c){ localStorage.setItem(KC_CART_KEY, JSON.stringify(c)); updateCartCount(); }
function addToCart(productId){ const prod = window.KC_PRODUCTS.find(p=>p.id===productId); if(!prod){ alert('Product not found'); return; } let cart = getCart(); const found = cart.find(i=>i.id===productId); if(found) found.qty += 1; else cart.push({id:productId, name:prod.name, price:prod.price, qty:1}); saveCart(cart); alert(prod.name + ' added to cart'); }
function removeFromCart(productId){ let cart = getCart(); cart = cart.filter(i=>i.id !== productId); saveCart(cart); renderCart && renderCart(); }
function updateCartCount(){ const cnt = getCart().reduce((s,i)=>s+i.qty,0); const el = document.getElementById('cart-count'); if(el) el.textContent = cnt; }
function formatPrice(p){ return p.toFixed(2); }
document.addEventListener('DOMContentLoaded', ()=>{ updateCartCount(); });
