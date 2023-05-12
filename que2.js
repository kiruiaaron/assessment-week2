

hourMinute=(num)=>{
    let hour = Math.floor(num/60);
    let min = num%60
    return (`${hour} hours ${min} minutes`);
}
console.log(hourMinute(200))