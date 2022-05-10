const myMain = document.querySelector("main");

let myRedDiv = document.createElement("div");
let myGreenDiv = document.createElement("div");

myMain.append(myRedDiv);
myMain.append(myGreenDiv);

myRedDiv.setAttribute("id", "red");
myGreenDiv.setAttribute("id", "green");

myRedDiv = document.getElementById("red");
myGreenDiv = document.getElementById("green");

myRedDiv.style.color = "red";
myGreenDiv.style.color = "green";

let randomNumbersArray = [];

for (i=0; i<20; i++){
    let numRandom = Math.floor((Math.random() * 1000) + 1);
    randomNumbersArray.push(numRandom);
}

for (i=0; i<20; i++){
    if (randomNumbersArray[i] % 2 != 0){
        myRedDiv.append(randomNumbersArray[i] + " ");
    } else {
        myGreenDiv.append(randomNumbersArray[i] + " ");
    }
}