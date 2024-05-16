interface Todo {
  title: string;
  content: string;
  state: State;
}

export enum State {
  avtive,
  completed,
  removed,
}

export const todos: Todo[] = [];
export function addTodo(todo: Todo) {
  todos.push(todo);
}

export function fighting() {}

export function reset() {
  todos.splice(0);
}
