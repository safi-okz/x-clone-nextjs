import ImageKit from "./ImageKit";

const PostInfo = () => {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <ImageKit
        src="/icons/infoMore.svg"
        alt="more icon"
        width={16}
        height={16}
        tr={false}
      />
    </div>
  );
};

export default PostInfo;
