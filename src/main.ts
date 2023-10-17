import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Wow what a great Game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const divHead = "Wow what a great fun";

const div = document.createElement("div");
div.innerHTML = divHead;
app.append(div);

const button = "🧅Click!"
const mainButton = document.createElement("button")
mainButton.innerHTML = button;
app.append(mainButton);

const abelEvent = new Event("abelEvent", {});

// Help from TA Nicholas Nolasco
mainButton.addEventListener("click", () => {
  //let lines = [];
  mainButton.dispatchEvent(abelEvent);
});

/*mainButton.addEventListener("abelEvent", () => {
  console.log("Abel says hello!);
});*/

/*
const buttonName = "Click for cookies"

document.body.innerHTML = buttonName;

const header2 = document.createElement("h2");
header2.innerHTML = buttonName;
app.append(header2);
*/
//Click for cookies 🍪
// 🧅ONIONS