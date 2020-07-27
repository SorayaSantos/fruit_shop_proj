
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
            console.log(data);
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
            console.log(data);
            window.sessionStorage.setItem("Bearer", data.accessToken);
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

