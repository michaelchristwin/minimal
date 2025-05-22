import type { CustomImage } from "~/assets/images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface AppCardProps {
  image: CustomImage;
  title: string;
  alt: string;
  url: string;
  description: string;
}
const AppCard = ({ image, title, alt, description, url }: AppCardProps) => {
  return (
    <Card className="border-0">
      <CardHeader className="hidden">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={`aspect-video w-full`}>
          <picture>
            {Object.entries(image.sources).map(([type, srcset]) => (
              <source key={type} type={`image/${type}`} srcSet={srcset} />
            ))}
            <img
              src={image.img.src}
              width={image.img.w}
              height={image.img.h}
              alt={alt}
              className={`transition-all duration-300 ease-in-out object-cover rounded-xl`}
            />
          </picture>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Launch Button */}
        </div>
      </CardContent>
      <CardFooter>
        <button
          onClick={() => {
            window.open(url, "_blank", "noopener,noreferrer");
          }}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 
            bg-black hover:opacity-60 hover:-translate-y-0.5 hover:shadow-lg`}
        >
          Launch App
        </button>
      </CardFooter>
    </Card>
  );
};

export default AppCard;
