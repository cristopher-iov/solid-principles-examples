import { PostType } from "@/types/post";

import PostsListItem from "./item/PostsListItem";

type PostsListProps = {
  readonly list: PostType[];
};

export default function PostsList(props: PostsListProps) {
  const { list } = props;

  return (
    <ul>
      {list.map(({ id, title }) => (
        <PostsListItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
}
