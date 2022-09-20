import useFetchPosts from "@/hooks/useFetchPosts";

export default function SingleResponsibilityPrinciple() {
  const { isFetching, posts } = useFetchPosts();

  if (isFetching) {
    return <div>Is loading...</div>;
  }

  return (
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>
          <span>{id}</span>
          <span>{title}</span>
        </li>
      ))}
    </ul>
  );
}
