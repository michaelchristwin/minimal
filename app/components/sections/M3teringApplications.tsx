import { Solaxy, WattAFrame, XCharge } from "~/assets/images/applications";
import type { CustomImage } from "~/assets/images";
import AppCard from "../AppCard";

type AppDataType = {
  title: string;
  url: string;
  image: CustomImage;
  alt: string;
  description: string;
};

const appsdata: AppDataType[] = [
  {
    title: "XCharge",
    url: "https://xcharge.m3ter.ing/",
    image: XCharge,
    alt: "Xcharge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui rem, corrupti quasi sunt exercitationem?",
  },
  {
    title: "Watt-A-Frame",
    url: "https://watt-a-frame.vercel.app/",
    image: WattAFrame,
    alt: "Watt-A-Frame",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui rem, corrupti quasi sunt exercitationem?",
  },
  {
    title: "Solaxy",
    url: "https://asset.m3ter.ing/",
    image: Solaxy,
    alt: "Watt-A-Frame",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui rem, corrupti quasi sunt exercitationem?",
  },
];

function M3teringApplications() {
  return (
    <>
      <p className={`text-center text-[25px] font-bold`}>Our Applications</p>
      <div
        className={`w-full grid md:grid-cols-3 grid-cols-1 p-[50px] gap-[20px]`}
      >
        {appsdata.map(({ title, image, url, description, alt }, i) => (
          <AppCard
            key={i}
            title={title}
            image={image}
            url={url}
            description={description}
            alt={alt}
          />
        ))}
      </div>
    </>
  );
}
export default M3teringApplications;
