exports.config = {
  directConnect: true,
  specs: ["spec/*.spec.js"],
  capabilities: {
    browserName: "chrome"
  },
  framework: "mocha",
  mochaOpts: {
    reporter: "dot",
    slow: 3000
  },
  onPrepare: () => {
    /* eslint-disable-next-line global-require */
    require("@babel/register");
  }
};
