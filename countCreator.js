const countCreator=()=>{
    let count=0;
    return ()=>{
        console.log(count);
        count++;
    };
};

const counter=countCreator();

counter();
counter();
counter();
counter();