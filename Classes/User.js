class User{
    constructor(name){
        this.name=name;
        sayHi()
        {
            alert(this.name);
        }
    }
}

//class is function
console.log(typeof User);

//constructor method
console.log(User===User.prototype.constructor);
alert(Object.getOwnPropertyNames(User.prototype));