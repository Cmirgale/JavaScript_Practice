var Dog=function(name){
    this.name=name;


var barkCount=0;
this.bark=function(){
    barkCount++;
    alert(this.name+"bark");
}

this.getBarkCount=function(){
    alert(this.name+"has barked"+ barkCount +"times")
};

};

Dog.prototype.wagTail=function()
{
    alert(this.name+"wagging tail");
}

var dog=new Dog("Dave");
dog.bark();
dog.bark();
dog.getBarkCount();
dog.wagTail();