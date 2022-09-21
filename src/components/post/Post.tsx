import { PostType } from "@/types/post";

import PostDate from "./date/PostDate";
import PostTitle from "./title/PostTitle";

type PostProps = {
  readonly post: PostType;
};

export default function Post(props: PostProps) {
  const { post } = props;

  return (
    <div>
      <PostTitle title={post.title} />

      <p>Author: {post.author.name}</p>

      <PostDate createdAt={post.createdAt} />
    </div>
  );
}
