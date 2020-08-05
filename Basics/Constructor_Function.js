var Car = function(name, maxspeed) {
    this.name = name;
    this.maxspeed = maxspeed;
    this.drive = function(time, speed) { console.log(time * speed); },
        this.abc = function() {
            console.log("CarName is: " + this.name);
        };
}
var myCar = new Car("Audi", 100);
var myCar2 = new Car("BMW", 200);
var myCar3 = new Car("Volvo", 300);
myCar.drive(2, 200);
myCar2.abc();