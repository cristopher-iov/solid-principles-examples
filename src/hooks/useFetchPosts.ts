import axios from "axios";
import { useEffect, useState } from "react";

type PostType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function useFetchPosts() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get<PostType[]>(API_URL)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return {
    posts,
    isFetching,
  };
}
