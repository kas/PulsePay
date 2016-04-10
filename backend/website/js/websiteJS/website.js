$(document).ready(function() {
    /* The products stored in an array */
    var products = [{
        image: "img/index/rs.jpg",
        title: "Under Armour Grey Hoodie",
        price: "99.99"
    }, {
        image: "img/index/coffee.png",
        title: "Peet's Reserve Coffee",
        price: "499.99"
    }, {
        image: "img/index/ATH.jpg",
        title: "Audio-Technica ATH-M50X",
        price: "129.99"
    }, {
        image: "img/index/m3Dp.jpg",
        title: "MakerBot Replicator Mini3D",
        price: "999.99"
    }];

    /* The buttons stored in an array */
    var buttons = $("body > div.row.small-up-1.medium-up-2.large-up-4 > div > div");

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
        console.log(product);
    };
    /* The buttons click functions */
    buttons.each(function(key, val) {
        console.log(buttons[key]);
        //   buttons[key].addEventListener("click", printInfo, false);
        buttons[key].onclick = printInfo;
    });
    
    /* Shopping Cart slide animation */
    var cartLogo = $("#shoppingCartIcon");
    console.log(cartLogo);
    
    
    var animate = function(){
        var timeout    = 500;
        var closetimer = 0;
        var ddmenuitem = 0;
        
        function jsddm_open()
        {  jsddm_canceltimer();
           jsddm_close();
           ddmenuitem = $(this).find('ul').css('visibility', 'visible');}
        
        function jsddm_close()
        {  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}
        
        function jsddm_timer()
        {  closetimer = window.setTimeout(jsddm_close, timeout);}
        
        function jsddm_canceltimer()
        {  if(closetimer)
           {  window.clearTimeout(closetimer);
              closetimer = null;}}
        
        $(document).ready(function()
        {  $('#jsddm > li').bind('mouseover', jsddm_open)
           $('#jsddm > li').bind('mouseout',  jsddm_timer)});
        
        document.onclick = jsddm_close;
    };
    animate();
});