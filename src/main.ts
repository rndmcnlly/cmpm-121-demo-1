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

/*
const buttonName = "Click for cookies"

document.body.innerHTML = buttonName;

const header2 = document.createElement("h2");
header2.innerHTML = buttonName;
app.append(header2);
*/
//Click for cookies 🍪