const tests = [];
const onlyTests = [];
const beforeAlls = [];
const beforeEachs = [];
const afterEachs = [];
const afterAlls = [];
const describes = [];
export function test(name, callback) {
  tests.push({ name, callback });
}
test.only = function (name, callback) {
  onlyTests.push({ name, callback });
};

export function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      } else {
        console.log("pass");
      }
    },
  };
}

export function run() {
  beforeAlls.forEach((callback) => callback());

  const expxcutiveTests = onlyTests.length > 0 ? onlyTests : tests;
  for (const test of expxcutiveTests) {
    beforeEachs.forEach((callback) => callback());
    try {
      test.callback();
      console.log(`ok: ${test.name}`);
    } catch (error) {
      console.log(error);
    }
    afterEachs.forEach((callback) => callback());
  }

  afterAlls.forEach((callback) => callback());
}

export function beforeAll(callback) {
  beforeAlls.push(callback);
}

export function beforeEach(callback) {
  beforeEachs.push(callback);
}

export function afterEach(callback) {
  afterEachs.push(callback);
}

export function afterAll(callback) {
  afterAlls.push(callback);
}

export function describe(name, callback) {
  describes.push({ name, callback });
  callback();
}
