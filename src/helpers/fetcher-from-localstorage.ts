const TODOS_KEY = "todos";

export default async function fetcherFromLocalStorage() {
  const todos = localStorage.getItem(TODOS_KEY);

  console.log("Fetching from localStorage");

  return todos ? JSON.parse(todos) : [];
}
