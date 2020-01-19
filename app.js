// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

// Mine
const main = require("./templates/main");
const tools = require("./lib/tools");

// Recursive definitely going to use
const output = [];

var questions = [
    {
        type: 'list',
        name: 'title',
        message: 'What type of employee would you like to add?',
        choices: [new inquirer.Separator(), 'Manager', 'Engineer', 'Intern', new inquirer.Separator()],
    },
    {
        type: 'input',
        name: 'first_name',
        message: "What's their first name?"
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What's their last name?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What's their email?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is their employee id?"
    },
    {
        type: 'confirm',
        name: 'anotherOne',
        message: 'Want to add another team member?',
        default: true
    }
];

//! Handle errors (like when someone doesn't enter something)
function ask() {
    inquirer.prompt(questions).then(answers => {
    let another = answers.anotherOne;
    let name = `${tools.titleCase(answers.first_name)} ${tools.titleCase(answers.last_name)}`
    answers.name = name;
    delete answers.anotherOne
    //   console.log(answers);
      output.push(answers);
    if (another) {
      ask();
    } else {
      console.log(output);
    }
  });
}


function init(){
    ask();
}

init();


// Build out Employee.js, Engineer.js, Intern.js, and Manager.js in the lib folder. With exception to htmlRenderer.js (provided), the files in this folder will all be classes and will be used as blueprints for generating specific types of employee objects. Refer to the instructions for more information as to the specific properties and methods each class should contain. I recommend building these classes out first and testing them to verify they generate objects of the correct structure. In order for the code provided in htmlRenderer.js to work, the objects generated must strictly match the structure indicated in the assignment instructions.
//!! Once your code is functioning, spend some time studying htmlRenderer.js inside of the lib folder to understand how it works. After you have an understanding of how the code works and interfaces with both the HTML templates and app.js, write up a paragraph explaining your findings. Please include this explanation as a comment in BCS when you submit your assignment.
// Run your automated tests frequently using the command npm test. Use the results of the tests to guide you as you build the functionality out bit-by-bit.


//!! inquirer gather information and create objects for each team member (using the correct classes as blueprints!)
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.


// After the user input, call the `render` function, pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

// After you have your html write it to a file named `team.html` in `output` folder. You can use the variable `outputPath` above target this location.


// Mine
// fs.writeFile("./output/output.html", main, err => {
//     if (err) throw err;
// })

