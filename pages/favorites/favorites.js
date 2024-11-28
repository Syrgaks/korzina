// Отобразить товары из localStorage (Понравившиеся)
function displayFavorites() {
    const favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteContainer = document.getElementById('favorite-items');
    favoriteContainer.innerHTML = '';

    if (favoriteItems.length === 0) {
        favoriteContainer.textContent = 'Нет товаров в списке "Понравилось".';
        return;
    }

    favoriteItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'favorite-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>Цена: ${item.price} ₽</p>
                <button onclick="removeFromFavorites(${index})">Удалить</button>
            </div>
        `;
        favoriteContainer.appendChild(div);
    });
}

// Удалить товар из списка понравившихся
function removeFromFavorites(index) {
    const favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];
    favoriteItems.splice(index, 1);  // Удалить товар по индексу
    localStorage.setItem('favorites', JSON.stringify(favoriteItems));
    displayFavorites();  // Обновить список понравившихся
}

// Запуск
displayFavorites();
