$(document).ready(function() {
    // function ready() {
    //     alert("Animation Complete");
    // }
    // $("section > h2").on("click", function() {
    //     $(this).animate({ "width": "300px", "height": "200px" }, 1000, "swing", ready);
    //    
    // });

    $("section > h2").on("click", function() {
        $(this).fadeTo(200, 0.2)
            .fadeTo(100, 0.8);
    });
});