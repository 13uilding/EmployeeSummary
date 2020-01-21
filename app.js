// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const tools = require("./lib/tools");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

// Mine
// const main = require("./templates/mainHTML");

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
];
var questionsEngineer = [
    {
        type: 'input',
        name: 'github',
        message: "What's their GitHub handle?"
    },
    {
        type: 'confirm',
        name: 'anotherOne',
        message: 'Want to add another team member?',
        default: true
    },
];
var questionsManager = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "What's their office number?"
    },
    {
        type: 'confirm',
        name: 'anotherOne',
        message: 'Want to add another team member?',
        default: true
    },
];
var questionsIntern = [
    {
        type: 'input',
        name: 'school',
        message: "What's school are they currently attending?"
    },
    {
        type: 'confirm',
        name: 'anotherOne',
        message: 'Want to add another team member?',
        default: true
    },
]
//! Handle errors (like when someone doesn't enter something)
function ask() {
    inquirer.prompt(questions).then(answers => {
    let name = `${tools.titleCase(answers.first_name)} ${tools.titleCase(answers.last_name)}`
    answers.name = name;
    delete answers.anotherOne
    switch (answers.title) {
        case 'Manager':
            inquirer.prompt(questionsManager).then(answersM => {
                answers.officeNumber = answersM.officeNumber;
                // name, id, email, officeNumber
                let {name, id, email, officeNumber} = answers;
                let manager = new Manager(name, id, email, officeNumber)
                employees.push(manager);
                finishQuestionaire(answersM);
            });
            break;
        case 'Engineer':
            inquirer.prompt(questionsEngineer).then(answersE => {
                answers.github = answersE.github;      
                let {name, id, email, github} = answers;      
                let engineer = new Engineer(name, id, email, github)
                employees.push(engineer);
                finishQuestionaire(answersE)
            });
            break;
        case 'Intern':
            inquirer.prompt(questionsIntern).then(answersI => {
                answers.school = answersI.school;
                let {name, id, email , school} = answers;
                let intern = new Intern(name, id, email , school)
                employees.push(intern);
                finishQuestionaire(answersI);
            });
            break;
    }
    
    
});
}

function finishQuestionaire(answers) {
    if (answers.anotherOne) {
        ask();
      } else {
        fs.writeFileSync(outputPath, render(employees), err => {
            if (err) throw err;
        });
      }
}

ask();


// Mine
// fs.writeFile("./output/output.html", main, err => {
//     if (err) throw err;
// })

