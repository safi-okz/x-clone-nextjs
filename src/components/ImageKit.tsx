import { Image, ImageKitProvider } from "@imagekit/next";

const imageKitUrlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Page(props: {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  tr: boolean;
}) {
  return (
    <ImageKitProvider urlEndpoint={imageKitUrlEndpoint}>
      <Image
        src={props.src || "/general/post.jpeg?updatedAt=1764497583704"}
        className={props.className}
        alt={props.alt || "Picture of the author"}
        {...(props.tr
          ? {
              transformation: [
                {
                  width: `${props.width || 500}`,
                  height: `${props.height || 500}`,
                },
              ],
            }
          : {
              width: `${props.width || 500}`,
              height: `${props.height || 500}`,
            })}
      />
    </ImageKitProvider>
  );
}
