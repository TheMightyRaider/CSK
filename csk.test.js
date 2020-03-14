const csk = require("./csk");

describe("Testing isCamelCase", () => {
  test("should return true for happy cases", () => {
    expect(csk.isCamelCase("thisIsCamelCase")).toBe(true);
    expect(csk.isCamelCase("shouldbetrue")).toBe(true);
  });

  test("should return false for sad cases", () => {
    expect(csk.isCamelCase("01thisIsCamel")).toBe(false);
    expect(csk.isCamelCase("this_is_not_camel_case")).toBe(false);
    expect(csk.isCamelCase("this01")).toBe(false);
    expect(csk.isCamelCase("this01@#^")).toBe(false);
    expect(csk.isCamelCase("3")).toBe(false);
    expect(csk.isCamelCase(3)).toBe(false);
  });
});
