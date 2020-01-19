const handlebars = require("handlebars");

var source = 
`<div class="test">
    <div class="columns">
    <div class="column">1</div>
    <div class="column">2</div>
    <div class="column">3</div>
    <div class="column">4</div>
    <div class="column">5</div>
    </div>
    <button class="button">
    Button
    </button>

    <button class="button is-primary">
    Primary button
    </button>

    <button class="button is-large">
    Large button
    </button>

    <button class="button is-loading">
    Loading button
    </button>
</div>`;
var template = handlebars.compile(source);
 
var data = { 

};
var result = template(data);

// console.log(result)

module.exports = result;