//1. Named Function
function getavg(a, b) {
    var avg = (a + b) / 2; //avg is LOCAL variable
    console.log("This is NAMED function Average is :" +
        avg);
}
var c = getavg(5, 7); //getavg is GLOBAL variable



//2. Annonymus Function
var add = function(x, y) {
    console.log("This is ANONYMOUS function Addition is :" + (x + y));
    // return x + y;
}
add(5, 15);

setTimeout(function() {
    alert("Addition after 5 seconds :");
}, 5000);



//3. Constructor Function
var Sub = new Function("p", "q", "return p - q;");
var C = Sub(10, 5);
console.log('This is CONSTRUCTORS function Substraction is :' + C);


//4. Self_Invoked Function

(function(o, p) {
    console.log("This is SELF_INVOKED function Multiplication is :" + o * p);
})(50, 10);