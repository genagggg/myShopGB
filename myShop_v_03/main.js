const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {//data-обьект js
                this.goods = data;
                this.render()
            });
    }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    getSum() {
        let s = 0;
        this.goods.forEach(item => {
            s += item.price
        })
    }
}



class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `
        <div class = "product-item">
        <img class="product-item-images" src="${this.img}">
        <h3 class="product-name"> Название товара: ${this.title}</h3>
        <p class="product-price"> Цена товара: ${this.price}</p>
        <div class="button-addet-busket">Добавить</div>
        </div>
        `
    }
}

let list = new ProductList();


class Basket {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];
        this._clickBasket();
        this._getBasketItem()
            .then(data => {
                this.goods = data.contents;
                this.render();
            });
    }

    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }

    _clickBasket() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }

    addGood() {

    }

    removeGood() {

    }

    changeGood() {

    }


}

class BasketItem {
    render(product, img = 'https://via.placeholder.com/50x50') {
        return `<div class='cart-item' data-id='${product.id_product}'>
<div class='product-bio'>
<img src='${img}' alt='Some image'>
<div class='product-desc'>
<p class='product-title'>${product.product_name}</p>
<p class='product-quantity'>Quantity: ${product.quantity}</p>
<p class='product-single-price'>${product.price} each</p>
</div>
</div>
<div class='right-block'>
<p class='product-price'>${product.quantity * product.price}$</p>
<button class='del-btn' data-id='${product.id_product}'>Купить</button>
</div>
</div>
`
    }
}

let obj = new Basket();


