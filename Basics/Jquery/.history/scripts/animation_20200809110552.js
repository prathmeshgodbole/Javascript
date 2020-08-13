$(document).ready(function() {

    $("section > h2").on("click", function() {
        $(this).animate({ "width": "200px", "height": "400px" });
    });

});