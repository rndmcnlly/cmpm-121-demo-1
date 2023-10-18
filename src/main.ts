import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// Game name
const gameName = "Wow what a great Game";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let counter = 0;
// Slightly smaller title text
let divHead = `The score is ${counter}` ;
const div = document.createElement("div");
div.innerHTML = divHead;
app.append(div);

// Button to farm🧅ONIONS
const button = "🧅Click!"
const mainButton = document.createElement("button")
mainButton.innerHTML = button;
app.append(mainButton);


// Help from TA Nicholas Nolasco
mainButton.addEventListener("click", () => {
  counter++;
  divHead = `The score is ${counter}` ;
  div.innerHTML = divHead
});

//Auto clicking +1 
setInterval(function() {counter += 1}, 1000);
setInterval(function() {div.innerHTML = divHead}, 1000);
setInterval(function() {divHead = `The score is ${counter}`}, 1000);