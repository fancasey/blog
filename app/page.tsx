import "./ui/globals.css";
import Preview from "./ui/preview";
import { getSortedPostsData } from '@/lib/posts'

const posts = getSortedPostsData()

export default function Home() {
  return (
    <main>
      <div className="reverse-colors flex justify-center p-5 text-5xl">blog</div>
      <div className="flex justify-center my-10">
        <div className="space-y-5">
          {posts.map(post =>
            <li key={post.id} className="list-none">
              <Preview id={post.id} title={post.data.title} brief={post.data.brief} date={post.data.date} />
            </li>)}
        </div>
      </div>
    </main>
  );
}
