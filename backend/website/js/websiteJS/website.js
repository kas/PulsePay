$(document).ready(function() {
    /* The products stored in an array */
    var products = [{
        image: "img/index/hoodie.jpg",
        title: "Under Armour Grey Hoodie",
        price: "99.99"
    }, {
        image: "img/index/coffee.png",
        title: "Peet's Reserve Coffee",
        price: "499.99"
    }, {
        image: "img/index/headphones.jpg",
        title: "Audio-Technica ATH-M50X",
        price: "129.99"
    }, {
        image: "img/index/printer.jpg",
        title: "MakerBot Replicator Mini3D",
        price: "999.99"
    }];

    /* The buttons stored in an array */
    var buttons = $("body > div.row.small-up-1.medium-up-2.large-up-4 > div > div");
    
    var shoppingCart = $("#myDropdown");
    
    var addItemToPage = function(imgSrc, titleText){
        var item = document.createElement("div");
        
        var image = document.createElement("img");
        image.className = "thumbnail";
        $(image).attr("src", imgSrc);
        image.id = "front-checkout-image";
        
        var title = document.createElement("h5");
        title.id = "front-checkout-title";
        $(title).text(titleText);
        
        item.appendChild(image);
        item.appendChild(title);
        if ($("button").length === 0) {
            shoppingCart.append(item);
        } else {
            $("button").prepend(item);
        }
        
    };
    
    var printInfo = function(evt) {
        var elem = evt.srcElement || evt.target;
        console.log(elem);
        var elmId = parseInt(elem.id);
        var product;
        switch (elmId) {
            case 0:
                product = products[0];
                break;
            case 1:
                product = products[1];
                break;
            case 2:
                product = products[2];
                break;
            case 3:
                product = products[3];
                break;
        }
        var checkOutButton =  document.createElement("button");
        $(checkOutButton).text("Checkout");

        if (elem != undefined){
            shop.add(product.image, product.title, product.price, "");
            addItemToPage(product.image,product.title);
            $(elem).text("Added to Cart");
            $(elem).css("background-color","#1583cc");
        }
    };
    /* The buttons click functions */
    buttons.each(function(key, val) {
        buttons[key].onclick = printInfo;
    });
    
    /* Shopping Cart slide animation */
    var cartLogo = $("#shoppingCartIcon");
    var allProducts = shop.getAll();
    
    cartLogo.click(function() {
        var dropDown = $(".dropdown-content");
        if(dropDown.is(":visible")) {
            dropDown.hide();
        } else {   
            dropDown.show();
        }
    });
    
    $("#checkout-button").click(function() {
        window.location.href = "checkout.html";
    });
});
