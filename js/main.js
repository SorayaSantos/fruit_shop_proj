$(document).ready(function () {
    console.log("ready!");
    showProducts();
});

function showProducts() {

    product1 = new Product("Apple", "../images/GrannySmith.jpg", "Granny Smith", 2.50);
    product2 = new Product("Lemon", "../images/Lemon.jpg", "From Portugal", 1.50);
    product3 = new Product("Pineapple", "../images/Pineapple.jpg", "From Açores", 2.00);
    product4 = new Product("Orange", "../images/Orange.jpg", "From Algarve", 2.50);

    var products = [product1, product2, product3, product4];

    var divProd = document.getElementById('products');

    divProd.innerHTML = '';

    return products.forEach(element => {

        divProd.innerHTML += `<div class="column">
        <div class="content">
            <img src="${element.imageLink}" alt="Mountains" style="width:100%" height="180px">
            <h3>${element.description}</h3>
            <p>${element.price} €/Kg</p>
        </div>
    </div>`
    });
}