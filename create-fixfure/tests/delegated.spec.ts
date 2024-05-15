import { test, expect, describe } from "vitest";
import { addTodo, fighting, State, todos } from "../index";

function createTodo(title: string, content: string = "default") {
  return {
    title,
    content,
    state: State.avtive,
  };
}

describe("delegated", () => {
  test.skip("normal addTodo", () => {
    const todo = createTodo("test");
    addTodo(todo);
    expect(todos[0]).toEqual(todo);
  });

  test("normal addTodo", () => {
    const todo = createTodo("吃饭");

    addTodo(todo);

    expect(todos[0].title).toEqual("吃饭");
  });
});
