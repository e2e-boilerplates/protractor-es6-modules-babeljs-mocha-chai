const { expect } = require("chai");

describe("Sandbox", () => {
  before(() => {
    browser.get("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    expect(title).to.equal("Sandbox");
    header.getText().then(h => {
      expect(h).to.equal("Sandbox");
    });
  });
});
