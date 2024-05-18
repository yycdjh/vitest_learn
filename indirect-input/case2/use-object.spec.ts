import { test, expect, describe, vi } from "vitest";
import { config } from "./config";
import { tellAge } from "./use-object";

describe("use object", () => {
  test("allow", () => {
    config.allowTellAge = true;

    const age = tellAge();

    expect(age).toBe(18);
  });
});
