import { getPostsSorted } from "./blog/handle-posts";
import Blurb from "@/blog/components/blurb";
import Link from "next/link";

export default async function Home() {
  const posts = await getPostsSorted()

  return (
    <div>
      <h1>
        Posts
      </h1>
      <ul>
        {posts.map(async (post) => {
          return (
            <li>
              <Link href={`/blog/${post.slug}`}>
                <Blurb title={post.metadata.title} brief={post.metadata.brief}/>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
