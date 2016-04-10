/*

CHECK FOR AUTHENTICATED NYMI

*/

var checkNymi = function() {
    $.get("/checkNymi", function(data) {
        console.log(data);
    });
};

setInterval(checkNymi, 400);
