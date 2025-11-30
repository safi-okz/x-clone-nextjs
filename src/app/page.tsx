import Feed from "@/components/Feed";
import Shared from "@/components/Shared";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex pt-4 justify-between text-textGray border-b border-borderGray font-bold">
        <Link
          href="/"
          className="pb-3 flex items-center border-iconBlue border-b-4"
        >
          For you
        </Link>
        <Link href="/" className="pb-3 flex items-center">
          Following
        </Link>
        <Link href="/" className="pb-3 flex items-center">
          React.js
        </Link>
        <Link href="/" className="pb-3 flex items-center">
          Javascript
        </Link>
        <Link href="/" className="pb-3 flex items-center">
          CSS
        </Link>
      </div>
      <Shared />
      <Feed />
    </div>
  );
}
