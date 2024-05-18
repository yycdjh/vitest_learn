import { test, expect, describe, vi, beforeEach } from "vitest";
import { doubleUserAge, fetchDoubleUserAge } from "./index";
import { userAge, fetchUserAge } from "./user";

vi.mock("./user", () => {
  return {
    userAge: () => 2,
  };
});
describe("间接input", () => {
  test("first", async () => {
    const r = doubleUserAge();
    console.log(r);
    expect(r).toBe(4);
  });
});
