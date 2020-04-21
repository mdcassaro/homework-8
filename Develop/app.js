const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
 inquirer
 .prompt([
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
    
  ])
  .then(function(response){
      if(response.job.choices === "Engineer"){
          console.log ("Your employee is an Engineer")
      }else if(response.job.choices === "Manager"){
        console.log ("Your employee is a Manager")
        } else {
        console.log ("Your employee is an Engineer")
    }

  })


// and to create objects for each team member (using the correct classes as blueprints!)

function Employee (name, username, email, job){
    this.name = name;
    this.username = username;
    this.email = email;
    this.job = job
}
​
const newEmployee = new Employee(answers.name, answers.username, answers.email, answers.job)

Employee.id = function(){
    this.id++; 
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function generateHTML(answers) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{{ name }}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ ${answers.id} }}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ ${answers.email} }}">{{ email }}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/{{ ${answers.username} }}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
        </ul>
    </div>
</div>`

}


​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```


async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const html = generateHTML(answers);
  
      await writeFileAsync("index.html", html);
  
      console.log("Successfully wrote to index.html");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  