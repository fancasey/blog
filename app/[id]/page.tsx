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
            <div className="reverse-colors flex justify-center p-5 text-5xl">
                {postData.data.title}
            </div>
            <div className="flex flex-col max-w-[900px] lg:mx-40 mx-3 my-10 space-y-8">
                <p className="font-light">written {new Date(postData.data.date).toDateString()} by me</p>
                <div className={`${lora.className} space-y-4`} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
            </div>
        </div>
    );
}