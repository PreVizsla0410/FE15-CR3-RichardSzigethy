let kiss = 15;
let metallica = 25;
let blackeyedpeas = 35;
let motorhead = 45;
let queen = 55;
let ironmaiden = 65;
let brake = 75;
let neminem = 85;
let fiftteen = 95;

function calculateInvoice(kiss, metallica, blackeyedpeas, motorhead, queen, ironmaiden, brake, neminem, fifteen) {
return kiss + metallica;
};
console.log("the tickets cost: " + (kiss + metallica)+ " €"); //price of two bands together

const stage1 = [15, 25, 35]
const stage2 = [45, 55, 65]
const stage3 = [75, 85, 95]
var summe = []

const arr = summe.concat(stage1[0],stage2[0],stage3[0]) //create the array
let sum = 0;

for(i in arr)  
    sum+=arr[i] 

console.log('the tickets cost: '+sum + " €")

//Price of "Kiss", "Motorhead" and "15Cent" together



var invoice = [
    [15, 25, 35],
    [45, 55, 65], 
    [75, 85, 95], 
  ];
  
  
  console.log("The invoice 1 would cost: " + (invoice[0][1] + invoice[1][1] + invoice[2][1]) + " €");
  
  console.log("The invoice 2 would cost: " + (invoice[0][2] + invoice[1][2] + invoice[2][2]) + " €");
  
  console.log("The invoice 3 would cost: " + (invoice[0][2] + invoice[1][0] + invoice[2][0]) + " €");