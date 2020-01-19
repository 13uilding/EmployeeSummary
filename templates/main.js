const handlebars = require("handlebars");
const testing = require("./testing")
console.log("hi");
var source = 
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Employee Summary</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="../app.js"></script>
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      {{{templates.testing}}}
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  </body>
</html>
`
var template = handlebars.compile(source);
// console.log(testing)
 
var data = { 
    "templates": {"testing": testing},
};
var result = template(data);

// console.log(result)

module.exports = result;