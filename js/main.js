$(document).ready(function () {

    // var hideNav = document.getElementById("myNavbar");
    // var hideProd = document.getElementById("myProducts");

    //$("#myNavbar").hide();
    //$("#myProducts").hide();

    showProducts();
    console.log("ready!");
});

var hideNav = document.getElementById("myNavbar");
var hideProd = document.getElementById("myProducts");
var hideSignin = document.getElementById("signin");
var hideSignup = document.getElementById("signup");

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
