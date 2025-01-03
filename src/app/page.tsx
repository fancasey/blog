import { getBlogPosts } from "@/blog/handle-posts";
import Link from "next/link";

export default function Home() {
  const posts = getBlogPosts()

  return (
    <div>
      <h1>
        Posts
      </h1>
      <ul>
        {posts}
      </ul>
    </div>
  );
}
