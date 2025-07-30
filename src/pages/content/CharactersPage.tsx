import { ContentNavigator } from "@/components/content/content-navigator";
import CharacterCarousel from "@/components/character-carousel";
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { CloseIcon } from "@/components/content/close-icon";

const CharactersPage = () => {
  return (
    <>
      <ContentNavigator currentPage={"characters"} />
      <main
        className="min-h-[73vh] bg-size-[110%] bg-blend-multiply w-[100%] bg-size-[90%] md:bg-size-[80%]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(104, 104, 104, 1),rgba(104, 104, 104, 1), rgba(160, 160, 160, 1)), url('images/items-background-darkoutline.png')",
        }}
      >
        <img
          src=" images/banners/characters.png"
          className="mx-auto pt-8 w-full md:w-[40vw] mb-4"
        ></img>

        <h1 className="text-center poppins text-md text-[#fffbee] mb-[1rem]">
          Click a character to learn more about them!
        </h1>

        <div className="relative">
          {/* Character carousel */}
          <CharacterCarousel
            contentClass="lg:max-w-240 bg-[#0000] border-none shadow-none"
            mappedContent={(character) => {
              return (
                <>
                <div className="flex flex-col justify-center h-[100%] relative">
                  <div
                    className="absolute md:h-[150%] lg:h-[170%] 2xl:h-[200%] z-10 
                    md:-translate-x-[50%] lg:-translate-x-[15%] 2xl:-translate-x-[30%]"
                  >
                    <img
                      src={character.imgUrl}
                      alt={character.name}
                      className="md:h-[100%] hidden md:block"
                    />
                  </div>
                  <div className="w-full bg-white rounded-lg drop-shadow-xl/50">
                    {/* right side: character name and description */}
                    <DialogDescription className="p-[2rem] md:ml-[8rem] lg:ml-[4rem] 2xl:ml-[7rem] text-left">
                      <div className="text-left md:w-7/10 md:ml-auto h-full">
                        <div className="flex flex-row justify-between mb-2">
                          <DialogTitle className="text-black font-bold text-header2 justify-self-start">
                            {character.name}
                          </DialogTitle>
                        </div>
                        <p className="text-gray-600 text-body whitespace-pre-line h-[85%] flex flex-col justify-center">
                          {character.description}
                        </p>
                      </div>
                    </DialogDescription>
                  </div>

                </div>
                </>
              );
            }}
          />
        </div>
      </main>
    </>
  );
};

export { CharactersPage };
