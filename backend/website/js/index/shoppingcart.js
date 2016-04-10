// when user clicks product link on index, this function gets invoked which opens a new product.html and fills in the corresponding fields for the product

/* The entire shop */
var shop = {};

/* Empty shopping cart */
shop.cart = [];

/* If the shopping cart exist retrieve it, otherwise create it */
if (localStorage.getItem("cart") !== null) {
    shop.cart = JSON.parse(localStorage.getItem("cart"));
}
else {
    localStorage.setItem("cart", JSON.stringify(shop.cart));
}

/* Adds an item to the shopping cart */
shop.add = function(image, title, price, descr) {
    var product = {
        image: image,
        title: title,
        price: price,
        descr: descr
    };
    var cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
};

/* Returns an array with all the products */
shop.getAll = function() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    return cart;
};

/* Returns the a product through the title */
shop.get = function(title) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].title === title) {
            return cart[i];
        }
    }
    return null;
};

/* How to use the shopping cart */
/* Image, Title, Price, Description */
shop.add("bike.jpeg", "Mountain Bike", 10.2, "Its cool"); // adds the product
shop.getAll(); // returns an array of all the products
shop.get("Mountain Bike"); // returns the whatever product your looking for
