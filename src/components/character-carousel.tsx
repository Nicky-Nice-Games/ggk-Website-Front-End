import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { characters, type Character } from "@/data/characters";
import { useEffect, useState, type ReactElement } from "react";

type ContentFunction = (character: Character, index: number) => ReactElement;

const CharacterCarousel = ({
  mappedContent,
  contentClass,
}: {
  mappedContent: ContentFunction;
  contentClass: string;
}) => {
  const [center, setCenter] = useState(0);

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
    setCenter(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCenter(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      className="flex flex-row w-full items-center justify-center h-fit"
    >
      <CarouselPrevious className="w-8" />
      <CarouselContent className="m-auto drop-shadow-xl/50 justify-between pb-[8rem] pt-[4rem]">
        {characters.map((character, index) => (
          <CarouselItem className="md:basis-1/3 flex flex-row justify-center pl-0">
            <Dialog>
              {/* Clickable carousel picture*/}
              <DialogTrigger className="cursor-pointer w-[45%] md:[45%] lg:w-[45%] xl:w-[65%] hover:scale-105">
                <img
                  src={character.imgUrl}
                  alt={character.name}
                  className={`w-[100%] p-auto ${
                    index === center - 1 ? "scale-130" : ""
                  }`}
                />
              </DialogTrigger>

              {/* Fullscreen content popup*/}
              <DialogContent showCloseButton={false} className={contentClass}>
                {mappedContent(character, index)}
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="w-8" />
    </Carousel>
  );
};

export default CharacterCarousel;
