const products = [
    {
        id: 1,
        title: 'Ноутбук',
        price: 20000,
        img: 'nout.jpeg'
    },
    {
        id: 2,
        title: 'Мышка',
        price: 2000,
        img: 'mouse.jpeg'
    },
    {
        id: 3,
        title: 'Клавиатура',
        price: 3000,
        img: 'keywords.jpeg'
    },
    {
        id: 4,
        title: 'Нетбук',
        price: 15000,
        img: 'netbook.jpeg'
    },
]

const renderProduct = (title, price, img) => `
<div class = "product-item">
<img class="product-item-images" src="images/${img}">
<h3 class="product-name"> Название товара: ${title}</h3>
<p class="product-price"> Цена товара: ${price}</p>
<div class="button-addet-busket">Добавить</div>
</div>
`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img))

    document.querySelector('.products').innerHTML = productsList.join('');
}

renderPage(products);