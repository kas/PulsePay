// when user clicks product link on index, this function gets invoked which opens a new product.html and fills in the corresponding fields for the product

/* The entire shop */
window.shop = {};

/* Empty shopping cart */
shop._cart = [];

/* If the shopping cart exist retrieve it, otherwise create it */
if (sessionStorage.getItem("cart") !== null) {
    shop._cart = JSON.parse(sessionStorage.getItem("cart"));
}
else {
    sessionStorage.setItem("cart", JSON.stringify(shop._cart));
}

// Updates the cart from storage
shop.updateStorage = function(cart) {
    shop._cart = cart;
    sessionStorage.setItem("cart", JSON.stringify(cart));
};

// Loads all stored products into the cart
shop.loadFromStorage = function() {
    shop._cart = JSON.parse(sessionStorage.getItem("cart"));
};

// Product constructor
// use: var x = new shop.Product(...);
shop.Product = function(image, title, price, descr) {
    return {
        image: image,
        title: title,
        price: price,
        descr: descr
    };
};

/* Adds an item to the shopping cart */
shop.add = function(image, title, price, descr) {
    var product = new shop.Product(image, title, price, descr);
    shop.loadFromStorage();
    shop._cart.push(product);
    shop.updateStorage(shop._cart);
};

/* Removes an item using the title */
shop.remove = function(title) {
    var cart = shop.getAll();
    var newCart = [];
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].title !== title) {
            newCart.push(cart[i]);
        }
    }
    shop.updateStorage(newCart);
};

/* Returns an array with all the products */
shop.getAll = function() {
    shop.loadFromStorage();
    return shop._cart;
};

/* Returns the a product through the title */
shop.get = function(title) {
    var cart = shop.getAll();
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].title === title) {
            return cart[i];
        }
    }
    return null;
};
