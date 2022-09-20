import { PostType } from "@/types/post";

type PostsListItemProps = Pick<PostType, "id" | "title">;

export default function PostsListItem(props: PostsListItemProps) {
  const { id, title } = props;

  return (
    <li>
      <span>{id}</span>
      <span>{title}</span>
    </li>
  );
}
