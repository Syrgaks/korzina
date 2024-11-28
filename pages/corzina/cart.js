// Отобразить товары из localStorage
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    
    if (cartItems.length === 0) {
        cartContainer.textContent = 'Корзина пуста.';
        return;
    }
    
    cartItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>Цена: ${item.price} ₽</p>
                <p>Количество: ${item.quantity || 1}</p>
                <button onclick="removeFromCart(${index})">Удалить</button>
            </div>
        `;
        cartContainer.appendChild(div);
    });
}

// Удалить товар из корзины
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);  // Удалить товар по индексу
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();  // Обновить корзину
}

// Очистить корзину
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    alert('Корзина очищена!');
}

// Запуск
displayCart();
