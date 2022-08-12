class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts() {
        this.goods = [
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
            }
        ];
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
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }

    render() {
        return `
        <div class = "product-item">
        <img class="product-item-images" src="images/${this.img}">
        <h3 class="product-name"> Название товара: ${this.title}</h3>
        <p class="product-price"> Цена товара: ${this.price}</p>
        <div class="button-addet-busket">Добавить</div>
        </div>
        `
    }
}

let list = new ProductList();

list.render();
list.getSum();

class Basket {
    addGood() {

    }

    removeGood() {

    }

    changeGood() {

    }

    render() {

    }
}

class ElemBasket {
    render() {

    }
}
