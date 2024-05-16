import { test, expect, describe } from "vitest";
import { Product } from "./Product";
import { User } from "./User";

describe("User", () => {
  test("buy", () => {
    // 准备测试数据 - 包含了无关的信息
    const user = new User("jd", 18, "5123@qq.com", "sz");
    const product = new Product("book", 18, "this is a good book");

    // 测试购买功能
    const result = user.buy(product);

    const expectResult = "User jd bought book";

    expect(result).toBe(expectResult);
  });

  test("buy", () => {
    // 准备测试数据 - 包含了无关的信息
    const user = new User("jd", 18, "5123@qq.com", "sz");
    const product = new Product("book", 18, "this is a good book");

    // 测试购买功能
    const result = user.buy(product);

    expect(result).toBe("User jd bought book");
  });

  test("v1 修改业务代码本身的逻辑", () => {
    // 准备测试数据 - 包含了无关的信息
    const user = new User("jd");
    const product = new Product("book");

    // 测试购买功能
    const result = user.buy(product);

    expect(result).toBe("User jd bought book");
  });

  test("v2 委托 工厂函数 来隐藏不需要关心的属性", () => {
    const user = createUser("jd");
    const product = createProduct("book");

    const result = user.buy(product);

    expect(result).toBe("User jd bought book");
  });

  test("v3 虚拟对象的方式", () => {
    const user = new User("jd");
    const product = { name: "book" } as Product;

    const result = user.buy(product);
    expect(result).toBe("User jd bought book");
  });
});

function createUser(name: string) {
  return new User(name, 18, "5123@qq.com", "sz");
}

function createProduct(name: string) {
  return new Product(name, 18, "this is a good book");
}
