function showTypeOfProducts() {
    var typeOfProducts = [];
    var divTypes = document.getElementById('dropdown-types');

    typeOfProducts = ["Apples", "Oranges", "Lemons", "Pineapple", "Bananas", "Stramberries"];
    divTypes.innerHTML = '';

    return typeOfProducts.forEach(element => {

        divTypes.innerHTML += '<a href="#">' + element + '</a><br>';
    });
}

