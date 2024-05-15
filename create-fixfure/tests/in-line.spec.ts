import { test, expect, describe } from "vitest";
import { addTodo, fighting, State, todos } from "../index";

describe("in-line", () => {
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
