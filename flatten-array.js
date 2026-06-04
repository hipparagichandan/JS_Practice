const arrs = [1, [2,3],4,[5],6,[7,[8,9,[0,[1,2,[3,4]]]]]]
const flat = arrs.flat(Infinity)
console.log(flat)

////////////////////////////
function flatten(arr){

    const flatArr = arr.reduce((acc, current) => {
        let result = [];
        if(Array.isArray(current)){
            return acc.concat(flatten(current))
        }
        acc.push(current);
        return acc;
    }, [])

    return flatArr;
}
////////////////////////////

console.log('flatten', flatten(arrs))