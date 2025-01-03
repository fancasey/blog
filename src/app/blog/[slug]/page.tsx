import { getBlogSlugs } from "@/blog/handle-posts"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { default: Post, title } = await import(`@/blog/posts/${slug}.mdx`)
 
  return (
    <div>
      <h1>title</h1>
      <Post />
    </div>
  )
}
 
export function generateStaticParams() {
  return getBlogSlugs()
}

export const dynamicParams = false