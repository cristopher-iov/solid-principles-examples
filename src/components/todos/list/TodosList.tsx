import { TodoType } from "@/types/todo";

type TodosListProps = {
  readonly list: TodoType[];
};

export default function TodosList(props: TodosListProps) {
  const { list } = props;

  return (
    <ul>
      {list.map(({ id, title }) => (
        <li key={id}>
          <span>{id} </span>
          <span>{title}</span>
        </li>
      ))}
    </ul>
  );
}
