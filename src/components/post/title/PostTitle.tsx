import { PostType } from "@/types/post";

type PostTitleProps = Pick<PostType, "title">;

export default function PostTitle(props: PostTitleProps) {
  const { title } = props;

  return <h1>{title}</h1>;
}
