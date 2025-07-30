import { ContentNavigator } from "@/components/content/content-navigator";
import CharacterCarousel from "@/components/character-carousel";
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import HeaderBanner from "@/components/ui/header-banner";
import { CloseIcon } from "@/components/content/close-icon";

const CharactersPage = () => {
  return (
    <>
      <ContentNavigator currentPage={"characters"} />
      <main
        className="min-h-[73vh] bg-size-[110%] bg-blend-multiply w-[100%] bg-size-[90%] md:bg-size-[80%]"
          style=
          {{
            backgroundImage:
            "linear-gradient(rgba(104, 104, 104, 1),rgba(104, 104, 104, 1), rgba(160, 160, 160, 1)), url('images/items-background-darkoutline.png')",
        }}
      >
        <img
          src=" images/characters-banner.png"
          className="mx-auto pt-[2rem] w-full md:w-2/5 mb-4"
        ></img>

        <h1 className="text-center poppins text-md text-[#fffbee]">
          Click a character to learn more about them!
        </h1>

        <div>
          {/* Character carousel */}
          <CharacterCarousel
            contentClass="lg:max-w-240 bg-[#0000] border-none shadow-none"
            mappedContent={(character) => {
              return (
                <>
                  <div
                    className="absolute
                      md:-top-60 md:left-0 min-w-60 md:w-100 z-10 translate-x-[32px]"
                  >
                    <img
                      src={character.imgUrl}
                      alt={character.name}
                      className="md:max-h-90 lg:max-h-180 hidden md:block"
                    />
                  </div>
                  <div className="absolute -top-20 md:-top-10 md:right-5 w-full md:w-4/5 flex bg-white justify-end rounded-lg drop-shadow-xl/50 overflow-hidden min-w-1/4 max-w-4xl ">
                    {/* right side: character name and description */}
                    <DialogDescription className="p-4 md:ml-[2rem] w-full md:min-h-70 text-left">
                      <div className="text-left md:w-7/10 md:ml-auto h-full">
                        <div className="flex flex-row justify-between mb-2">
                          <DialogTitle className="text-black font-bold text-header2 justify-self-start">
                            {character.name}
                          </DialogTitle>
                          <DialogClose>
                            <CloseIcon />
                          </DialogClose>
                        </div>
                        <p className="text-gray-600 text-body whitespace-pre-line h-[85%] flex flex-col justify-center">
                          {character.description}
                        </p>
                      </div>
                    </DialogDescription>
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
