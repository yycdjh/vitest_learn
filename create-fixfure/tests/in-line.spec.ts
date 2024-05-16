import { test, expect, describe, beforeEach } from "vitest";
import { addTodo, fighting, State, todos, reset } from "../index";

describe("in-line", () => {
  beforeEach(() => {
    // 重置todos
    reset();
  });
  test("normal addTodo", () => {
    const todo = {
      title: "test",
      content: "test",
      state: State.avtive,
    };
    addTodo(todo);
    expect(todos[0]).toEqual(todo);
  });

  test("addTodo with top command", () => {
    const todo = {
      title: "test",
      content: "test",
      state: State.avtive,
    };

    addTodo(todo);

    expect(todos[0].title).toEqual("test");
  });
});
