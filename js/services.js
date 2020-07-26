
function SignUp() {
    var name = "test1"
    var username = "test1";
    var email = "test@email";
    var password = "test1";

    var request = { name, username, email, password };

    $.ajax({
        url: "http://localhost:8080/api/auth/signup",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(request),
        success: function (data) {
            console.log(data);
        }
    });
};

function SignIn() {

    var usernameOrEmail = "test1";
    var password = "test1";

    var request = { usernameOrEmail, password };

    $.ajax({
        url: "http://localhost:8080/api/auth/signin",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(request),
        success: function (data) {
            console.log(data);
            window.sessionStorage.setItem("Bearer", data.accessToken)
        }
    });
};

function GetTest() {

    token = window.sessionStorage.getItem("Bearer");

    $.ajax({
        url: "http://localhost:8080/api/product/test",
        type: 'GET',
        contentType: 'application/json',
        headers: { 'Authorization': 'Bearer ' + token },
        success: function (data) {
            console.log(data);
        }
    });
};