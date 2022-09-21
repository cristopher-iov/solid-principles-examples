import { TodoType } from "@/types/todo";

export default async function fetcherFromMock(): Promise<TodoType[]> {
  const todos = [{ id: 1, userId: 1, completed: false, title: "Task 1" }];

  console.log("Fetching from mock");

  return todos;
}
