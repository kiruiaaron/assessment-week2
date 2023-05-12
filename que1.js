
function myfunction(num1,num2){
   
    if(num1 == 8 || num2 == 8){
        return true;
    }
    else if((num1 + num2) == 8 || (num1 - num2)==8  || (num2 - num1) == 8){
        return true;
    }
    else{
        return false
    }

}
console.log( myfunction(2,6))