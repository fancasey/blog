import { getPostData } from "@/lib/posts";
import { Lora } from "next/font/google";

const lora = Lora({ weight: "400", subsets: ["latin"] })

export default async function Post({ params }: { params: { id: string } }) {
    let postData;
    try {
        postData = await getPostData(params.id);
    } catch (error) {
        return (
            <h1 className="text-9xl font-semibold">404</h1>
        );
    }

    return (
        <div>
            <div className="flex justify-center p-5 bg-amber-100 text-purple-900">
                <h2 className="text-5xl">{postData.data.title}</h2>
            </div>
            <div className="mx-32 my-10 space-y-8">
                <p className="text-xs">written {new Date(postData.data.date).toDateString()} by me</p>
                <div className={`${lora.className} space-y-4`} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
            </div>

        </div>
    );
}