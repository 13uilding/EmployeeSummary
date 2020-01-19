const main = require("./templates/main");
const fs = require("fs");

console.log(main);

fs.writeFile("./output/output.html", main, err => {
    if (err) throw err;
})
//  cardsContainer = document.querySelector(".cardsContainer");


