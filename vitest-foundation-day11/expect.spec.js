import { expect, test } from "vitest";

test("toBe", () => {
  expect(1).toBe(1);
});

test("toEqual", () => {
  const user = {
    name: "jd",
  };

  expect(user).toEqual({ name: "jd" });
});

test("toBeTruthy", () => {
  expect(1).toBeTruthy();
  expect(true).toBeTruthy();
  expect("123").toBeTruthy();
});

test("toBeFalsy", () => {
  expect(0).toBeFalsy();
  expect(false).toBeFalsy();
  expect("").toBeFalsy();
});

test("toContain", () => {
  const item1 = { name: "jd" };
  const item2 = { name: "jd" };
  const item3 = { name: "tom" };

  const list = [item1, item2];

  expect(list).toContain(item1);

  expect("<div>1234</div>").toContain("1234");
});

test("toThrow", () => {
  function getName(name) {
    if (typeof name !== "string") {
      throw new Error("name is not string");
    }
    return "hei";
  }

  expect(() => {
    getName(123);
  }).toThrow("name is not string");
});
