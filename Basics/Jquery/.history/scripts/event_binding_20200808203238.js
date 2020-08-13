//Event Bindings
//on()//off()
// var myLi = $("#points-of-sale li");
// myLi.on("click", function() {
//     $(this).css({ "background": "green" });
//     myLi.off("click");
// });

//Event Helpers
$("#lead-banner").dblclick(function() {
    alert("You clicked me");
    $("#social-nav").off("dblclick");
});