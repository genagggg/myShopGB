const products = [
    {
        id: 1,
        title: 'Ноутбук',
        price: 20000
    },
    {
        id: 2,
        title: 'Мышка',
        price: 2000
    },
    {
        id: 3,
        title: 'Клавиатура',
        price: 3000
    },
    {
        id: 4,
        title: 'Нетбук',
        price: 15000
    },
]

const renderProduct = (title, price) => `
<div class = "product-item">
<h3>${title}</h3>
<p>${price}</p>
</div>
`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price))
    //console.log(productsList)
    document.querySelector('.products').innerHTML = productsList;
}

renderPage(products);