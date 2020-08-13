//Event Bindings
//on()//off()
var myLi = $("#points-of-sale li");
myLi.on("click", function() {
    $(this).css({ "background": "green" });
    myLi.off("click");
});

//Event Helpers
$("#social-nav").on("dblclick", function() {
    alert("You clicked me");
    $("#social-nav").off("click");
});