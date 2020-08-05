function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;

}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, " just logged in");
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, " just logged out");
}

var userOne = new User("abc@gmail.com", "abc");
var userTwo = new User("pqr@gmail.com", "pqr");

console.log(userOne);
// userOne.login();
console.log(userTwo);
// userTwo.login();

//Prototype inheritance
function Admin(...args) {
    // console.log(args); //displays email and name of admin
    User.apply(this, args); //inherits all properties from User
    this.role = "super admin"; //adds extra property to admin
}

Admin.prototype = Object.create(User.prototype); //inherits login and logout prototype of User

Admin.prototype.deleteUser = function(u) {
    users = users.filter(User => {
        return User.email != u.email;
    });
}; // adds new method deleteUser to the Admin only & deletes method 
var admin = new Admin("xyz@gmail.com", "xyz");
var users = [userOne, userTwo, admin];
console.log(admin);