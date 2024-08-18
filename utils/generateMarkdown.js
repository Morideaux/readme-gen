// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == null) {
    return "";
  }
  return `![GitHub License](https://img.shields.io/badge/license-${license.replace(
    " ",
    "_"
  )}--blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == null) {
    return "";
  }
  return `\n* [License](#license)\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == null) {
    return "";
  }
  return ` License
   
   The license for this project is the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge}

  ## Description

  ${data.description}

  ## table of contents

  [Installation](#instalation)

  [Usage](usage)

  ${renderLicenseLink(data.license)}

  [Contributors](#contributors)

  [Test](test)

  [Questions](#questions)

  ## Instalation

  run the following to install:

  ${data.instalation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ### Contributing

  ${data.contributing}


  ## license

  ${renderLicenseLink}${data.license}

  ### Test

  test are run with the following command:

  ${data.test}


  ## Questions

  Send an email to ${data.email} if you have any questions about the project.

  you can also find other projects at (https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
