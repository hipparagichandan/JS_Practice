const happyNumber = (n) => {
    const visited = new Set();
    while(n !== 1){
       if(visited.has(n)) return false;
       visited.add(n);
       n = n.toString().split('').reduce( (sum,digit) => sum+Math.pow(Number(digit),2),0 )
    }

    return true;
}

console.log(happyNumber(19))
console.log(happyNumber(2))