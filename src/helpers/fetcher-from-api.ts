import { TODOS_API_URL } from "@/constants/todo";

export default async function fetcherFromApi() {
  try {
    const res = await fetch(TODOS_API_URL);

    console.log("Fetching from api");

    return res.json();
  } catch (error) {
    console.error(error);
  }
}
