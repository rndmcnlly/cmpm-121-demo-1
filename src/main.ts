import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// Game name
const gameName = "🧅Onion🔪Cutting🥷🏼simulator🤖";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Data-driven design
interface Item {
  name: string,
  cost: number,
  rate: number,
  description: string
}

const availableItems : Item[] = [
  {name: "🔪Knife", cost: 10, rate: 0.1, description: "Autochops onions every 5 seconds"},
  {name: "🥷🏼Ninja", cost: 100, rate: 2, description: "Slices 2 onions every second, like a ninja!"},
  {name: "👨🏻‍🍳Chef", cost: 200, rate: 5, description: "Cuts 5 onions a second (it's his profession)"},
  {name: "🧙🏻‍♀️Witch", cost: 400, rate: 20, description: "Cuts 20 onions a second with magic (and good culinary skills)"},
  {name: "🤖Robot", cost: 1000, rate: 50, description: "Onion Cutter Model Y cuts 50 at a time"},
]

// Initiate counter, growth rate, knives
let counter = 0;
let onionPerSec = 1;
let knives = 0;
let ninjas = 0;
let chefs = 0;
let witches = 0;
let robots = 0;
let knifePrice = availableItems[0].cost;
let ninjaPrice = availableItems[1].cost;
let chefPrice = availableItems[2].cost;
let witchPrice = availableItems[3].cost;
let robotPrice = availableItems[4].cost;

// Slightly smaller title text
let divHead = `The score is ${counter}, with growth rate ${onionPerSec.toPrecision(2)}` ;
const div = document.createElement("div");
div.innerHTML = divHead;
app.append(div);

// Button to farm🧅ONIONS
const button = "🧅CUT!😭"
const mainButton = document.createElement("button")
mainButton.innerHTML = button;
app.append(mainButton);

// Buttons to increase growth rate of farming onions
let knife = `Buy a ${availableItems[0].name}! (Cost ${knifePrice})<br/>Knives: ${knives}<br/>${availableItems[0].description}`;
const sideButton = document.createElement("button");
sideButton.innerHTML = knife;
app.append(sideButton);

let ninja = `Buy a ${availableItems[1].name}! (Cost ${ninjaPrice})<br/>Ninjas: ${ninjas}<br/>${availableItems[1].description}`;
const sideButton2 = document.createElement("button");
sideButton2.innerHTML = ninja;
app.append(sideButton2);

let chef = `Buy a ${availableItems[2].name}! (Cost ${chefPrice})<br/>Chefs: ${chefs}<br/>${availableItems[2].description}`;
const sideButton3 = document.createElement("button");
sideButton3.innerHTML = chef;
app.append(sideButton3);

let witch = `Buy a ${availableItems[3].name}! (Cost ${witchPrice})<br/>Witches: ${witches}<br/>${availableItems[3].description}`;
const sideButton4 = document.createElement("button");
sideButton4.innerHTML = witch;
app.append(sideButton4);

let robot = `Buy a ${availableItems[4].name}! (Cost ${robotPrice})<br/>Robots: ${robots}<br/>${availableItems[4].description}`;
const sideButton5 = document.createElement("button");
sideButton5.innerHTML = robot;
app.append(sideButton5);

setInterval(() => {
  if (counter >= robotPrice) {
    sideButton5.disabled = false; 
  } else if (counter >= witchPrice) {
    sideButton4.disabled = false;
  } else if (counter >= chefPrice) {
    sideButton3.disabled = false;
  } else if (counter >= ninjaPrice) {
    sideButton2.disabled = false;
  } else if (counter >= knifePrice) {
    sideButton.disabled = false;
  } else {
    sideButton.disabled = true;
    sideButton2.disabled = true;
    sideButton3.disabled = true;
    sideButton4.disabled = true;
    sideButton5.disabled = true;
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
  onionPerSec += availableItems[0].rate;
  knives++;
  divHead = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec.toPrecision(2)}`;
  knife = `Buy a ${availableItems[0].name}! (Cost ${knifePrice.toPrecision(4)})<br/>Knives: ${knives}<br/>${availableItems[0].description}`;
  div.innerHTML = divHead;
  sideButton.innerHTML = knife;
});

sideButton2.addEventListener("click", () => {
  counter -= ninjaPrice;
  ninjaPrice *= 1.15;
  if (counter < ninjaPrice) {
    sideButton2.disabled = true;
    sideButton3.disabled = true;
    sideButton4.disabled = true;
    sideButton5.disabled = true;
  }
  onionPerSec += availableItems[1].rate;
  ninjas++;
  divHead = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec.toPrecision(2)}`;
  ninja = `Buy a ${availableItems[1].name}! (Cost ${ninjaPrice.toPrecision(4)})<br/>Ninjas: ${ninjas}<br/>${availableItems[1].description}`;
  div.innerHTML = divHead;
  sideButton2.innerHTML = ninja;
});

sideButton3.addEventListener("click", () => {
  counter -= chefPrice;
  chefPrice *= 1.15;
  if (counter < chefPrice) {
    sideButton3.disabled = true;
    sideButton4.disabled = true;
    sideButton5.disabled = true;
  }
  onionPerSec += availableItems[2].rate;
  chefs++;
  divHead = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec.toPrecision(2)}`;
  chef = `Buy a ${availableItems[2].name}! (Cost ${chefPrice.toPrecision(4)})<br/>Chefs: ${chefs}<br/>${availableItems[2].description}`;
  div.innerHTML = divHead;
  sideButton3.innerHTML = chef;
});

sideButton4.addEventListener("click", () => {
  counter -= witchPrice;
  witchPrice *= 1.15;
  if (counter < witchPrice) {
    sideButton4.disabled = true;
    sideButton5.disabled = true;

  }
  onionPerSec += availableItems[3].rate;
  witches++;
  divHead = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec.toPrecision(2)}`;
  witch = `Buy a ${availableItems[3].name}! (Cost ${witchPrice.toPrecision(4)})<br/>Witches: ${witches}<br/>${availableItems[3].description}`;
  div.innerHTML = divHead;
  sideButton4.innerHTML = witch;
});

sideButton5.addEventListener("click", () => {
  counter -= robotPrice;
  robotPrice *= 1.15;
  if (counter < robotPrice) {
    sideButton5.disabled = true;
  }
  onionPerSec += availableItems[4].rate;
  robots++;
  divHead = `The score is ${counter.toPrecision(4)}, with growth rate ${onionPerSec}`;
  robot = `Buy a ${availableItems[4].name}! (Cost ${robotPrice.toPrecision(4)})<br/>Robots: ${robots}<br/>${availableItems[4].description}`;
  div.innerHTML = divHead
  sideButton5.innerHTML = robot;
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