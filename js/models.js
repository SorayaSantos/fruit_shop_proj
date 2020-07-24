class Product {
    constructor(typeOfProduct, imageLink, description, price) {
        this.typeOfProduct = typeOfProduct;
        this.imageLink = imageLink;
        this.description = description;
        this.price = price;
    }
}

class TypeOfProduct {
    constructor(name) {
        this.name = name;
    }
}