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

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

## Usage

You can only use his for:

    ${content.usage}

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

## License

This repo is licensed with:

        ${content.license};

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

## Github

Contact me of follow at:

    ${content.github}

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

## Contributors

Special thanks to:

    ${content.contributors}

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

## Tests

Best way tp test this is:

    ${content.tests}

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$








`

}

module.exports = ReadMeGenerate;