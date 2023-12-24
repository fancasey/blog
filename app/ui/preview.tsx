import { Jost, Lora } from "next/font/google"
import Link from "next/link";

const lora = Lora({ subsets: ["latin"] });
const jost = Jost({ weight: "200", subsets: ["latin"] })

interface FrontMatter {
    id: string,
    title: string,
    brief: string,
    date: Date,
}

export default function Preview({ id, title, brief, date }: FrontMatter) {
    return (
        <Link href={`/${id}`}>
            <div className={`${lora.className} max-w-[900px] w-screen p-5 space-y-3 rounded-lg transition ease-in hover:bg-amber-100 hover:text-purple-900`}>
                <div className="flex flex-row items-end space-x-2">
                    <h1 className="text-4xl font-semibold">{title}</h1>
                    <p className={jost.className}>{new Date(date).toDateString()}</p>
                </div>
                <p className="font-extralight">{brief}</p>
            </div>
        </Link>

    );
}