function generateMarkdown(data) {
  return`
# ${data.Title}
(https://github.com/${data.Username}/${data.Title})
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following dependencies must be installed: ${data.Installation}
# Usage
​This application is used for ${data.Usage}
# License
This project is under the ${data.License} license.
# Contributing
​Contributors: ${data.Contributor}
# Tests
To run, use: ${data.Test}
# Questions
If you have any questions about the app, contact ${data.Username} at ${data.Email}.
`
}

module.exports = generateMarkdown;