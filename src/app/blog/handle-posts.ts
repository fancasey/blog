import fs from 'fs'
import path from 'path'

export function getBlogSlugs() {
    // get the posts directory
    const dir = path.join(process.cwd(), "src", "app", "blog", "posts")

    // only gets mdx files
    const mdx_post_files = fs.readdirSync(dir).filter((file) => {
        return path.extname(file) === ".mdx"
    })

    // use slug for finding in page.tsx
    const posts = mdx_post_files.map((file) => {
        const s: string = path.basename(file, ".mdx")

        return { slug: s }
    })

    return posts
}

export async function getPostData(slug: string) {
    const { metadata: data } = await import(`@/blog/posts/${slug}.mdx`)

    return data
}

export async function getPostsSorted() {
    const post_slugs = getBlogSlugs()

    const posts = await Promise.all(
        post_slugs.map(async (post_slug) => {
            return { slug: post_slug.slug, metadata: await getPostData(post_slug.slug) }
        })
    )

    posts.sort((a, b) => {
        return b.metadata.date - a.metadata.date
    })

    return posts
}