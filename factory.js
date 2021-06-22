const personFactory=(name,age)=>
{
    const sayHello=()=>console.log('Hello!');
    return {name,age,sayHello};  //Factory function
};

const cm=personFactory('Chanu',27);

console.log(cm.name);


cm.sayHello();


