const capitalize = require("lodash/capitalize");
const camelCase = require("lodash/camelCase");

const workspaces = ["packages"];

module.exports = function (plop) {
  plop.setHelper("capitalize", (text) => {
    return capitalize(camelCase(text));
  });

  plop.setGenerator("component", {
    description: "Component generator",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Enter component name:",
      },
      {
        type: "input",
        name: "description",
        message: "The description of this component:",
      },
      {
        type: "list",
        name: "outDir",
        message: "where should this component live?",
        default: "packages",
        choices: workspaces,
      },
    ],
    actions(answers) {
      const actions = [];
      if (!answers) return actions;

      const { componentName, description, outDir } = answers;

      actions.push({
        type: "addMany",
        templateFiles: "plop-templates/component/**",
        destination: `${outDir}/{{dashCase componentName}}`,
        base: "plop-templates/component/",
        data: { description, componentName },
        abortOnFail: true,
      });

      return actions;
    },
  });
};
