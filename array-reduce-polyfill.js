const nums = [1,2,3,4,5];


let sum;
const addNum = nums.reduce((accumalator,currentValue) => {
    return accumalator + currentValue;
},0)

console.log(addNum);

//////////////////////////////////
Array.prototype.myreduce = function (callback,initialValue){
    const hasInitialvalue = arguments.length > 1;
    const startIndex = hasInitialvalue  ? 0 : 1; 
    let accumalator = hasInitialvalue  ? initialValue : this[0] ;
    for(let i= startIndex; i< this.length; i++){
       accumalator = callback(accumalator, this[i],i,this)
    }
    return accumalator;
}
//////////////////////////////////

const sum2 = nums.myreduce( (acc,curr)=>{
    return acc+curr
}, 100 )

console.log(sum2)