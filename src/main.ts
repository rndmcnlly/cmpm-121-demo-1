import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// Game name
const gameName = "Wow what a great Game";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Initiate counter, growth rate, knives
let counter = 0;
let onionPerSec = 1;
let knives = 0;
let ninjas = 0;
let robots = 0;
let knifePrice = 10;
let ninjaPrice = 100;
let robotPrice = 1000;

// Slightly smaller title text
let divHead = `The score is ${counter}, with growth rate ${onionPerSec.toPrecision(2)}` ;
const div = document.createElement("div");
div.innerHTML = divHead;
app.append(div);

// Button to farm🧅ONIONS
const button = "🧅Click!"
const mainButton = document.createElement("button")
mainButton.innerHTML = button;
app.append(mainButton);

// Buttons to increase growth rate of farming onions
let knife = `🔪Knife!\n(Cost ${knifePrice}) Knives: ${knives}`;
const sideButton = document.createElement("button");
sideButton.innerHTML = knife;
app.append(sideButton);

let ninja = `🥷🏼Ninja!!\n(Cost ${ninjaPrice}) Ninjas: ${ninjas}`;
const sideButton2 = document.createElement("button");
sideButton2.innerHTML = ninja;
app.append(sideButton2);

let robot = `🤖ROBOT!!!\n(Cost ${robotPrice}) Robots: ${robots}`;
const sideButton3 = document.createElement("button");
sideButton3.innerHTML = robot;
app.append(sideButton3);

setInterval(() => {
  if (counter >= robotPrice){//robotPrice) {
    sideButton3.disabled = false; 
  } else if (counter >= ninjaPrice) {
    sideButton2.disabled = false;
  } else if (counter >= knifePrice) {
    sideButton.disabled = false;
  } else {
    sideButton.disabled = true;
    sideButton2.disabled = true;
    sideButton3.disabled = true;
  }
});

// Listeners for button reactions (Help from TA Nicholas Nolasco)
mainButton.addEventListener("click", () => {
  counter++;
  divHead = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec.toPrecision(2)}`;
  div.innerHTML = divHead
});

sideButton.addEventListener("click", () => {
  counter -= knifePrice;
  knifePrice *= 1.15;
  onionPerSec += 0.1;
  knives++;
  divHead = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec.toPrecision(2)}`;
  knife = `🔪Knife!\n(Cost ${knifePrice.toPrecision(4)}) Knives: ${knives}`;
  div.innerHTML = divHead;
  sideButton.innerHTML = knife;
});

sideButton2.addEventListener("click", () => {
  counter -= ninjaPrice;
  ninjaPrice *= 1.15;
  if (counter < 100) {
    sideButton2.disabled = true;
  }
  onionPerSec += 2;
  ninjas++;
  divHead = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec.toPrecision(2)}`;
  ninja = `🥷🏼Ninja!!\n(Cost ${ninjaPrice.toPrecision(4)}) Ninjas: ${ninjas}`;
  div.innerHTML = divHead;
  sideButton2.innerHTML = ninja;
});

sideButton3.addEventListener("click", () => {
  counter -= robotPrice;
  robotPrice *= 1.15;
  if (counter < 1000) {
    sideButton3.disabled = true;
  }
  onionPerSec += 50;
  robots++;
  divHead = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec}`;
  robot = `🤖ROBOT!!!\n(Cost ${robotPrice.toPrecision(4)}) Robots: ${robots}`;
  div.innerHTML = divHead
  sideButton3.innerHTML = robot;
});

autoOnionClicking();

function autoOnionClicking() {
  let prevFrameTime = performance.now();
  window.requestAnimationFrame(checkCounterUpdate);
  function checkCounterUpdate() {
    const milPerFrame = 1000 / onionPerSec;
    if (performance.now() - prevFrameTime > milPerFrame) {
      counter += 1;
      div.textContent = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec.toPrecision(2)}`
      prevFrameTime = performance.now();
    } 
    window.requestAnimationFrame(checkCounterUpdate);
  }
}