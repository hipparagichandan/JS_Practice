const twoSum = (arr, target) => {
    const visited = new Map();

    for(let i=0; i<arr.length; i++){

        if(visited.has(arr[i])){
            return [visited.get(arr[i]), i]
        } else {
            visited.set(target-arr[i],i)
        }
    }

    return [-1, -1]
}

const numbers = [1,3,2,5,4]
console.log(twoSum(numbers, 9))