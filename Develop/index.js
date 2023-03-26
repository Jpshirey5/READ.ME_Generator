// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                return 'Enter a title for your project';
            }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                return 'Enter a description for your project';
            }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                return 'Enter the installation instructions for your project';
            }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                return 'Enter the usage information for your project';
            }
        },
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributing guidelines for your project?',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                return 'Enter the contributing guidelines for your project';
            }
        },
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                return 'Enter the test instructions for your project';
            }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use for your project?',
        choices: ['MIT', 'GNU GPL v3', 'Apache 2.0', 'BSD 3-Clause', 'ISC', 'Unlicense'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                return 'Enter your email address';
            }
        },
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                return 'Enter your Github link';
            }
        },
    },
];

function generateREADME(answers) {

    const licenseBadge = `![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)`

    const readmeTemplate = `
# ${answers.title} ${licenseBadge}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions, please contact me at ${answers.email} or visit my [GitHub profile](https://github.com/${answers.github}).
`
    return readmeTemplate;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Success! Your README file has been generated.');
    });
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then(answers => {
      const readmeContent = generateREADME(answers);
      writeToFile('generated_README.md', readmeContent);
    });
  }
  
  // Function call to initialize app
  init();
  
  
  
  
  
  
