$(document).ready(function () {

    //showProducts();
    console.log("ready!");

});

var hideNav = document.getElementById("myNavbar");
var hideProd = document.getElementById("myProducts");
var hideSignin = document.getElementById("signin");
var hideSignup = document.getElementById("signup");
var hideBasket = document.getElementById("basket-products");
var hidePurchase = document.getElementById("purchase");
var hideAddProd = document.getElementById("hideAddProd");

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var selectedImage = null;

var selectedProduct = null;

function showProducts(products) {

    var divProd = document.getElementById('products');

    divProd.innerHTML = '';

    if (products.length > 0) {
        return products.forEach(element => {

            divProd.innerHTML += `<div class="column">
            <div class="content">
                <img src="${element.image}" alt="Mountains" style="width:100%" height="180px">
                <h3>${element.description}</h3>
                <p>${element.price} €/Kg</p>
                <p>${element.quantity} Kg</p>
                <button type="button" onclick="addProductToBasketQuant('`+ element.id + `')">Add product to basket</button>
            </div>
        </div>`

            if (products.indexOf(element) == products.length - 1) {
                divProd.innerHTML += `<button class="add-prod-bt" type="button" onclick="newProduct()">Create new Product</button>`;
            }
        });
    } else {
        return divProd.innerHTML += `<button class="add-prod-bt" type="button" onclick="newProduct()">Create new Product</button>`;
    }



}

function showPageProducts() {
    hideNav.style.display = "block";
    hideProd.style.display = "block";
    hideSignin.style.display = "none";
    hideSignup.style.display = "none";
    hideBasket.style.display = "none";
    hidePurchase.style.display = "none";
    hideAddProd.style.display = "none";

}

function showLogin() {
    hideNav.style.display = "none";
    hideProd.style.display = "none";
    hideSignin.style.display = "block";
    hideSignup.style.display = "none";
    hideBasket.style.display = "none";
    hidePurchase.style.display = "none";
    hideAddProd.style.display = "none";

    document.getElementById("name").value = '';
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
}

function showSignup() {
    hideSignup.style.display = "block";
    hideSignin.style.display = "none";
    hideBasket.style.display = "none";
    hidePurchase.style.display = "none";
    hideAddProd.style.display = "none";

    document.getElementById("username2").value = '';
    document.getElementById("password2").value = '';
}

function signout() {
    window.sessionStorage.removeItem("Bearer");
    showLogin();
}

function addProductToBasketQuant(productId) {
    modal.style.display = "block";

    selectedProduct = productId;
}

span.onclick = function () {
    modal.style.display = "none";
    document.getElementById("quant").value = null;
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("quant").value = null;
    }
}

function addQuant() {
    var quant = $("#quant").val();

    if (quant != null && selectedProduct != null) {
        addProductToBasket(selectedProduct, quant)
    }
}


function showShoppingBasket() {
    hideNav.style.display = "block";
    hideProd.style.display = "none";
    hideSignin.style.display = "none";
    hideSignup.style.display = "none";
    hideBasket.style.display = "block";
    hideAddProd.style.display = "none";

    getAllBasketProducts();
}

function getTableShoppingBasket(basketproducts) {

    if (basketproducts.length != 0) {
        hidePurchase.style.display = "block";
    }

    var count = 0;

    $("#basket-products td").remove();

    for (let index = 0; index < basketproducts.length; index++) {

        count += basketproducts[index].product.price * basketproducts[index].quantity;

        $("#basket-products").append(`<tr>
            <td><strong>`+ basketproducts[index].product.name + `</strong></td>
            <td><strong>`+ basketproducts[index].quantity + `</strong></td>
            <td><strong>`+ basketproducts[index].product.price + `</strong></td>
          </tr>`)

        if (index + 1 == basketproducts.length) {
            $("#basket-products").append(`<tr>
            <td><strong></strong></td>
            <td><strong></strong></td>
            <td><strong>Total</strong></td>
            <td><strong>`+ count + ` €</strong></td>
          </tr>`)
        }
    }
}

window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url

            selectedImage = img.src;

            $("#newProduct").append(`<img id="myImg" src="` + img.src + `" alt="your image" height="100px" width="100px">`)
        }
    });

});

function newProduct() {
    hideAddProd.style.display = "block";
    hideProd.style.display = "none";

}