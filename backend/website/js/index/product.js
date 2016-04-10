// when user clicks product link on index, this function gets invoked which opens a new product.html and fills in the corresponding fields for the product

var shop = {};
shop.cart = [];

// Load data from localStorage
if (localStorage.getItem("cart") !== null) {
    shop.cart = JSON.parse(localStorage.getItem("cart"));
} else {
    localStorage.setItem("cart", JSON.stringify(shop.cart))
}

/* Product class */
shop.cart.add = function(image, title, price, descr){
    var product = {
        this.image: image,
        this.title: title,
        this.price: price,
        this.descr: descr
    };
    localStorage.setItem(this.title, JSON.stringify(this));
}
shop.cart

/* How to create a Product */
var bike = new Product("bike.jpeg","Mountain Bike",10.2, "Its cool");
var hozaifa = getProduct("Hozaifa");

