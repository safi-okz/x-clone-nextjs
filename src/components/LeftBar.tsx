import Link from "next/link";
import ImageKit from "@/components/ImageKit";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen flex flex-col justify-between pt-2 pb-8 sticky top-0">
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <ImageKit
            src="/icons/logo.svg"
            alt="logo"
            width={24}
            height={24}
            tr={false}
          />
        </Link>

        {/* Menu List */}
        <div className="flex-flex-col gap-4">
          {menuList.map((menu) => (
            <Link
              href={menu.link}
              key={menu.id}
              className="flex items-center p-2 rounded-full hover:bg-[#181818] gap-2 space-x-4"
            >
              <ImageKit
                src={`/icons/${menu.icon}`}
                alt={menu.name}
                width={24}
                height={24}
                tr={false}
              />
              <span className="hidden xxl:inline">{menu.name}</span>
            </Link>
          ))}
        </div>

        {/* Button */}
        <Link
          href="/"
          className="block xxl:hidden bg-white text-black rounded-full font-bold py-2 px-2"
        >
          <ImageKit
            src="/icons/post.svg"
            alt="Tweet"
            width={24}
            height={24}
            tr={false}
          />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <ImageKit
              src="/general/avatar.png"
              alt="lama dev"
              width={100}
              height={100}
              tr={false}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Lama Dev</span>
            <span className="text-sm text-textGray">@lamaWebDev</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
