$(document).ready(function() {
    // function ready() {
    //     alert("Animation Complete");
    // }
    // $("section > h2").on("click", function() {
    //     $(this).animate({ "width": "300px", "height": "200px" }, 1000, "swing", ready);
    //    
    // });

    $("section > h2").on("click", function() {
        $(this).fadein(100, 0.5);
    });
});