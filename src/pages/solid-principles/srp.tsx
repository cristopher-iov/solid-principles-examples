import axios from "axios";
import { useEffect, useState } from "react";

type PostType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function SingleResponsibilityPrinciple() {
  const [data, setData] = useState<PostType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get<PostType[]>(API_URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  if (isFetching) {
    return <div>Is loading...</div>;
  }

  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <span>{id}</span>
          <span>{title}</span>
        </li>
      ))}
    </ul>
  );
}
