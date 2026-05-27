const arr = [1,2,3];
const callback = (ele,index,arr)=>{
    return ele * 2;
}
const newArr = arr.map(callback )

///////////////////////////////////////////////
//polyfill for Array.prototype.map
Array.prototype.myMap = function (callback) {
 const result = [];
 for(let i=0; i<this.length; i++ ) {
    result.push(callback(this[i], i, this))
 }
 return result;
}
///////////////////////////////////////////////

const nums = [2,4,6];
const newNums = nums.myMap( (num)=>{
    return 2*num;
})

console.log(['apple', 'banana', 'cat'].myMap( fruit => fruit+fruit))
console.log(newArr)
console.log('result from myMap' , newNums)