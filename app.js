
const testing = require("./templates/testing.js");

const cardsContainer = document.querySelector(".cardsContainer");

let testingP = document.createElement("div");
// testingP.classList("card");
testingP.innerHTML = testing.result;
cardsContainer.append(testingP);
