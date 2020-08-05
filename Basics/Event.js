//1 EVENTS 
//function setup(){

var content = document.getElementById("content");
var button = document.getElementById("show-more");
button.onclick = function() {

    if (content.className == "open") {
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More";
    } else {
        //Expand the box
        content.className = "open";
        button.innerHTML = "Show less";
    }
};
//}


// window.onload = function() {
//     setup();
// }

//2 Event Listener Dynamically
function paraMouseOver() {
    document.getElementById("content").setAttribute("style", "color:red");
}
document.getElementById("content").addEventListener("mouseover", paraMouseOver);

//3 Event Listener Statically by adding with event="function()" & calling here 
function onMouseOut() {
    document.getElementById("content").setAttribute("style", "color:white");
}

//4 Form Validation
function FormValidation() {
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");

    if (name.value == "" || !isNaN(name.value)) {
        alert("Please Fill the form correctly...!");
    } else {
        alert("Form submitted Successfully !");
    }
}