import { CloseIcon } from "@/components/content/close-icon";
import { ContentNavigator } from "@/components/content/content-navigator";
import MapSelect from "@/components/content/map-select";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import TitleBanner from "@/components/ui/title-banner";
import { type Track } from "@/data/tracks";
import { DialogClose } from "@radix-ui/react-dialog";

//Tracks Page - Sub Page of Content
const TracksPage = () => {
  //information of heading and track carasoul
  return (
    <div
      className="min-h-[84vh] bg-size-[110%] bg-blend-multiply bg-size-[90%] md:bg-size-[80%] min-h-[73vh] bg-size-[110%] bg-blend-multiply w-[100%] bg-size-[90%] md:bg-size-[80%]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(104, 104, 104, 1),rgba(104, 104, 104, 1), rgba(160, 160, 160, 1)), url('images/items-background-darkoutline.png')",
      }}
    >
      {/*This is the header and description of each item*/}
      <ContentNavigator currentPage="tracks" />
      <TitleBanner color="blue" text="Tracks" className="my-5" />
      <p className="text-center text-[#fffbee] text-body mb-8">
        Click a track to view its story!
      </p>
      <MapSelect
        isDialog={true}
        clickActionOrDialogContent={(track: Track) => {
          return (
            <div className="rounded-lg shadow-lg">
              <DialogContent
                showCloseButton={false}
                className="bg-[#0000] flex flex-col lg:flex-row 
              w-[100%] lg:max-w-[80%] lg:h-[60%] gap-0 p-0 border-none"
              >
                <img
                  src={track.imgUrl}
                  className="w-[100%] lg:w-2/5 rounded-t-lg lg:rounded-r-none lg:rounded-bl-lg"
                />
                <div
                  className="relative bg-gray-200 
                rounded-b-lg lg:rounded-l-none lg:rounded-r-lg p-5"
                >
                  <DialogTitle className="mb-5 text-header2">
                    {track.name}
                  </DialogTitle>
                  <DialogDescription>{track.description}</DialogDescription>
                  <DialogClose className="absolute top-4 right-4">
                    <CloseIcon />
                  </DialogClose>
                </div>
              </DialogContent>
            </div>
          );
        }}
      />
    </div>
  );
};

export { TracksPage };
