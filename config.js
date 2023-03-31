const StyleDictionary = require("style-dictionary");

StyleDictionary.registerFormat({
  name: "css/classFormat",
  transitive: true,
  matcher: (token) => token.type === "typography",
  formatter: function (dictionary, config) {
    return `
  ${dictionary.allProperties
    .map((prop) => {
      return `
  .${prop.name} {
      font-family: ${prop.value.fontFamily},
      font-size: ${prop.value.fontSize},
      font-weight: ${prop.value.fontWeight},
      line-height: ${prop.value.lineHeight}
  };`;
    })
    .join("\n")}
  `;
  },
});

module.exports = {
  source: [`build/tokens.json`],
  platforms: {
    scss: {
      transformGroup: "scss",
      prefix: "gux",
      buildPath: "build/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
    less: {
      transformGroup: "less",
      prefix: "gux",
      buildPath: "build/less/",
      files: [
        {
          destination: "_variables.less",
          format: "less/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      prefix: "gux",
      buildPath: "build/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
        },
      ],
    },
    // typgrphy: {
    //   buildPath: "build/css/",
    //   files: [
    //     {
    //       destination: "typgrphy.css",
    //       format: "css/classFormat",
    //     },
    //   ],
    // },
  },
};
