const createBtn = document.getElementById('create-btn');
const nameInput = document.querySelector('#nameInput');
const yearInput = document.querySelector('#yearInput');
const priceInput = document.querySelector('#priceInput');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#search-btn');
const showItemsBtn = document.querySelector('#showItems-btn');
const clearBtn = document.querySelector('#clear-btn');

const tBody = document.querySelector('#product-table tbody');
let items = [];

class Product {
    static count = 1;

    constructor(name, year, price) {
        this.name = name;
        this.year = year;
        this.price = price;
        this.id = Product.count++;
    }
}

function addProductToTable(item) {
    tBody.innerHTML += `<tr>
                            <th scope="row">${item.id}</th>
                            <td>${item.name}</td>
                            <td>${item.year}</td>
                            <td>${item.price}$</td>
                        </tr>`;
}

function clearItems() {
    tBody.innerHTML = "";
    Product.count = 1;
}

function showItems() {
    items.forEach(i => {
        addProductToTable(i);
    });
}

createBtn.onclick = () => {
    if (nameInput.value == "" || yearInput.value == "" || priceInput.value == "") {
        alert("Enter data!");
    }
    else {
        let item = new Product(nameInput.value, yearInput.value, priceInput.value);
        items.push(item);
        addProductToTable(item); 
    }
};

clearBtn.onclick = () => {
    clearItems();
    items = [];
};

searchBtn.onclick = () => {
    clearItems();
    items.forEach(i => {
        let name = i.name.toLowerCase();
        if (name.includes(searchInput.value.toLowerCase())) {
            addProductToTable(i);
        }
    });
}

showItemsBtn.onclick = () => {
    clearItems();
    showItems();
}