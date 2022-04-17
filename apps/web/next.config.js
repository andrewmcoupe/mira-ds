const withTM = require("next-transpile-modules")(["component-library"]);

module.exports = withTM({
  reactStrictMode: true,
});
