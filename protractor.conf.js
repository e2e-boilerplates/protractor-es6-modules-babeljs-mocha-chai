const directConnect = true;
const specs = ["spec/*.spec.js"];
const framework = "mocha";
const mochaOpts = {
  reporter: "dot",
};

const headed = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
  },
  framework,
  mochaOpts,
  onPrepare: () => {
    /* eslint-disable-next-line global-require */
    require("@babel/register");
  },
};

const headless = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-gpu"],
    },
  },
  framework,
  mochaOpts,
  onPrepare: () => {
    /* eslint-disable-next-line global-require */
    require("@babel/register");
  },
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
