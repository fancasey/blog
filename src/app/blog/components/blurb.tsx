export default function Blurb(
    { title, brief }: {
        title: string,
        brief: string
    }
) {
    return (
        <div className="mx-5 my-2 p-5 hover:text-background hover:bg-foreground rounded-lg ease-in-out duration-300">
            <h2>{title}</h2>
            <h3>{brief}</h3>
        </div>
    )
}