function Student(){
    // this.name=name;
    // this.grade=grade;
    // this.rollno=rollno;
}

Student.prototype.sayName=function(){
    console.log(this.name)
}

// Student.prototype.goToProm=function()
// {

// }


function EightGrader(name){
    this.name=name;
    this.grade=8;
}

// EightGrader.prototype=Object.create(Student.prototype)
EightGrader.prototype=Student.prototype

// const s1=new EightGrader("Carl");
// s1.sayName();
// s1.grade;

function NinthGrader(name){
    this.name=name;
    this.grade=9; 
}

NinthGrader.prototype=Student.prototype

NinthGrader.prototype.sayName=function()
{
    console.log("HAHAHHAHAHA")
}
const s2=new EightGrader("Carl")
s2.sayName();