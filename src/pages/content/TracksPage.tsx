import { ContentNavigator } from "@/components/content/content-navigator";
import MapSelect from "@/components/map-select";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import TitleBanner from "@/components/ui/title-banner";
import { type Track } from "@/data/tracks";

//Tracks Page - Sub Page of Content
const TracksPage = () => {
  //information of heading and track carasoul
  return (
    <div
      className="min-h-[84vh] bg-size-[110%] bg-blend-multiply bg-size-[90%] md:bg-size-[80%] min-h-[73vh] bg-size-[110%] bg-blend-multiply w-[100%] bg-size-[90%] md:bg-size-[80%]"
          style=
          {{
            backgroundImage:
            "linear-gradient(rgba(104, 104, 104, 1),rgba(104, 104, 104, 1), rgba(160, 160, 160, 1)), url('images/items-background-darkoutline.png')",
        }}
    >
      {/*This is the header and description of each item*/}
      <ContentNavigator currentPage="tracks" />
      <TitleBanner color="blue" text="Tracks" className="my-5" />
      <h1 className="text-center text-[#fffbee] poppins text-body">Click a track to view its story!</h1>
      <MapSelect
        isDialog={true}
        clickActionOrDialogContent={(track: Track) => {
          return (
            <DialogContent className="bg-[#0000] flex justify-start sm:max-w-3/5 gap-0 p-0">
              <img src={track.imgUrl} className="w-2/5 rounded-l-lg" />
              <div className="bg-gray-200 rounded-r-lg p-5">
                <DialogTitle className="mb-5">{track.name}</DialogTitle>
                <DialogDescription>{track.description}</DialogDescription>
              </div>
            </DialogContent>
          );
        }}
      />
    </div>
  );
};

export { TracksPage };
