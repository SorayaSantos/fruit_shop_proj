$(document).ready(function () {

    //showProducts();
    console.log("ready!");
    getAllProducts();
});

var hideNav = document.getElementById("myNavbar");
var hideProd = document.getElementById("myProducts");
var hideSignin = document.getElementById("signin");
var hideSignup = document.getElementById("signup");

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
