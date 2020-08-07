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



    //Spread parameter == (...)
    var add = [5, 10, 15];

    function nums(a, b, c) {
        console.log("Addition is : " + (a + b + c));
    }
    nums(...add);

    var p = [1, 2, 3];
    var q = [...p, 4, 5, 6];
    console.log(q);



    //Template string == ($)
    function log(name, age) {
        console.log(`My name is ${ name } & 
My age is ${10+10} `);
    }
    log("Bob", 30);



    //New String Methods == (repeat,startsWith,endsWith,includes)
    var str = "GoodMorning";
    console.log(str.repeat(5));

    console.log(str.startsWith("Good"));
    console.log(str.startsWith("Morning", 4));

    console.log(str.endsWith("Morning"));
    console.log(str.endsWith("Good", str.length - 7));

    if (str.startsWith("Good")) {
        var str2 = "Bob";
    }
    console.log(`Hello ${str} Mr. ${str2}`);

    var str3 = "My name is Bob.";
    console.log(str3.includes("name"));



    //Oject Literal Improvements
    var name = "Mack";
    var belt = "Black";

    var sport = {
        name,
        belt,
        chop(x) {
            console.log(`You chopped the enemy ${x} times`);
        }
    };
    console.log(sport.chop(5));


    //Arrow funtion
    var ninja = {
        name: "Raju",
        slap(x) {
            window.setInterval(() => {
                if (x > 0) {
                    console.log(this.name + " slapped times. ");
                    x--;
                }
            }, 1000);
        }
    };
    ninja.slap(5);

    //sets 
    var names = new Set();
    names.add("Amar").add("Akbar").add("Anthony");
    console.log(names);
    console.log("Size of set :" + names.size);

    names.delete

}