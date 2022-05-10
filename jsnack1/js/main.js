let emptyArray = [];

for (i=0; i<10; i++){
    let numRandom = Math.floor((Math.random() * 1000) + 1);
    emptyArray.push(numRandom);
}

console.log(emptyArray);