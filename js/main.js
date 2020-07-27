$(document).ready(function () {

    //showProducts();
    console.log("ready!");
});

var hideNav = document.getElementById("myNavbar");
var hideProd = document.getElementById("myProducts");
var hideSignin = document.getElementById("signin");
var hideSignup = document.getElementById("signup");

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var selectedProduct = null;

function showProducts(products) {

    console.log("here")
    console.log(products)

    var divProd = document.getElementById('products');

    divProd.innerHTML = '';

    return products.forEach(element => {

        divProd.innerHTML += `<div class="column">
        <div class="content">
            <img src="${element.imageLink}" alt="Mountains" style="width:100%" height="180px">
            <h3>${element.description}</h3>
            <p>${element.price} €/Kg</p>
            <p>${element.quantity} Kg</p>
            <button type="button" onclick="addProductToBasketQuant('`+ element.id + `')">Add product to basket</button>
        </div>
    </div>`
    });
}

function showPageProducts() {
    hideNav.style.display = "block";
    hideProd.style.display = "block";
    hideSignin.style.display = "none";
    hideSignup.style.display = "none";
}

function showLogin() {
    hideNav.style.display = "none";
    hideProd.style.display = "none";
    hideSignin.style.display = "block";
    hideSignup.style.display = "none";
    document.getElementById("name").value = '';
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
}

function showSignup() {
    hideSignup.style.display = "block";
    hideSignin.style.display = "none";
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