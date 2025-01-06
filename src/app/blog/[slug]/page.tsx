import styles from "@/styles.module.css"
import { getBlogSlugs } from "@/blog/handle-posts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { default: Post, metadata: data } = await import(`@/blog/posts/${slug}.mdx`)

  return (
    <div>
      <h1>{data.title}</h1>
      <h3 className="py-1">{new Date(data.date).toDateString()}</h3>
      <div className={`px-2 ${styles.blog}`}>
        <Post />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getBlogSlugs();
}

export const dynamicParams = false;
