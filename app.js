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
const main = require("./templates/mainHTML");
const tools = require("./lib/tools");

// Recursive definitely going to use
const employees = [];

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
var questionsEngineer = [
    {
        type: 'input',
        name: 'github',
        message: "What's their GitHub handle?"
    },
];
var questionsManager = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "What's their office number?"
    },
];
var questionsIntern = [
    {
        type: 'input',
        name: 'school',
        message: "What's school are they currently attending?"
    },
]
//! Handle errors (like when someone doesn't enter something)
function ask() {
    inquirer.prompt(questions).then(answers => {
    let another = answers.anotherOne;
    let name = `${tools.titleCase(answers.first_name)} ${tools.titleCase(answers.last_name)}`
    answers.name = name;
    delete answers.anotherOne
    switch (answers.title) {
        case 'Manager':
            console.log('Manager');
            break;
        case 'Engineer':
            console.log("Engineer");
            break;
        case 'Intern':
            console.log("Intern");
            break;
    }
    //   console.log(answers);
      employees.push(answers);
    if (another) {
      ask();
    } else {
      console.log(employees);
      
    }
  });
}


function init(){
    ask();
}

init();



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

