
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache 2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "GNU":
      return "[![License: GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch(license) {
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    default:
      return "";
  }
}


function renderLinkedLicenseBadge(license) {
  switch(license) {
    case "No License":
      return "";
    default:
      return `${renderLicenseBadge(license)}${renderLicenseLink(license)} \n\n`;
  }
}


function renderLicenseSection(license) {
  switch(license) {
    case "No License":
      return "";
    default:
      return `## License \n`+
        `Click the badge for more information about the license. \n\n`+
        `${renderLinkedLicenseBadge(license)}`;
  }
}



function renderTitle(title) { 
  return `# ${title} \n`;
}

function renderDescription(description) { 
  return `## Description \n`+
    `${description} \n`;
}

function renderTableOfContents(license) { 
  
  switch (license) {
    case "No License":
      licenseTemplate = "";
      break;
    default:
      licenseTemplate = `* [License](#license) \n`;
  }

  return `## Table of Contents \n`+
    `* [Installation](#installation) \n`+
    `* [Usage](#usage) \n`+
    licenseTemplate +
    `* [Contributing](#contributing) \n`+
    `* [Tests](#tests) \n`+
    `* [Questions](#questions) \n`;
}

function renderInstallation(install) { 
  return `## Installation \n`+
    `${install} \n`;
}

function renderUsage(usage) { 
  return `## Usage \n`+
    `${usage} \n`;
}

function renderContributing(contribute) { 
  return `## Contributing \n`+
    `${contribute} \n`;
}

function renderTests(tests) { 
  return `## Tests \n`+
    `${tests} \n`;
}

function renderQuestions(username, email) { 
  return `## Questions \n`+
    `${username} [GitHub Profile](https://github.com/${username}) \n\n`+
    `Feel free to email me at ${email} \n`;
}

function generateMarkdown(data) {
  return `${renderTitle(data.title)} \n`+
    `${renderLinkedLicenseBadge(data.license)}`+
    `${renderDescription(data.description)} \n`+
    `${renderTableOfContents(data.license)} \n`+
    `${renderInstallation(data.installation)} \n`+
    `${renderUsage(data.usage)} \n`+
    `${renderLicenseSection(data.license)}`+
    `${renderContributing(data.contribute)} \n`+
    `${renderTests(data.tests)} \n`+
    `${renderQuestions(data.username, data.email)}`;
}

module.exports = generateMarkdown;