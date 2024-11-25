
const products = [
    { id: 1, name: "Смартфон", price: 50000, img: "https://media.istockphoto.com/id/1356372494/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B5%D0%B4%D0%B0%D0%B2%D0%BD%D0%BE-%D0%B2%D1%8B%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82-iphone-13-pro-%D1%81-%D0%B7%D0%B0%D0%B4%D0%BD%D0%B8%D0%BC-%D0%B8-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%BC-%D1%83%D0%B3%D0%BB%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=Lrmty8jc8S2QmJ680PZkWuwSeFO660ZX-6bEnAkAH0c=" },
    { id: 2, name: "Ноутбук", price: 45000, img: "https://img.lovepik.com/bg/20240406/Laptop-with-Blank-Screen-3D-Side-View-Illustration-on-Isolated_5801653_wh860.jpg!/fw/860" },
    { id: 3, name: "Наушники", price: 3500, img: "https://images.euronics.hu/product_images/800x600/resize/10063649538078_d5apkazu.jpg?v=2" },
    { id: 4, name: "Часы", price: 12000, img: "https://cdn.pixabay.com/photo/2017/04/18/13/04/mens-2239007_1280.jpg" },
];


function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Цена: ${product.price} сом</p>
            </div>
            <button class="button" onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${product.name} добавлен в корзину!`);
}


displayProducts();
