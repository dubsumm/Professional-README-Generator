const inquirer = require('inquirer');
const fs = require('fs');
const ReadMeGenerate = require('./assets/ReadMeGenerate')
const path = require('path');
//app questions for readme
const questions  = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title for your README.md?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description for this project: ',
      },
    {
        type: 'input',
        name: 'install',
        message: 'Which cmd installs the correct dependencies? ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Project usage...?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of licenses should the project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username? ',
        filter(val) {
            return `https://github.com/${val}`;
    }
    },
      {
        type: 'input',
        name: 'contributors',
        message: 'Input Contributors:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Input tests:',
      },
  ]

  function writeToFile(fileName, content) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),content)
  }
//run inquirer func
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    writeToFile('README.md', ReadMeGenerate({...answers}))
  })
}

init();