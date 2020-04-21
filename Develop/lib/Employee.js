// TODO: Write code to define and export the Employee class

//this is the main prototype all will share

const inquirer = require("inquirer");


 inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Employees name?"
      },
      {
        type: "input",
        name: "username",
        message: "What is your employee's GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your employee's email address?"
      },
      {
        type: "checkbox",
        name: "job",
        message: "What is your job?",
        choices:[
            "Engineer",
            "Manager",
            "Intern"

        ]
      },
      
    ]);
  

  module.exports = Employee;