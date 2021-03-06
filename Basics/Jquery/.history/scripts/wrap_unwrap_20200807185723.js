//.wrap()
// $("section").wrap("<div>");

// //.unwrap()
// $("section").unwrap();

// //.wrapAll()
// $("section").wrapAll("<div>");


//example
var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function() {

    if (wrapped) {
        $("section").unwrap();
        wrapped = false;
        button.text = "wrap";

    } else {
        $("section").wrapAll(wrapper);
        button.text = "unwrap";
        wrapped = true;

    }
};