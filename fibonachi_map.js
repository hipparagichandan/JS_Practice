function fib(n, memo = new Map()) {
    if(n<=1) return n;
    if(memo.has(n)) return memo.get(n);
    const result = fib(n-1, memo) + fib(n-2, memo);
    memo.set(n,result);
    return result;
}

//[0,1,1,2,3,5,8] - Fib series
//[0,1,2,3,4,5,6] - Index fib(3) should be 2 , fib(6) is 8

console.log(fib(5))