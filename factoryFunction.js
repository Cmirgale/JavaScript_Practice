
const FactoryFunction=string=>{
    const captialString=()=>string.toUpperCase();
    const printString=()=>console.log(`-----${captialString()}-----`);
    return {printString};
}

const taco=FactoryFunction("TACO");

//printString();
//captialString();
// taco.captialString();
taco.printString();