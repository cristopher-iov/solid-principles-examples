import useSWR from "swr";

import { TodoType } from "@/types/todo";

import { TODOS_API_URL } from "@/constants/todo";

import TodosList from "./list/TodosList";

async function fetcher(url: string) {
  try {
    const res = await fetch(url);

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default function Todos() {
  const { data } = useSWR<TodoType[]>(TODOS_API_URL, fetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <TodosList list={data} />;
}
