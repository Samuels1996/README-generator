// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
licenseChoices = ['GPL', 'Apache', 'MIT']
function renderLicenseBadge(license) {
  if (license === licenseChoices[0]) {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (license === licenseChoices[1]) {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]'
  } else if (license === licenseChoices[2]) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseChoices[0]) {
    return `[${licenseArr[0]}](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === licenseChoices[1]) {
    return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licenseChoices[2]) {
    return `[${licenseArr[2]}](https://opensource.org/licenses/MIT)`
  } else {
    return ''
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseChoices[0]) {
    return `Read more about ${licenseArr[0]} here:`
  } else if (license === licenseChoices[1]) {
    return `Read more about ${licenseArr[1]} here:`
  } else if (license === licenseChoices[2]) {
    return `Read more about ${licenseArr[2]} here:`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Contributions](#contributions)
  * [Questions](#questions)

  ## License 
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Tests
  ${data.tests}
  
  ## Contributions
  ${data.contributions}
  
  ## Questions?
  
  ### Contact info:
  ${data.email}
  ${data.githubName}
`;
}

module.exports = generateMarkdown;
