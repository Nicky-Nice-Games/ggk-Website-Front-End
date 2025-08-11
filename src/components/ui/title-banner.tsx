import { cn } from "@/lib/utils";

interface TitleBannerProps {
  color:
    | "purple"
    | "red"
    | "orange"
    | "green"
    | "blue"
    | "gray"
    | "dark-gray"
    | undefined;
  text: string;
  className?: string;
}

const TitleBanner = ({ color, text, className }: TitleBannerProps) => {
  let bannerBackground;
  switch (color) {
    case "purple":
      bannerBackground = "bg-[url(images/banners/purple.png)]";
      break;
    case "red":
      bannerBackground = "bg-[url(images/banners/red-md.png)]";
      break;
    case "orange":
      bannerBackground = "bg-[url(images/banners/orange.png)]";
      break;
    case "green":
      bannerBackground = "bg-[url(images/banners/green.png)]";
      break;
    case "blue":
      bannerBackground = "bg-[url(images/banners/blue.png)]";
      break;
    case "dark-gray":
      bannerBackground = "bg-[url(images/banners/dark-gray.png)]";
      break;
    default:
      bannerBackground = "bg-[url(images/banners/gray.png)]";
      break;
  }

  if (text === "Gizmo The Ghost") {
    const singleWords = text.split(" ");
    const textColors = ["text-[#EE4229]", "text-[#20E36B]", "text-[#007DDC]"];

    return (
      <div
        className={cn(
          "w-full mx-auto max-w-190 bg-size-[100%_100%] flex items-center justify-center h-20 sm:h-30",
          bannerBackground,
          className
        )}
      >
        <div className="relative z-10 mx-10 bravo text-center text-[30px] sm:text-[40px] md:text-[54px] lg:text-[70px] banner-text flex flex-row">
          {singleWords.map((word, index) => {
            if (index == singleWords.length - 1)
              return <h1 className={textColors[index]}>{word}</h1>;
            return <h1 className={textColors[index]}>{word}&nbsp;</h1>;
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full max-w-180 bg-size-[100%_100%] m-auto flex items-center justify-center h-20 sm:h-30",
        bannerBackground,
        className
      )}
    >
      <h1 className="relative z-10 mx-10 bravo text-center text-[40px] sm:text-[40px] md:text-[54px] lg:text-[70px] banner-text">
        {text}
      </h1>
    </div>
  );
};

export default TitleBanner;
