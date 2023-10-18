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
let divHead = `Wow what a great fun ${counter}` ;
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
  divHead = `Wow what a great fun ${counter}` ;
  div.innerHTML = divHead
});

