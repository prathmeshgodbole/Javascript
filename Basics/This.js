var myCar = {
    name: "Audi",
    speed: 200,
    drive: function(speed, time) {
        console.log("Distance is:" +
            speed * time);
    },
    test: function() {
        console.log(this);
    }
};


myCar.test();
myCar.drive(200, 2);