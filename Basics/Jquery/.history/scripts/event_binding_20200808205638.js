//Event Bindings
//on()//off()
// var myLi = $("#points-of-sale li");
// myLi.on("click", function() {
//     $(this).css({ "background": "green" });
//     myLi.off("click");
// });


//Event Helpers
// $("#lead-banner").dblclick(function() {
//     alert("You clicked me");
//     $("#lead-banner").off("dblclick");
// });

//document ready vs window load event
// $(window).load(function() {


// });

//Event Object 
$(document).ready(function() {
    $("*").on("click", function(e) {
        console.log(e.target);
        console.log("Type of cliked :" + e.type);
        e.stopPropagation();
    });

});