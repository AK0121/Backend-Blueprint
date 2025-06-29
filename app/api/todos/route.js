import { getTodos, addTodo, deleteTodo } from "@/db/todos";

export async function GET() {
  return Response.json(getTodos());
}

export async function POST(req) {
  const body = await req.json();

  const newTodo = addTodo(body.text);
  return Response.json({ message: "Todo added", newTodo });
}

export async function DELETE(req) {
  const body = await req.json();
  deleteTodo(body.id);
  return Response.json({ message: "Todo deleted", id: body.id });
}
