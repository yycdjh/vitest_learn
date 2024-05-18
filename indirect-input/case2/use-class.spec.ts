import { test, expect, describe, vi } from "vitest";
import { doubleUserAge } from "./use-class";

vi.mock("./User", () => {
  return {
    User: class {
      age = 2;
    },
  };
});

describe("use class", () => {
  test("test", () => {
    const age = doubleUserAge();

    expect(age).toBe(4);
  });
});
