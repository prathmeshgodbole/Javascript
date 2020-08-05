//1st way to create object
var myCar = new Array();
myCar['name'] = "Audi";
myCar['speed'] = 200;
console.log("This is myCar....1st way ");
console.log(myCar);


//2nd way to create object
var myCar1 = new Object();
myCar1.speed = 100;
myCar1.name = "Dzire";
myCar1.drive = function() { console.log("This is myCar1.... 2nd way"); };
myCar1.drive();
console.log(myCar1.name);
console.log(myCar1);
myCar1.Company = "Suzuki";
console.log(myCar1);


//3rd way to create object
var myCar2 = { name: "MG", speed: 150, brand: "Hector" };
console.log("This is myCar2....3rd way ");
console.log(myCar2.name);
console.log(myCar2.speed.toString());


//4th way to create object
var myCar3 = {}
myCar3.speed = 300;
myCar3.name = "Bugati";
console.log("This is myCar3....4th way ");
console.log(myCar3);


//5th way- Objects with Constructor Function
function myCar4() {
    this.speed = 400;
    this.name = "Jaguar";
}
Car = new myCar4();
console.log("This is myCar4....5th way ");
console.log(Car);
console.log(Car.name);


//6th way -Object Literals Object creation with Object.create()
//Object literal
var Animal = {
        type: "Wild",
        names: ["Leopard", "Rhino"],
        displayType: function() {
            console.log("Type of Animal : " + this.type);
        }
    }
    //Object Creation with Object.create()
var Tiger = Object.create(Animal);
Tiger.type = "Something else";
console.log("This is 6th way....");
Tiger.displayType();
console.log(Animal);

var Prop = "names";
console.log("names : " + Animal[Prop]);

//Add properties
Animal.king = "LION";
//Add function property 
Animal.Details = function() {};
console.log(Animal);



//Delete Objects property with DELETE KEYWORD
var Trainer = {
    name: "Kk",
    subjects: ["Math", "Physics", "Chem"],
    teaches: ["Fail", "Pass"],
    age: 30
}
var properties = " ";
for (p in Trainer) {
    properties += p + " : ";
}
console.log("Before Deletion :" + properties);


delete Trainer.age;
var properties = " ";
for (p in Trainer) {
    properties += p + " : ";
}
console.log("After Deletion :" + properties);