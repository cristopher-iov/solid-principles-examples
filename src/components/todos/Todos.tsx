import { TodoType } from "@/types/todo";

import useData from "@/hooks/useData";

import TodosList from "./list/TodosList";

type TodosProps = {
  readonly id: string;
  readonly fetcher: () => Promise<TodoType[]>;
};

export default function Todos(props: TodosProps) {
  const { id, fetcher } = props;

  const { data } = useData<TodoType[]>({ key: id, fetcher });

  if (!data) {
    return <div>Loading...</div>;
  }

  return <TodosList list={data} />;
}
