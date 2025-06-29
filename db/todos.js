export let todos = [];

export function addTodo(text) {
  const newTodo = { id: Date.now(), text };
  todos.push(newTodo);
  return newTodo;
}

export function deleteTodo(id) {
  todos = todos.filter((todo) => id !== todo.id);
}

export function getTodos() {
  return todos;
}
