let a=17;
const scopeValue = x =>
{
    let a=x; //if we comment the let it will give 99 as output
    // as it will find two diff a in the heap
}

scopeValue(99);
    
console.log(a);
