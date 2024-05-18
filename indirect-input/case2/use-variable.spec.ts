import { test, expect, describe, vi } from "vitest";
import { tellName } from "./use-variable";
import { name, gold } from "./config";

vi.mock("./config", async (importOriginal) => {
  return {
    ...((await importOriginal()) as any),
    name: "jd1",
  };
});

describe("use variable", () => {
  test("use variable", () => {
    console.log(gold);
    const name = tellName();

    expect(name).toBe("jd1- hello world");
  });
});
