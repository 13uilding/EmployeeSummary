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

function validateString(string){
    if (string === ""){
        console.log("\nPlease enter valid input.")
    }
    return string !== "";
}
function validateEmail(email){
    if (!email.includes("@")) {
        console.log("\nPlease enter an email with an '@'.")
    }
    return email.includes("@");
}

var questions = [
    {
        type: 'list',
        name: 'title',
        message: 'What type of employee would you like to add?',
        choices: [new inquirer.Separator(), 'Manager', new inquirer.Separator()],
    },
    {
        type: 'input',
        name: 'first_name',
        message: "What's their first name?",
        validate: validateString
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What's their last name?",
        validate: validateString
    },
    {
        type: 'input',
        name: 'email',
        message: "What's their email?",
        validate: validateEmail
    },
    {
        type: 'input',
        name: 'id',
        message: "What is their employee id?",
        validate: validateString
    },
    {
        type: 'input',
        name: 'github',
        message: "What's their GitHub handle?",
        validate: validateString,
        when: function( answers ) {
            return answers.title === "Engineer";
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the school they are currently attending?",
        validate: validateString,
        when: function( answers ) {
            return answers.title === "Intern";
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What's their office number?",
        validate: validateString,
        when: function( answers ) {
            return answers.title === "Manager";
        }
    },

    {
        type: 'confirm',
        name: 'anotherOne',
        message: 'Want to add another team member?',
        default: true
    },
];
//! Handle errors (like when someone doesn't enter something)
function ask() {
    inquirer.prompt(questions).then(answers => {
    let nameTitleCase = `${tools.titleCase(answers.first_name)} ${tools.titleCase(answers.last_name)}`
    answers.name = nameTitleCase;
    const {name, id, email} = answers;
    switch (answers.title) {
        case 'Manager':
                let manager = new Manager(name, id, email, answers.officeNumber)
                employees.push(manager);
                finishQuestionaire(answers);
            break;
        case 'Engineer':    
                let engineer = new Engineer(name, id, email, answers.github)
                employees.push(engineer);
                finishQuestionaire(answers)
            break;
        case 'Intern':
                let intern = new Intern(name, id, email , answers.school)
                employees.push(intern);
                finishQuestionaire(answers);
            break;
    }   
});
}

function finishQuestionaire(answers) {
    if (answers.anotherOne) {
        questions[0] = {
            type: 'list',
            name: 'title',
            message: 'What type of employee would you like to add?',
            choices: [new inquirer.Separator(), 'Manager', 'Engineer', 'Intern', new inquirer.Separator()],
        },
        delete answers.anotherOne
        ask();
      } else {
        delete answers.anotherOne
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

