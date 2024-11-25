// Отобразить товары из localStorage
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartContainer.textContent = 'Корзина пуста.';
        return;
    }
    cartItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>Цена: ${item.price} ₽</p>
            </div>
        `;
        cartContainer.appendChild(div);
    });
}

// Очистить корзину
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    alert('Корзина очищена!');
}

// Запуск
displayCart();
