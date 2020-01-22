# EmployeeSummary

====ABOUT====

Create a Node application, which allows the user to create a team of managers, engineers, and interns that outputs an HTML document. The application starts with app.js, and it features a series of questions regarding the different types of employees. Once an employee has been added, the user can choose to add another employee and repeat the questionnaire. After the questionnaire, each employee has an object stored inside an array. Then I run a render file, which takes the information from the employees, and prints it onto a template. I then use fs to write the template to a file, team.html, in the output folder. 

====ABOUT====

====Technology====

My application used the following technologies: HTML, CSS, JavaScript, Node.js, and a couple of Node packages. I used inquirer for the questionnaire, fs to read and write files, and I was going to use handlebars to achieve the template aspect of the application. Later, I found out that we were given source code which used the path package to help achieve the template functionality. I will now go into detail about how that source code functions.

====Technology====

====Source Code====

The source code file is aptly named htmlRenderer.js. The file starts by filtering the array of employees by each of their roles (i.e. "Manager", "Intern", and "Engineer"), and then performs a map on each of those filtered arrays. The map runs the function renderRole(role) on each of the roles. The function creates a template by first reading the corresponding role in the templates folder. Then we run replacePlaceholders for all of the placeholders in the file. 
The replacePlaceholders function is derived from the replace function utilizing the flags "gm". The "g" flag stands for global, and it replaces all the instances of the placeholder. The "m" flag stands for multiline, and it will span multiple lines if required. The replacePlaceholder function also utilizes the RegExp "{{ " + placeholder + " }}". We run a couple of replacePlaceholder calls in order to replace all the object properties we wish to implement. Then we return the template.
Once we have received the templates, we push that into our html array. We then run renderMain(html.join""); to perform a final render. Again, we create a template by using fs to read the main.html in our template folder. We then run replacePlaceholders one more time with the newly created template and the placeholder value of "team". Finally, we export our template.

====Source Code====


    