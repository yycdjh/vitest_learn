import { describe, test, expect } from "vitest";

describe("describe", () => {
  test("test", () => {
    expect(1).toBe(1);
  });
});

describe.skip("describe", () => {
  test("test", () => {
    expect(1).toBe(1);
  });
});

describe.only("describe", () => {
  test("test", () => {
    expect(1).toBe(1);
  });
});

describe.todo("describe", () => {
  console.log("todo describe");
});
