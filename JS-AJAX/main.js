const url = "https://dummyjson.com/products";
const userList = document.querySelector("#userList");
const sortBtn = document.querySelector("#sort-btn");
const sortSelect = document.querySelector("#sort-select");

let products = [];

sortBtn.onclick = () => {
    if (sortSelect.value == "min-max") {
        let ascProducts = products.sort((p1, p2) => p1.price - p2.price);
        showProducts(ascProducts);
    }
    else {
        let dscProducts = products.sort((p1, p2) => p2.price - p1.price);
        showProducts(dscProducts);
    }
}

async function getServerData(url) {

    const res = await fetch(url);
    const data = await res.json();

    for (const i of data.products) {
        products.push(i);
    }

    showProducts(products);
}

function showProducts(products) {
    console.log(products);
    userList.innerHTML = "";

    for (const i of products) {
        userList.innerHTML += `
         <div class="col">
            <div class="card h-100">
                <img height="200" src="${i.thumbnail}" class="card-img-top" alt="pic">
                <div class="card-body">
                    <h5 class="card-title">${i.title}</h5>
                    <p class="card-text">${i.description}</p>
                    <h5 class="card-title">${i.price}$</h5>
                </div>
            </div>
        </div>`;
    }
}

getServerData(url);