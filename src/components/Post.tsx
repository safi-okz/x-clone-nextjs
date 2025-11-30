import ImageKit from "@/components/ImageKit";
import PostInfo from "./PostInfo";

const Post = () => {
  return (
    <div className="p-4 border-y border-borderGray">
      {/* Post type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        icon
        <span>Lama dev reposted</span>
      </div>
      {/* Post content */}
      <div className="flex gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          {/* Avatar */}
          <ImageKit
            src="/general/avatar.png"
            tr={false}
            width={100}
            height={100}
            className="w-full h-full"
            alt="avatar"
          />
        </div>
        {/* Content */}
        <div className="flex-1 felx flex-col gap-2">
          {/* Top */}
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-bold text-md">Lama Dev</h1>
              <span className="text-textGray">@lamadev</span>
              <span className="text-textGray">1 day ago</span>
            </div>
            <PostInfo />
          </div>
          {/* Text and Media */}
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            ipsam dignissimos nemo culpa sequi nisi distinctio. Inventore earum
            iusto quod nostrum vel saepe, vitae commodi sed beatae suscipit,
            excepturi temporibus.
          </p>
          <ImageKit
            src="/general/post.jpeg?updatedAt=1764497583704"
            alt="post"
            width={600}
            height={600}
            tr={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
