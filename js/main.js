$(document).ready(function () {

    console.log("ready!");

});

var hideNav = document.getElementById("myNavbar");
var hideProd = document.getElementById("myProducts");
var hideSignin = document.getElementById("signin");
var hideSignup = document.getElementById("signup");
var hideBasket = document.getElementById("basket-products");
var hidePurchase = document.getElementById("purchase");
var hideAddProd = document.getElementById("hideAddProd");
var hideOnEdit = document.getElementById("on-edit");
var hideSell = document.getElementById("sells");

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var selectedImage = null;
var selectedProduct = null;
var productsList;
var selectedID = null;
var userBasketproducts;

function showProducts(products) {

    var divProd = document.getElementById('products');
    productsList = products;

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
                <button type="button" onclick="editProduct('`+ element.id + `')">Edit product</button>
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
    hideOnEdit.style.display = "none";
    hideSell.style.display = "none";


    document.getElementById("prodname").value = '';
    document.getElementById("prodDesc").value = '';
    document.getElementById("prodQuant").value = null;
    document.getElementById("prodPrice").value = null;
    selectedImage = null;
    selectedID = null;

}

function showLogin() {
    hideNav.style.display = "none";
    hideProd.style.display = "none";
    hideSignin.style.display = "block";
    hideSignup.style.display = "none";
    hideBasket.style.display = "none";
    hidePurchase.style.display = "none";
    hideAddProd.style.display = "none";
    hideOnEdit.style.display = "none";
    hideSell.style.display = "none";


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
    hideOnEdit.style.display = "none";
    hideSell.style.display = "none";

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
    hideSell.style.display = "none";

    getAllBasketProducts();
}

function getTableShoppingBasket(basketproducts) {

    if (basketproducts.length != 0) {
        hidePurchase.style.display = "block";
    }

    var count = 0;
    userBasketproducts = basketproducts;

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

    $("#myImg").remove();

    document.querySelector('input[type="file"]').addEventListener('change', function () {
        $("#myImg").remove();

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

/******************for base 64 *****************************/
function uploadFile(inputElement) {
    var file = inputElement.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        //console.log('Encoded Base 64 File String:', reader.result);

        selectedImage = reader.result;

        /******************* for Binary ***********************/
        var data = (reader.result).split(',')[1];
        var binaryBlob = atob(data);
        //console.log('Encoded Binary File String:', binaryBlob);
    }
    reader.readAsDataURL(file);
}

function editProduct(id) {

    hideAddProd.style.display = "block";
    hideProd.style.display = "none";
    hideOnEdit.style.display = "block";

    // console.log(productsList)
    // console.log(id)

    productsList.filter(prod => {
        if (prod.id == id) {
            document.getElementById("prodname").value = prod.name;
            document.getElementById("prodDesc").value = prod.description;
            document.getElementById("prodQuant").value = prod.quantity;
            document.getElementById("prodPrice").value = prod.price;
        }
    });

    selectedID = id;

}

function saveSell() {

    if (userBasketproducts != null) {
        postProductSell(userBasketproducts)
    }
}

function showSells() {

    hideNav.style.display = "block";
    hideProd.style.display = "none";
    hideSignin.style.display = "none";
    hideSignup.style.display = "none";
    hideBasket.style.display = "none";
    hidePurchase.style.display = "none";
    hideAddProd.style.display = "none";
    hideOnEdit.style.display = "none";
    hideSell.style.display = "block";

    getAllSells();
}

function getTableSells(sells) {
    $("#sells td").remove();

    for (let index = 0; index < sells.length; index++) {

        $("#sells").append(`<tr>
            <td><strong>`+ sells[index].total + `</strong></td>
          </tr>`)
    }
}