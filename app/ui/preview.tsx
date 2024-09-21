import { Jost, Lora } from "next/font/google"
import Link from "next/link";
import "./globals.css"

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
            <div className={`${lora.className} max-w-[900px] w-screen p-5 space-y-3 rounded-lg transition-all ease-in hover:outline`}>
                <div className="flex flex-row items-end space-x-2">
                    <h1 className="text-4xl font-semibold">{title}</h1>
                    <p className={jost.className}>{date.toString()}</p>
                </div>
                <p className="font-extralight">{brief}</p>
            </div>
        </Link>

    );
}