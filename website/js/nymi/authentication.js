/*

CHECK FOR AUTHENTICATED NYMI

*/

var nymi = {};

nymi.onAuthenticated = function() {
    console.log("AUTHENTICATED NYMI");
};

var nymiAuthInterval = setInterval(function() {
    $.get("/checkNymi", function(data) {
        if (data.authed) {
            nymi.onAuthenticated();
            clearInterval(nymiAuthInterval);
        }
        else {
            // not authenticated
        }
    });
}, 400);
