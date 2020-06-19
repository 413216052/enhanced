const path = require("path");
const assert = require("assert").strict;
const {
  runCommand,
  isInstalled,
  isYarn,
  traverseFile,
  resolveApp,
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

describe("isInstalled test", function () {
  it("实际未依赖 webpack, 应该为 false", function () {
    assert.deepEqual(isInstalled("webpack"), false);
  });
  it("实际依赖 mocha, 应该为 true", function () {
    assert.deepEqual(isInstalled("mocha"), true);
  });
});

describe("isYarn test", function () {
  it("实际未使用 yarn, 应该为 false", function () {
    assert.deepEqual(isYarn(), false);
  });
});

describe("resolveApp test", function () {
  it("路径应该一致", function () {
    assert.deepEqual(resolveApp('./test'), __dirname);
  });
});
