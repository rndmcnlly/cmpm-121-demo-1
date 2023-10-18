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

// Slightly smaller title text
let divHead = `The score is ${counter}, with growth rate ${onionPerSec}` ;
const div = document.createElement("div");
div.innerHTML = divHead;
app.append(div);

// Button to farm🧅ONIONS
const button = "🧅Click!"
const mainButton = document.createElement("button")
mainButton.innerHTML = button;
app.append(mainButton);

// Button to increase growth rate of farming onions
let knife = `🔪Slice!\n(Cost 10) Knives: ${knives}`;
const sideButton = document.createElement("button");
sideButton.innerHTML = knife;
app.append(sideButton);

setInterval(() => {
  if (counter >= 10) {
    sideButton.disabled = false;
  } else {
    sideButton.disabled = true;
  }
});

// Help from TA Nicholas Nolasco
mainButton.addEventListener("click", () => {
  counter++;
  divHead = `The score is ${counter}, with growth rate ${onionPerSec}`;
  div.innerHTML = divHead
});

sideButton.addEventListener("click", () => {
  counter -= 10;
  onionPerSec += 0.2;
  knives++;
  divHead = `The score is ${counter}, with growth rate ${onionPerSec}`;
  knife = `🔪Slice!\n(Cost 10) Knives: ${knives}`;
  div.innerHTML = divHead
  sideButton.innerHTML = knife;
});

autoOnionClicking();

function autoOnionClicking() {
  let prevFrameTime = performance.now();
  window.requestAnimationFrame(checkCounterUpdate);
  function checkCounterUpdate() {
    const milPerFrame = 1000 / onionPerSec;
    if (performance.now() - prevFrameTime > milPerFrame) {
      counter += 1;
      // div.textContent = `The score is ${counter.toPrecision(2)}` // if precise wanted
      div.textContent = `The score is ${counter}, with growth rate ${onionPerSec}`
      prevFrameTime = performance.now();
    } 
    window.requestAnimationFrame(checkCounterUpdate);
  }
}