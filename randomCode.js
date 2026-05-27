// const mymap = new Map();
// mymap.set("a",1);
// mymap.set("b",2);
// mymap.set("c",3);

// console.log(mymap, typeof mymap, mymap.get("a"), mymap.has("2"), mymap.delete("c"), [...mymap], {...mymap}, ...mymap, )
// const obj = {'a': 1, 'b':2}
// console.log(Object.entries(obj))

//Find 1st unique character

const findFirstUnique = (str) => {
    const map = new Map();

    for(const ch of str){
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    for(const [ch,count] of map){
        if(count === 1){
            return ch;
        }
    }

    return 'no unique';
}

console.log(findFirstUnique('chandanchandan'))