// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var minus50Btn = document.getElementById("minus50");
var counter = 0;
var story = "Once upon a time, ";
var displayEL = document.getElementById("display");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50btn = document.getElementById("plus50");
var stringInEl = document.getElementById("strIn");
let storyEl = document.getElementById("strOut");
let roundBtn1 = document.getElementById("rand1");
let roundBtn2 = document.getElementById("rand2");
let roundBtn3 = document.getElementById("rand3");
let roundBtn4 = document.getElementById("rand4");
let randominput1 = document.getElementById("rand-in1");
let randominput2 = document.getElementById("rand-in2");
let randSize = document.getElementById("random-size");
let randColor = document.getElementById("random-rgb");
let resetPage = document.getElementById("reset");
let toyButton = document.getElementById("toy-btn");
let toyContainer = document.getElementById("toy-div");
var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");
// Event Listener
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1Btn.addEventListener("click", minus1fcn);
plus1Btn.addEventListener("click", plus1fcn);
plus10Btn.addEventListener("click", plus10fcn);
plus50btn.addEventListener("click", plus50fcn);
stringInEl.addEventListener("change", updateStory);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
// Event Function
function minus50fcn() {
  // Update the value of the counter (JS)
  counter = counter - 50;
  console.log(counter);
  // Use the counter to update the website
  document.getElementById("display").innerHTML = counter;
}
function minus10fcn() {
  // Update the counter
  counter -= 10; //same as counter = counter - 10
  // Update site
  displayEL.innerHTML = counter;
}
function minus1fcn() {
  // Update the value of the counter (JS)
  counter--;
  // Update site
  displayEL.innerHTML = counter;
}
function plus1fcn() {
  // Update the value of your counter
  counter++;
  // Update site
  displayEL.innerHTML = counter;
}

function plus10fcn() {
  // Update counter
  counter += 10;
  // Update site
  displayEL.innerHTML = counter;
}
function plus50fcn() {
  counter += 50;
  displayEL.innerHTML = counter;
}

function updateStory() {
  // Save the user's word to a variable
  var word = stringInEl.value;
  // Update the story variable
  story += word + " ";
  console.log(story);
  // Clear input field
  stringInEl.value = "";

  // Update the site to show story
  storyEl.innerHTML = story;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);
randColor.addEventListener("click", colorfcn);
resetPage.addEventListener("click", reset);
toyButton.addEventListener("click", addToy);
// randominput2.addEventListener("change", round4);
// randominput1.addEventListener("change", round4);
randSize.addEventListener("click", sizefcn);
function round1() {
  // Create random dec 0-1
  let rand = Math.random();
  // Round to 3 deciml places
  rand = rand.toFixed(3);
  console.log(rand);
  document.getElementById("rand1-out").innerHTML = rand;
}
function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  console.log(rand);

  // Update site

  document.getElementById("rand2-out").innerHTML = rand;
}
function round3() {
  // -5 to 5
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  document.getElementById("rand3-out").innerHTML = rand;
}
function round4() {
  var rand =
    Math.random() * (randominput2.value - randominput1.value) +
    randominput1.value;
  rand = Math.round(rand);
  document.getElementById("rand4-out").innerHTML = rand;
  // randominput1 and randominput2
}

function sizefcn() {
  let rand = Math.random() * 75;
  rand = Math.round(rand);
  console.log(rand);
  let string = rand + "px";

  document.getElementById("theBody").style.fontSize = string;
}

function colorfcn() {
  let r = Math.random() * 255;
  r = Math.round(r);
  let g = Math.random() * 255;
  g = Math.round(g);
  let b = Math.random() * 255;
  b = Math.round(b);
  let rgbString = "rgb" + "(" + r + ", " + g + ", " + b + ")";
  console.log(rgbString);

  document.getElementById("HTML").style.background = rgbString;
}
function reset() {
  document.getElementById("display").innerHTML = 0;
  storyEl.innerHTML = "Once upon a time,";
  // "----------"
  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";
  randominput2.value = "";
  randominput1.value = "";
  let realFont = `15px`;
  document.getElementById("theBody").style.fontSize = realFont;
  let realColor = `#9ae4c8`;
  document.getElementById("HTML").style.background = realColor;
}

// Random # from x to y:
// Math.random() * (y-x) + x

// Eg. If i want a random # from 1 - 3:
// var rand = Math.random() * (2) + 1
// rand = Math.round(rand)

picBtn.addEventListener("click", addCandy);
function addCandy() {
  // Every click, add another candy to the container
  picContainer.innerHTML +=
    "<img width='50px' src = 'images/nerdsgummyclusters.png'>";
}

function addToy() {
  toyContainer.innerHTML += "<img width=' 50px' src='images/dog.png'/>";
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       rgbString

// Your job is to make the values random in the above code snippet.

// 5. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
// not allowed to use window.location.reload (which simply refreshes the page)

//6. Create a button that when pressed, add an image of a favourite toy to the website
// Each click adds another toy
