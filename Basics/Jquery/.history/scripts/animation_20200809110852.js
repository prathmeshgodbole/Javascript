$(document).ready(function() {
    function ready() {
        alert()
    }
    $("section > h2").on("click", function() {
        $(this).animate({ "width": "200px", "height": "200px" }, 1000, "linear", ready);
    });

});