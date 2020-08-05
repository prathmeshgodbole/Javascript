class User {
    constructor(email, name) {
            this.email = email;
            this.name = name;
            this.score = 0;
        }
        //2 add methods
    login() {
        console.log(this.email, " just logged in");
        return this; //3 for method chaining add return this at end
    }
    logout() {
        console.log(this.email, " just logged out");
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, "score is ", this.score);
        return this;
    }
}

var userOne = new User("abc@gmail.com", "abc");
var userTwo = new User("pqr@gmail.com", "pqr");

console.log(userOne);
userOne.login().updateScore().updateScore().logout(); //2,3 Method chaining

console.log(userTwo);
userTwo.login().updateScore().updateScore().logout(); //2,3


// 4 Class Inheritance 
// class Admin extends User {
//     deleteUser(User) {
//         users = users.filter(u => {
//             return u.email != User.email;
//         })
//     }
// }

// var admin = new Admin("xyz@gmail.com", "xyz"); //4
// var users = [userOne, userTwo, admin]; //4

// admin.deleteUser(userOne); //4
// console.log(users); //4