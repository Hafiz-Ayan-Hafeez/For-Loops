console.log("Hello Loops");

var head1 = document.querySelector ("#head1");

for (var i = 0; i < 5; i++) {
    head1.innerHTML += "Hello World" + "<br />";
}

var head2 = document.querySelector ("#head2");

for (var i = 1; i <= 10; i++) {
    head2.innerHTML += i + "<br />";
}

var head3 = document.querySelector ("#head3");

var table = prompt("Enter Any Number to get Table of that Number");
var lengthTable = prompt("Enter its Length to get Table of that Number according to its Length");

for (var i = 1; i <= lengthTable; i++) {
    head3.innerHTML += `${table} x ${i} = ${table * i} <br />`;
}

var head4 = document.querySelector ("#head4");

var mobileArray = ["Nokia" , "Samsung" , "Apple" , "Sony" , "Huawei"];

for (var i = 0; i < mobileArray.length; i++){
    head4.innerHTML += `${mobileArray[i]} <br />`;
}

var head5 = document.querySelector ("#head5");
var head6 = document.querySelector ("#head6");

var fruitsArray = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];

for (var i = 0; i < fruitsArray.length; i++){
    head5.innerHTML += `${fruitsArray[i]} <br />`;
}
head6.innerHTML += `Element at index 0 is ${fruitsArray[0]} <br />`;
head6.innerHTML += `Element at index 1 is ${fruitsArray[1]} <br />`;
head6.innerHTML += `Element at index 2 is ${fruitsArray[2]} <br />`;
head6.innerHTML += `Element at index 3 is ${fruitsArray[3]} <br />`;
head6.innerHTML += `Element at index 4 is ${fruitsArray[4]} <br />`;

var head7 = document.querySelector ("#head7");
var head8 = document.querySelector ("#head8");

var itemNumber = prompt("Enter Number Of Items to Get List");
var index0 = prompt("Enter Value for Index 0");
var index1 = prompt("Enter Value for Index 1");
var index2 = prompt("Enter Value for Index 2");
var index3 = prompt("Enter Value for Index 3");

head7.innerHTML += `Number of Items:- ${itemNumber} <br /> Items:- <br />`;
for (var i = 0; i < 4; i++){
    head8.innerHTML = `${index0} <br /> ${index1} <br /> ${index2} <br /> ${index3} <br />`;
}

var head9 = document.querySelector ("#head9");
var head10 = document.querySelector ("#head10");
var head11 = document.querySelector ("#head11");
var head12 = document.querySelector ("#head12");
var head13 = document.querySelector ("#head13");

for (var i = 1; i <= 15; i++) {
    head9.innerHTML += ` ${i} , `;
}

for (var i = 10; i >= 1; i--){
    head10.innerHTML += ` ${i} ,`;
}

for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0){
        head11.innerHTML += ` ${i} ,`;
    }
    else{}
}

for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0){
        head12.innerHTML += ` ${i} ,`;
    }
    else{}
}

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0){
        head13.innerHTML += ` ${i}K ,`;
    }
    else{}
}

var bakeryItemsArray = ["Cake" , "Apple Pie" , "Cookie" , "Chips" , "Patties"];
var head14 = document.querySelector ("#head14");
var search = prompt("Welcome to ABC Bakery. What do you want to Order Sir / Ma'am")

    if (bakeryItemsArray.indexOf(search.toLowerCase()) === -1) {
        head14.innerHTML += `We are Sorry! ${search} is not available in our Bakery`;
    }
    else{
        head14.innerHTML += `${search} is available in our Bakery`;
    }
    
    for (var i = 0; i < bakeryItemsArray.length; i++){
        if (bakeryItemsArray[i] === search){
            console.log("Valid");
            break;
        }
        else{
            console.log("Un Valid");
        }
    }
    bakeryItemsArray.value = "";


var head15 = document.querySelector ("#head15");
var head16 = document.querySelector ("#head16");

var identifier = [24 , 53 , 78 , 91 , 12];
head15.innerHTML += " " + identifier + ", ";

function largest() {
    var maximum = identifier[3];
    for (var i = 0; i < identifier.length; i++){
        if (identifier[i] < maximum){
            head16.innerHTML = `The Largest Number is ${maximum}` ;
        }
        else{}
    }
}
largest();


var head17 = document.querySelector ("#head17");
var head18 = document.querySelector ("#head18");

var identifier = [24 , 53 , 78 , 91 , 12];
head17.innerHTML += " " + identifier + ", ";

function smallest() {
    var minimum = identifier[4];
    for (var i = 0; i < identifier.length; i++){
        if (identifier[i] > minimum){
            head18.innerHTML = `The Smallest Number is ${minimum}` ;
        }
        else{}
    }
}
smallest();

var head19 = document.querySelector ("#head19");
var head18 = document.querySelector ("#head20");
var head17 = document.querySelector ("#head21");

var identifier = [24 , 53 , 78 , 91 , 12];
head19.innerHTML += " " + identifier + ", ";

function max_min() {
    var maximum = identifier[3];
    for (var i = 0; i < identifier.length; i++){
        if (identifier[i] < maximum){
            head20.innerHTML = `The Largest Number is ${maximum}` ;
        }
        else{}
    }
    var minimum = identifier[4];
    for (var i = 0; i < identifier.length; i++){
        if (identifier[i] > minimum){
            head21.innerHTML = `The Smallest Number is ${minimum}` ;
        }
        else{}
    }
}
max_min();

var head22 = document.querySelector ("#head22");

for (var i = 5; i <= 100; i++) {
    if (i % 5 == 0) {
        head22.innerHTML += ` ${i} ,`
    }
}

var head23 = document.querySelector ("#head23");
var head24 = document.querySelector ("#head24");
var head25 = document.querySelector ("#head25");
var head26 = document.querySelector ("#head26");

var students = ["Ali" , "Sami" , "Taha" , "Inam"];
var scores = [58 , 73 , 89 , 90];

head23.innerHTML += `<td>${students[0]}</td> <td>${scores[0]}</td>`;
head24.innerHTML += `<td>${students[1]}</td> <td>${scores[1]}</td>`;
head25.innerHTML += `<td>${students[2]}</td> <td>${scores[2]}</td>`;
head26.innerHTML += `<td>${students[3]}</td> <td>${scores[3]}</td>`;

var head27 = document.querySelector ("#head27");
var head28 = document.querySelector ("#head28");

var scoreStop = [12 , 45 , 3 , 22 , 34 , 50];
var stopValue = +prompt("Enter Any value from an Array to stop the score");

head27.innerHTML += "Score:- " + scoreStop;

if (stopValue === 12){
    head28.innerHTML += "Stop Value:- " + [12];
}
else if (stopValue === 45){
    head28.innerHTML += "Stop Value:- " +  [12 , 45];
}
else if (stopValue === 3){
    head28.innerHTML += "Stop Value:- " + [12 , 45 , 3];
}
else if (stopValue === 22){
    head28.innerHTML += "Stop Value:- " + [12 , 45 , 3 , 22];
}
else if (stopValue === 34){
    head28.innerHTML += "Stop Value:- " + [12 , 45 , 3 , 22 , 34];
}
else if (stopValue === 50){
    head28.innerHTML += "Stop Value:- " + scoreStop;
}
else{}

var multiArray1 = document.querySelector ("#multiArray1");
var multiArray2 = document.querySelector ("#multiArray2");
var multiArray3 = document.querySelector ("#multiArray3");

var matrices = [[1 , 2 , 3] , [4 , 5 , 6] , [7 , 8 , 9]];

function called() {
    for (var i = 0; i <= 1; i++){
        multiArray1.innerHTML = `${matrices[0][0]} ${matrices[0][1]} ${matrices[0][2]}`;
    }
    for (var i = 0; i <= 1; i++){
        multiArray2.innerHTML = `${matrices[1][0]} ${matrices[1][1]} ${matrices[1][2]}`;
    }
    for (var i = 0; i < 2; i++){
        multiArray3.innerHTML = `${matrices[2][0]} ${matrices[2][1]} ${matrices[2][2]}`;
    }
}
called();

var head29 = document.querySelector ("#head29");
var userInput = +prompt("Enter Any Number");

for (var i = userInput; i >= 0; i--){
    console.log(i , i - 0.5);
    head29.innerHTML = "Answer is in Console"
}

var head30 = document.querySelector ("#head30");

for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0){
        head30.innerHTML += `${i} is Even Number <br />`;
    }
    else{
        head30.innerHTML += `${i} is Odd Number  <br />`;
    }
}

var head31 = document.querySelector ("#head31");

for (var i = 0; i <= 7; i++) {
    if (i % 2 != 0){
        head31.innerHTML = `The Product of the Odd Integers from 1 to 7 is ${1 * 3 * 5 * 7}`
    }
    else{}
}

var head32 = document.querySelector ("#head32");

for (var i = "*******"; i >= "*"; i--) {
    head32.innerHTML += `${i}<br />`;
    for (var i = "******"; i >= "*"; i--){
        head32.innerHTML += `${i}<br />`;
    }
    for (var i = "*****"; i >= "*"; i--){
        head32.innerHTML += `${i}<br />`;
    }
    for (var i = "****"; i >= "*"; i--){
        head32.innerHTML += `${i}<br />`;
    }
    for (var i = "***"; i >= "*"; i--){
        head32.innerHTML += `${i}<br />`;
    }
    for (var i = "**"; i >= "*"; i--){
        head32.innerHTML += `${i}<br />`;
    }
    for (var i = "*"; i >= "*"; i--){
        head32.innerHTML += `${i}<br />`;
    }
}

var head33 = document.querySelector ("#head33");

for (var i = "*****"; i >= "*"; i--) {
    head33.innerHTML += `a) <br /> ${i}<br /> ${i}<br /> ${i}<br /> ${i}<br />`;
}

var head34 = document.querySelector ("#head34");

for (var i = "*"; i <= "*****"; i++) {
    head34.innerHTML += `b) <br /> ${i}<br />`;
    for (var i = "**"; i <= "*****"; i++) {
        head34.innerHTML += `${i}<br />`;
    }    
    for (var i = "***"; i <= "*****"; i++) {
        head34.innerHTML += `${i}<br />`;
    }   
    for (var i = "****"; i <= "*****"; i++) {
        head34.innerHTML += `${i}<br />`;
    }   
    for (var i = "*****"; i <= "*****"; i++) {
        head34.innerHTML += `${i}<br />`;
    }   
}

var head35 = document.querySelector ("#head35");

for (var i = "*****"; i >= "*"; i--) {
    head34.innerHTML += `c) <br /> ${i}<br />`;
    for (var i = "****"; i >= "*"; i--){
        head34.innerHTML += `${i}<br />`;
    }
    for (var i = "***"; i >= "*"; i--){
        head34.innerHTML += `${i}<br />`;
    }
    for (var i = "**"; i >= "*"; i--){
        head34.innerHTML += `${i}<br />`;
    }
    for (var i = "*"; i >= "*"; i--){
        head34.innerHTML += `${i}<br />`;
    }
}