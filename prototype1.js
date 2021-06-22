function Dog(name,breed,color){
    this.name=name;
    this.breed=breed;
    this.color=color;
    this.bark=function()
{
    return 'Woof!';
}

const dog1 = new Dog(
    "Babdya",
    "Labrador",
    "Black"
)

const dog2 = new Dog(
    "Jack",
    "Jack Russell",
    "White"
)

//console.log(dog1);

}