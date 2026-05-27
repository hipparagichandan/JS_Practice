const set = new Set(['apple', 'banana', 'apple']);

console.log(typeof set, set, set.has('apple'), set.add('panda'))

const mySet = new Set();
mySet.add({ id: 1 });
mySet.add({ id: 1 }); 
console.log(mySet)