const { title } = require("process");

function ReadMeGenerate(content) {
return `# ${content.title}

## Description: ${content.description}

## Table of Contents

1. [Install] (#install)
2. [Usage] (#usage)
3. [License] (#license)
4. [Github] (#github)
5. [Contributors] (#contributors)
6. [Tests] (#tests)

## Install 

Do exactly this:

   ${content.install}

______________________________________________

## Usage

You can only use this for:

    ${content.usage}

______________________________________________

## License

This repo is licensed with:

        ${content.license};

______________________________________________

## Github

Contact me or follow at:

    ${content.github}

______________________________________________

## Contributors

Special thanks to:

    ${content.contributors}

______________________________________________

## Tests

Best way to test this is:

    ${content.tests}

______________________________________________

`

}

module.exports = ReadMeGenerate;