import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Wow what a great Game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
