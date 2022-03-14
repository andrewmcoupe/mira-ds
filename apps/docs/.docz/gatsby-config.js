const { mergeWith } = require("docz-utils");
const fs = require("fs-extra");

let custom = {};
const hasGatsbyConfig = fs.existsSync("./gatsby-config.custom.js");

if (hasGatsbyConfig) {
  try {
    custom = require("./gatsby-config.custom");
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err)
    );
  }
}

const config = {
  pathPrefix: "/",

  siteMetadata: {
    title: "Docs",
    description: "My awesome app using docz",
  },
  plugins: [
    {
      resolve: "gatsby-theme-docz",
      options: {
        themeConfig: {},
        src: "./",
        gatsbyRoot: null,
        themesDir: "src",
        mdxExtensions: [".md", ".mdx"],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        "props-parser": true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        "open-browser": null,
        root: "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/.docz",
        base: "/",
        source: "./",
        "gatsby-root": null,
        files: "**/*.{md,markdown,mdx}",
        public: "/public",
        dest: ".docz/dist",
        d: ".docz/dist",
        editBranch: "master",
        eb: "master",
        "edit-branch": "master",
        config: "",
        title: "Docs",
        description: "My awesome app using docz",
        host: "localhost",
        port: 3001,
        p: 3000,
        separator: "-",
        paths: {
          root: "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs",
          templates:
            "/Users/andycoupe/Workspaces/personal/mira-ds/node_modules/docz-core/dist/templates",
          docz: "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/.docz",
          cache:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/.docz/.cache",
          app: "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/.docz/app",
          appPackageJson:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/package.json",
          appTsConfig:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/tsconfig.json",
          gatsbyConfig:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/gatsby-config.js",
          gatsbyBrowser:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/gatsby-browser.js",
          gatsbyNode:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/gatsby-node.js",
          gatsbySSR:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/gatsby-ssr.js",
          importsJs:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/.docz/app/imports.js",
          rootJs:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/.docz/app/root.jsx",
          indexJs:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/.docz/app/index.jsx",
          indexHtml:
            "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/.docz/app/index.html",
          db: "/Users/andycoupe/Workspaces/personal/mira-ds/apps/docs/.docz/app/db.json",
        },
      },
    },
  ],
};

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
});

module.exports = merge(config, custom);
