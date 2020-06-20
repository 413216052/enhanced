const path = require("path");
const assert = require("assert").strict;
const {
  runCommand,
  isInstalled,
  useYarn,
  traverseFile,
  resolveApp,
  getAppVersion,
} = require("../lib");

describe("runCommand test", function () {
  it("should resolve undefined", async function () {
    const resolve = await runCommand("node", ["-v"]);
    assert.deepEqual(resolve, undefined);
  });

  it("should reject", function () {
    assert.rejects(runCommand("webpack", ["-v"]));
  });
});

describe("isInstalled test", function () {
  it("Actual dependence on webpack, should be false", function () {
    assert.deepEqual(isInstalled("webpack"), false);
  });
  it("Actual dependence on mocha, should be true", function () {
    assert.deepEqual(isInstalled("mocha"), true);
  });
});

describe("useYarn test", function () {
  it("Yarn not actually used, should be false", function () {
    assert.deepEqual(useYarn(), false);
  });
});

describe("resolveApp test", function () {
  it("Get the correct app file directory", function () {
    assert.deepEqual(resolveApp("./test"), __dirname);
  });
});

describe("getAppVersion test", function () {
  it("Get the correct version", function () {
    assert.deepEqual(getAppVersion().length, 8);

    assert.deepEqual(getAppVersion(10).length, 10);
  });
});

describe("traverseFile test", function () {
  it("should have four files", function () {
    const files = [];
    traverseFile((filePath) => files.push(filePath))(
      path.join(__dirname, "./traverseFile")
    );
    assert.deepEqual(files.length, 4);
  });

  it("should reject", function () {
    assert.throws(traverseFile(() => {}));
  });
});
