const StyleDictionary = require("style-dictionary").extend("config.json");

StyleDictionary.registerTransform({
  name: "size/font/rem",
  type: "value",
  matcher: function (prop) {
    return prop.attributes.category === "font";
  },
  transformer: function (token) {
    // if category attribute is set to font then return rem values
    let unit = token.attributes.category === "font" ? "rem" : "px";
    return `${token.value}${unit}`;
  },
});

StyleDictionary.buildAllPlatforms();
