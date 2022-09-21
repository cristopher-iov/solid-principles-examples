import { PostType } from "@/types/post";

type PostDateProps = {
  readonly post: PostType;
};

export default function PostDate(props: PostDateProps) {
  const { post } = props;

  return <time>{post.createdAt.toString()}</time>;
}
