// const person={
//     name:['Bob','Smith'],
//     age:32,
//     gender:'male',
//     interest:['music',]

// }


//Object Creation and Initilization Example 1

function Player(name,marker)
{
    this.name=name;
    this.marker=marker;
   
}
const player=new Player('Steve','X')
console.log(player.name)
console.log(player.marker)


//Object Function Example 2

function Player(name,marker)
{
    this.name=name;
    this.marker=marker;
    this.sayName=function(){
        console.log(name)
    }
}

const player1=new Player('Steve','X')
const player2=new Player('Also Steve','O')

player1.sayName();
player2.sayName();