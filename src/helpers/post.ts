import axios from "axios";

import { PostType } from "@/types/post";

import { POST_API_URL } from "@/constants/post";

export async function fetchPosts() {
  try {
    const res = await axios.get<PostType[]>(POST_API_URL);

    return res.data;
  } catch (e) {
    console.error(e);
  }
}
