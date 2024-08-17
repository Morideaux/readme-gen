// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## table of contents

  [Installation](#instalation)

  [Usage](usage)

  [Contributors](#contributors)

  [Test](test)

  [Questions](#questions)

  ## Instalation

  run the following to install:

  ${data.Instalation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.licence)}

  ### Contributing

  ${data.contributing}

  ### Test

  test are run with the following command:

  ${data.test}


  ## Questions

  Send an email to ${data.email} if you have any questions about the project.

  you can also find other projects at (https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
