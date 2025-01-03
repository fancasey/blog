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
        return { slug: path.basename(file, ".mdx") }
    })

    return posts
}

export function getBlogPosts() {
    const slugs = getBlogSlugs()

    const posts = slugs.map(async (post) => {
        const { title } = await import(`@/blog/posts/${post}.mdx`)
        return title
    })

    return posts
}