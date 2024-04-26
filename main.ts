// Q no 109

const currentTime =new Date();
if(currentTime.getHours()< 12){
    console.log("Good Morning");
    
}

//  Q    no 110

function assignGrade(score:number){
  if(score >= 90){
    return "A"
  } else if(score >= 80){
    return "B"
  } else if(score >= 70){
    return "C"
  } else if(score >= 60){
    return "D"
  } else{
    return "F"
  }
}
console.log(assignGrade(85));
console.log(assignGrade(55));

//  Q no 111

function catagorizeAge(age:number):string{
 if(age < 13){
    return "Child"
 }else if(age <= 19){
    return "Teenager"
 }else{
    return "Adult"
 }
}
console.log(catagorizeAge(12));
console.log(catagorizeAge(18));
console.log(catagorizeAge(25));
