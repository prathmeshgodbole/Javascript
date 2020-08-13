//removeClass()
// $("header .wrapper").removeClass("wrapper");

// //addClass()
// $("header > div").addClass("wrapper");

//toggleClass
var button = $("lead-banner a");
button[0].onclick = function() {
    $("points-of-sale").toggleClass("wrapper");
    return false;
};