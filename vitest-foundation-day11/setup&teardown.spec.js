import {
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  describe,
  expect,
  test,
} from "vitest";

// 执行顺序: beforeAll -> beforeEach -> test -> afterEach -> afterAll
beforeAll(() => {
  console.log("beforeAll");
  return () => {
    console.log("afterAll");
  };
});

beforeEach(() => {
  console.log("beforeEach");
});

test("test", () => {
  console.log("test");
  expect(1).toBe(1); // 通过 test
});

afterEach(() => {
  console.log("afterEach");
});

// afterAll(() => {
//   console.log("afterAll");
// });
