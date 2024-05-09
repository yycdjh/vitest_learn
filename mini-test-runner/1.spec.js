import {
  test,
  run,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  describe,
} from "./core.js";

beforeAll(() => {
  console.log("beforeAll");
});

beforeEach(() => {
  console.log("beforeEach");
});

test("test", () => {
  // expect(1).toBe(1)
  console.log("test");
  expect(1).toBe(1);
});

test("test", () => {
  console.log("test2");
});

// test.only("test", () => {
//   console.log("test only");
// });

afterEach(() => {
  console.log("afterEach");
});

afterAll(() => {
  console.log("afterAll");
});

describe("describe", () => {
  test("test", () => {
    console.log("describe test");
  });
});

run();
