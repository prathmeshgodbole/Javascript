$(document).ready(function() {
    function ready() {
        alert("Animation Complete");
    }
    $("section > h2").on("click", function() {
        $(this).animate({ "width": "300px", "height": "200px" }, 1000, "swing", ready);
        $(this).fadeIn(1000, 0.5);
    });

});