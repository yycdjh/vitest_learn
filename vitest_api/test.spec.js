import { test, expect } from "vitest";

test("test", () => {
  expect(1).toBe(1);
});

test.skip("skip test", () => {
  console.log("skip");
});

test.only("only test", () => {
  //// Only this test (and others marked with only) are run
  console.log("only");
});
// An entry will be shown in the report for this test
test.todo("unimplemented test");
