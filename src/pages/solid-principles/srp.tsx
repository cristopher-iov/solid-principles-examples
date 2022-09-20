import useFetchPosts from "@/hooks/useFetchPosts";

import PostsList from "@/components/posts/list/PostsList";
import PostsLoader from "@/components/posts/loader/PostsLoader";

export default function SingleResponsibilityPrinciple() {
  const { isFetching, posts } = useFetchPosts();

  if (isFetching) {
    return <PostsLoader />;
  }

  return <PostsList list={posts} />;
}
