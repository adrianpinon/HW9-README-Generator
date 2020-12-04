// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ![GitHub license]

  ##Desciption
  ${data.Description}

  ## Table of Content
  *[Installation](#installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Contribution](#Contribution Guidelines)
  *[Test](#Test)
  *[Questions](#${data.Email})

  ##Installation
  To install the proper data dependencies, Please follow ${data.Installation}.

  ##Usage
  ${data.Usage}

  ##License
  This project is license under the following ${data.License}.

  ## Contributation Guidelines
  ${data.Contribution_Guidelines}
`;
}

module.exports = generateMarkdown;
