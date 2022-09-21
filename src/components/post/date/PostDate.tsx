import { PostType } from "@/types/post";

type PostDateProps = Pick<PostType, "createdAt">;

export default function PostDate(props: PostDateProps) {
  const { createdAt } = props;

  return <time>{createdAt.toString()}</time>;
}
