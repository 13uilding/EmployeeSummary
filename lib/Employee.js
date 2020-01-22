// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

// Build out Employee.js, Engineer.js, Intern.js, and Manager.js in the lib folder. With exception to htmlRenderer.js (provided), the files in this folder will all be classes and will be used as blueprints for generating specific types of employee objects. Refer to the instructions for more information as to the specific properties and methods each class should contain. I recommend building these classes out first and testing them to verify they generate objects of the correct structure. In order for the code provided in htmlRenderer.js to work, the objects generated must strictly match the structure indicated in the assignment instructions.
//!! Once your code is functioning, spend some time studying htmlRenderer.js inside of the lib folder to understand how it works. After you have an understanding of how the code works and interfaces with both the HTML templates and app.js, write up a paragraph explaining your findings. Please include this explanation as a comment in BCS when you submit your assignment.

class Employee {
    constructor(name, id, email, title) {// Get it to work with hers first and then do mine
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;

var test = new Employee();
