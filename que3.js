
arrayVariable =(arraylist)=>{
    let myArray =[];
  let first = arraylist[0];
  let last = arraylist.pop();

  myArray.push(first,last)
  return myArray;



}
console.log(arrayVariable([20,30,40,60]))