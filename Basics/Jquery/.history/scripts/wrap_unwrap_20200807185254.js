//.wrap()
// $("section").wrap("<div>");

// //.unwrap()
// $("section").unwrap();

// //.wrapAll()
// $("section").wrapAll("<div>");


//example
var wrapper = "<div class='wrapper'>";
var button = $("button");
var wrapped = true;

button[0].onclick = function() {

    if (wrapped) {
        $()
        wrapper = "wrap";
        wrapped = false;
    } else {
        wrapper = "unwrap";
        wrapped = true;

    }
}