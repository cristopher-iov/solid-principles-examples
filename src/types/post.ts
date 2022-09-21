type PostAuthorType = {
  age: number;
  name: string;
};

export type PostType = {
  title: string;
  createdAt: Date;
  author: PostAuthorType;
};
