import { Bentham } from "next/font/google"

const bentham = Bentham({ weight: "400", subsets: ["latin"] });

interface FrontMatter {
    title: string,
    brief: string,
    date: Date,
}

export default function Preview({ title, brief, date }: FrontMatter) {
    return (
        <a href="https://www.google.com">
            <div className={`${bentham.className} max-w-[900px] w-screen p-5 rounded-lg transition ease-in hover:bg-amber-100 hover:text-purple-900`}>
                <h1 className="text-4xl font-bold">{title}</h1>
                <p>this is some description</p>
            </div>
        </a>

    );
}