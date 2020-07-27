class Product {
    constructor(typeOfProduct, imageLink, description, price, quantity) {
        this.typeOfProduct = typeOfProduct;
        this.imageLink = imageLink;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}

class TypeOfProduct {
    constructor(name) {
        this.name = name;
    }
}