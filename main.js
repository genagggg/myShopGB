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
<img src="images/${img}">
<h3>${title}</h3>
<p>${price}</p>

</div>
`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img))
    //console.log(productsList)
    document.querySelector('.products').innerHTML = productsList;
}

renderPage(products);