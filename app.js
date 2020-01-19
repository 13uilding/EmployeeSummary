const main = require("./templates/main");
const fs = require("fs");
const inquirer = require("inquirer");
var { from } = require('rxjs'); // Observable arrays

// console.log(main);
  
// // Pizza
// inquirer
//     .prompt([
//     {
//         type: 'checkbox',
//         message: 'Select toppings',
//         name: 'toppings',
//         choices: [
//         new inquirer.Separator(' = The Meats = '),
//         {
//             name: 'Pepperoni'
//         },
//         {
//             name: 'Ham'
//         },
//         {
//             name: 'Ground Meat'
//         },
//         {
//             name: 'Bacon'
//         },
//         new inquirer.Separator(' = The Cheeses = '),
//         {
//             name: 'Mozzarella',
//             checked: true
//         },
//         {
//             name: 'Cheddar'
//         },
//         {
//             name: 'Parmesan'
//         },
//         new inquirer.Separator(' = The usual ='),
//         {
//             name: 'Mushroom'
//         },
//         {
//             name: 'Tomato'
//         },
//         new inquirer.Separator(' = The extras = '),
//         {
//             name: 'Pineapple'
//         },
//         {
//             name: 'Olives',
//             disabled: 'out of stock'
//         },
//         {
//             name: 'Extra cheese'
//         }
//         ],
//         validate: function(answer) {
//         if (answer.length < 1) {
//             return 'You must choose at least one topping.';
//         }

//         return true;
//         }
//     }
//     ])
//     .then(answers => {
//     console.log(JSON.stringify(answers, null, '  '));
//     });
    



fs.writeFile("./output/output.html", main, err => {
    if (err) throw err;
})
//  cardsContainer = document.querySelector(".cardsContainer");


// RX Observable arrays

// var questions = [
//   {
//     type: 'input',
//     name: 'first_name',
//     message: "What's your first name"
//   },
//   {
//     type: 'input',
//     name: 'last_name',
//     message: "What's your last name",
//     default: function() {
//       return 'Doe';
//     }
//   },
//   {
//     type: 'input',
//     name: 'phone',
//     message: "What's your phone number",
//     validate: function(value) {
//       var pass = value.match(
//         /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//       );
//       if (pass) {
//         return true;
//       }

//       return 'Please enter a valid phone number';
//     }
//   }
// ];

// var observable = from(questions);

// inquirer.prompt(observable).ui.process.subscribe(
//   function(ans) {
//     console.log('Answer is: ', ans);
//   },
//   function(err) {
//     console.log('Error: ', err);
//   },
//   function() {
//     console.log('Completed');
//   }
// );

// Recursive definitely going to use
var output = [];

var questions = [
  {
    type: 'input',
    name: 'tvShow',
    message: "What's your favorite TV show?"
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true
  }
];

function ask() {
  inquirer.prompt(questions).then(answers => {
    output.push(answers.tvShow);
    if (answers.askAgain) {
      ask();
    } else {
      console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

ask();