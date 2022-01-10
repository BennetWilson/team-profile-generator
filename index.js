const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml.js');
// const renderHtml = require(`./utils/generateHtml`)
const Engineer = require(`./lib/Engineer`);
const Intern = require (`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const { data } = require('browserslist');
const createHttpProxyAgent = require('http-proxy-agent');

let team = [] 

function init () {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the manager's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the manager's employee ID?`,
            name: 'ID'
        },
        {
            type: 'input',
            message: `What is the manager's email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the manager's office number?`,
            name: 'number'
        },
        {
            type: `list`,
            message: `What would you like to do?`,
            choices:[`Add an Engineer?`, `Add an intern?`, `Create the team page?`],
            name: `role`
        }
    ])
    .then ((data) => {
    const manager = new Manager(data.name, data.ID, data.email, data.number)
    team.push(manager);
    htmlTop();
    managerFunction();
    if(data.role === 'Add an Engineer?'){
        newEngineer();
    } else if (data.role === 'Add an intern?') {
        newIntern();
    } else {
        lastQuestion()
    }
})

}


function teamMember () {
    inquirer.prompt ([
        {
            type: `list`,
            message: `What would you like to do?`,
            choices:[`Add an Engineer?`, `Add an intern?`, `Create the team page?`],
            name: `teamMember`
        }
       
    ])
    .then(function(answer) {
        switch (answer.teamMember){
            case `Add an Engineer?`:
                newEngineer();
                break;
            case `Add an intern?`:
                newIntern();
                break;
            default:(lastQuestion())
    }
    })
}

function newEngineer () {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the engineer's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the engineer's employee ID?`,
            name: 'ID'
        },
        {
            type: 'input',
            message: `What is the engineer's email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the engineer's GitHub?`,
            name: 'github'
        },
        {
            type: `list`,
            message: `What would you like to do?`,
            choices:[`Add an Engineer?`, `Add an intern?`, `Create the team page?`],
            name: `role`
        }
    ])
    .then ((data) => {
        const engineer = new Engineer(data.name, data.ID, data.email, data.number)
        team = []
        team.push(engineer);
        
        engineerFunction();
        if(data.role === 'Add an Engineer?'){
            newEngineer();
        } else if (data.role === 'Add an intern?') {
            newIntern();
        } else {
            lastQuestion();
        }
    })}

    function newIntern () {
        inquirer.prompt([
        {
            type: 'input',
            message: `What is the intern's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the intern's employee ID?`,
            name: 'ID'
        },
        {
            type: 'input',
            message: `Where did the intern go to school?`,
            name: 'school'
        },
        {
            type: `list`,
            message: `What would you like to do?`,
            choices:[`Add an Engineer?`, `Add an intern?`, `Create the team page?`],
            name: `role`
        }
       
    ])
    .then ((data) => {
        const intern = new Intern(data.name, data.ID, data.email, data.school)
        team = []
        team.push(intern);
        
        internFunction();
        if(data.role === 'Add an Engineer?'){
            newEngineer();
        } else if (data.role === 'Add an intern?') {
            newIntern();
        } else {
        lastQuestion();
        }
    })}
function lastQuestion () {
    inquirer.prompt([
    {
        type: 'list',
        message: 'Are you sure?',
        choices: ['Yes', 'No'],
        name: 'role'
    }
    ])
    .then ((data) => {
        if(data.role === 'Yes'){
            endingHtml();
        } else {
            teamMember();
        }
    })
}
        
  
function htmlTop(){
    const html =
    `
       <!doctype html>
      <html lang="en">
        <head>
          
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      
          <title>Team-Profile-Generator</title>
        </head>
        <body>`

fs.writeFile ("index.html", html, (err) =>
err ? console.err(err) : console.log(`success`))
}

function managerFunction () {
    let data1 = ''
    for (const i of team) {
      data1 =
         ` <div class="container">
              <div class="row justify-content-md-center">
              <div class="card col-sm-6 p-3 mb-2 bg-dark text-white" style="width: 10rem;">
              <img class="top"  src="mananger.png"  alt="Card image cap" width="50" height="60"/>
              <div class="card-body">
                        <h5 class="card-title">${i.getRole()}</h5>
                        <ul class ='card-text'>
                        <li>${i.getName()}</li>
                        <li>${i.getId()}</li>
                        <li>${i.getEmail()}</li>
                        <li>${findInfo(i)}</li>
                        </ul>
            
                      </div>
                    </div>
                
              </div>
            </div>`;
    fs.appendFile("index.html", data1, (err) =>
    err ? console.err(err) : console.log(`success`))
    }
}

function engineerFunction () {
let engineer1 = ''
for (const i of team) {
      engineer1 =
` <div class="container">
     <div class="row justify-content-md-center">
     <div class="card col-sm-6 p-3 mb-2 bg-dark text-white" style="width: 10rem;">
     <img class="top"  src="engineer.png"  alt="Card image cap" width="50" height="60"/>
     <div class="card-body">
               <h5 class="card-title">${i.getRole()}</h5>
               <ul class ='card-text'>
                   <li>${i.getName()}</li>
                   <li>${i.getId()}</li>
                   <li>${i.getEmail()}</li>
                   <li>${findInfo(i)}</li>
               </ul>
              
             </div>
           </div>
       
     </div>
   </div>`
   fs.appendFile("index.html", engineer1, (err) =>
   err ? console.err(err) : console.log(`success`))
}

}
function internFunction () {
    let intern1 = ''
    for (const i of team) {
          intern1 =
` <div class="container">
     <div class="row justify-content-md-center">
     <div class="card col-sm-6 p-3 mb-2 bg-dark text-white" style="width: 10rem;">
     <img class="top"  src="intern2.png"  alt="Card image cap" width="50" height="60"/>
     <div class="card-body">
               <h5 class="card-title">${i.getRole()}</h5>
               <ul class ='card-text'>
                   <li>${i.getName()}</li>
                   <li>${i.getId()}</li>
                   <li>${findInfo(i)}</li>
               </ul>
              
             </div>
           </div>
       
     </div>
   </div>`
   fs.appendFile("index.html", intern1, (err) =>
err ? console.err(err) : console.log(`success`))
}

}
function endingHtml () {    
      const end = 
         ` <!-- jQuery first, then Popper.js, then Bootstrap JS -->
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </body>
      </html>
      `
    
    fs.appendFile ("index.html", end, (err) =>
    err ? console.err(err) : console.log(`success`))

}


  function findInfo(employee) {
    if (employee.getRole() === `Engineer`) {
      return `Github: <a href = "https://www.github.com.${employee.getGitHub()}" target="_blank"> ${employee.getGitHub()}</a>`;
    } else if (employee.getRole() === `Intern`) {
      return `School: ${employee.getSchool()}`
  } else {
    return `Office Number: ${employee.getNumber()}`;
  }
  }



//   function buildPage(team){
   
//   }
    

init();

