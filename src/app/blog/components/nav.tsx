import Link from "next/link";

export default function NavBar() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Link href="/" className="hover:underline">
          Casey Fan
        </Link>
      </div>
      <div className="justify-self-end">
        <a
          target="_blank"
          href="https://github.com/fancasey"
          rel="noopener noreferrer"
          className="hover:underline px-2"
        >
          gh
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/casey-fan"
          className="hover:underline pl-2"
        >
          linkedin
        </a>
      </div>
    </div>
  );
}
