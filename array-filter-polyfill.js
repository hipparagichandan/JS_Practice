const nums = [1,2,3,4,5,6,8,7];

const filtered = nums.filter((num) => {
    return num %2 === 0;
})
console.log(filtered)

////////////////////////
Array.prototype.myFilter = function( callback){
    let result = [];

    for(let i = 0; i< this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result;
}
////////////////////////

const customFiltered = nums.myFilter((num) => {
    return num %2 === 0;
})

console.log(customFiltered)