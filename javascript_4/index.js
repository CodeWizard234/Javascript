

// // let randomNumber = Math.floor(Math.random() * 100 +1);

// // console.log(randomNumber);


// let min = 1;
// let max = 50;

// let rndNumb = Math.floor(Math.random() * (max-min) + min);

// // console.log(rndNumb);


const myButton = document.getElementById("myButton");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min =1;
const max = 6;

let randumNum1;
let randumNum2;
let randumNum3;
myButton.onclick = function (){
    randumNum1= Math.floor(Math.random() * max) + min;
    randumNum2= Math.floor(Math.random() * max) + min;
    randumNum3= Math.floor(Math.random() * max) + min;
    label1.textContent = randumNum1;
    label2.textContent = randumNum2;
    label3.textContent = randumNum3;
}
