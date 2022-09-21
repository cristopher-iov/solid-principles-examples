import { PostType } from "@/types/post";

import Post from "@/components/post/Post";

const mockPost: PostType = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  createdAt: new Date("2022-09-21T02:18:52.000Z"),
  author: {
    age: 30,
    name: "John Doe",
  },
};

export default function InterfaceSegregationPrinciple() {
  return (
    <div>
      <h2>ISP</h2>

      <Post post={mockPost} />
    </div>
  );
}
