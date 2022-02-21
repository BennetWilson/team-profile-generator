# Team Profile Generator JavaScript & Node
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/BennetWilson/team-profile-generator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/BennetWilson/team-profile-generator?style=flat&logo=appveyor)
  

  
  
  ## Description 
  
I created  a team profile generator in JS and Node that took in responses from questions I designed in Inquirer, and output an HTMl file with your team on it.

  All of my main functions ended up being in index.js, although I had initially started with two separate files so that it would not become unwieldy. It all ended up in one file.

  I created a JS file for each of my classes. Engineer, Intern and Manager all extend from the parent named employee.

  Each section of the HTMl is split up into a different function in index.js, so that I could create a fully functional document while still having the cards be modular.

  There is a function to add the top section of the HTML, a function for each roles' card and finally a function to add the ending portion of the HTMl to the file.

  While creating the program, I ran into issues with the HTMl document having duplicate cards for some positions.

  I fixed that issue by clearing the array that I was pushing all of the data to after each function had finished and had appended the HTML.

  After fixing that issue and making sure my program ran reliably, I lightly styled the page using bootstrap.

  I then created 15 tests. After I ran the tests and some failed, I fixed the issues and now have 15 working tests.

  I created a gitignore file and populated it with my node_modules.


  ## Images
![deployedapplication](https://user-images.githubusercontent.com/90366376/148845336-876352de-e3ac-47d3-9188-b0153d687e20.PNG)

![testpass](https://user-images.githubusercontent.com/90366376/148845302-150247d5-f4c0-405b-a2ba-8b49b67fdc10.PNG)


  ## Links
  [A link to my deployed application](https://bennetwilson.github.io/team-profile-generator/)
  [A link to my GitHub repository](https://github.com/BennetWilson/team-profile-generator)

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  
  ## Installation
  
  You will need a package.json, Inquirer and Jest if you plan to run tests.

  First, open the terminal in VScode. Type in 'npm init -y.'

  Then, type in 'npm install inquirer'. This will install Inquirer.

  If you do not wish to run tests, you have everything needed to create a team page.

  If you do wish to run tests, type 'npm install jest' in the terminal.

  Next, modify "tests" in package.json to say "scripts": {
    "test": "jest"
  },

  Now you're all set.


  
  ## Usage 
  
  Free to use. Just install follow the installation section and create a team on HTML!
  
  ## Contributing

 If you wish to contribute, please email me at the email listed below. 
  
  
  
  
  ## Tests
  
 To run tests, you will need to follow the installation section above.

 Once done, open the terminal. Once open, type 'npm run test' and the tests will run.
  
  
  
  ## License

No License
  
  
  
  
  ## Questions?
 
  GitHub: [@BennetWilson]
  
  Email: bennetwilson@gmail.com
  
