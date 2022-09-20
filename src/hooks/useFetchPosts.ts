import { useEffect, useState } from "react";

import { PostType } from "@/types/post";

import { fetchPosts } from "@/helpers/post";

export default function useFetchPosts() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then((res) => {
        setPosts(res || []);
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
