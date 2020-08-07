window.onload = function() {
    //const keyword
    const pi = 3.142;

    function calcArea(r) {
        const pi = 10;
        console.log("Calculation :" +
            pi * r * r);
    }

    console.log(pi);
    calcArea(5);


    //Let keyword 
    var list = document.getElementsByTagName("li");
    for (let x = 0; x < list.length; x++) {
        list[x].onclick = function() {
            console.log(x);
        }
    }

    //Default Parameter
    function logic(name = "Bob", age = 20) {
        console.log("My name is : " + name + " age is : " + age);
    }
    logic("Mak", 30);

    //Spread parameter(...)
    var add = [5, 10, 15];

    function nums(a, b, c) {
        console.log("Addition is : ")
    }
}