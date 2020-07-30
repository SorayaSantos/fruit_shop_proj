
function signUp() {

    var name = $("#name").val();
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();

    var request = { name, username, email, password };

    $.ajax({
        url: "http://localhost:8080/api/auth/signup",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(request),
        success: function (data) {
            showLogin();
        }
    });
};

function signIn() {

    var usernameOrEmail = $("#username2").val();
    var password = $("#password2").val();

    var request = { usernameOrEmail, password };

    $.ajax({
        url: "http://localhost:8080/api/auth/signin",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(request),
        success: function (data) {
            window.sessionStorage.setItem("Bearer", data.accessToken);
            getAllProducts();
            showPageProducts();
            document.getElementById("username2").value = '';
            document.getElementById("password2").value = '';
        }
    });
};

function getAllProducts() {

    token = window.sessionStorage.getItem("Bearer");

    $.ajax({
        url: "http://localhost:8080/api/product/all",
        type: 'GET',
        contentType: 'application/json',
        headers: { 'Authorization': 'Bearer ' + token },
        success: function (data) {
            showProducts(data);
        }
    });
};

function addProductToBasket(productId, quantity) {

    var request = { productId, quantity };

    $.ajax({
        url: "http://localhost:8080/api/user/addproductobasket",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(request),
        headers: { 'Authorization': 'Bearer ' + token },
        success: function (data) {
            document.getElementById("quant").value = null;
            modal.style.display = "none";
        }
    });
};

function getAllBasketProducts() {

    token = window.sessionStorage.getItem("Bearer");

    $.ajax({
        url: "http://localhost:8080/api/user/getbasketproducts",
        type: 'GET',
        contentType: 'application/json',
        headers: { 'Authorization': 'Bearer ' + token },
        success: function (data) {
            getTableShoppingBasket(data.basketProducts);
        }
    });
};

function postProduct() {

    var name = $("#prodname").val();
    var description = $("#prodDesc").val();
    var quantity = $("#prodQuant").val();
    var price = $("#prodPrice").val();
    var image = selectedImage;

    if (selectedID != null) {
        product = new Product(selectedID, name, image, description, price, quantity);
    }
    else {
        product = new Product(null, name, image, description, price, quantity);
    }
    var request = { product };

    $.ajax({
        url: "http://localhost:8080/api/product/saveproduct",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(request),
        headers: { 'Authorization': 'Bearer ' + token },
        success: function (data) {
            document.getElementById("quant").value = null;
            modal.style.display = "none";
            getAllProducts();
            showPageProducts();
            document.getElementById("prodname").value = '';
            document.getElementById("prodDesc").value = '';
            document.getElementById("prodQuant").value = null;
            document.getElementById("prodPrice").value = null;
            selectedImage = null;
            selectedID = null;
        }
    });
};

function deleteProduct() {

    var id = parseInt(selectedID);

    var request = { id };

    $.ajax({
        url: "http://localhost:8080/api/product/deleteproduct",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(request),
        headers: { 'Authorization': 'Bearer ' + token },
        success: function (data) {
            document.getElementById("quant").value = null;
            modal.style.display = "none";
            getAllProducts();
            showPageProducts();
            document.getElementById("prodname").value = '';
            document.getElementById("prodDesc").value = '';
            document.getElementById("prodQuant").value = null;
            document.getElementById("prodPrice").value = null;
            selectedImage = null;
            selectedID = null;
            hideOnEdit.style.display = "block";
        }
    });
};
