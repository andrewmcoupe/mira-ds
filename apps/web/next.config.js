const withTM = require("next-transpile-modules")(["@mira-ds/components"]);

module.exports = withTM({
  reactStrictMode: true,
});
