import { PostType } from "@/types/post";

type PostTitleProps = {
  readonly post: PostType;
};

export default function PostTitle(props: PostTitleProps) {
  const { post } = props;

  return <h1>{post.title}</h1>;
}
