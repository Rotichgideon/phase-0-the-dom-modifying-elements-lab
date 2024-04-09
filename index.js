// Write your code here!

const elements = document.getElementById("main");
const newHeader = document.createElement("h1");

elements.remove();
newHeader.textContent = "YOUR-NAME is the champion";
newHeader.setAttribute('id', 'victory');