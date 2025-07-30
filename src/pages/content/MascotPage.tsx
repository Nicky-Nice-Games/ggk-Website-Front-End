import { ContentNavigator } from "@/components/content/content-navigator";
import TitleBanner from "@/components/ui/title-banner";

const MascotPage = () => {
  return (
    <>
      <ContentNavigator currentPage="mascot" />
      <div className="flex flex-col bg-zinc-950 ">
        <TitleBanner color="gray" text="Gizmo The Ghost" className="my-5" />
        <div className="flex">
          <p className="m-3 p-8 text-blue-100 bg-gradient-to-b from-[#0d0032] to-[#180059] rounded-xl text-lg">
            A curious ghost that lingers in the IGM Open Lab Carved a life-size
            wooden doll to possess as a physical body Timid but optimistic;
            believes in a good future for games Has a box of trinkets and
            knickknacks to share
          </p>
          <img
            className="rounded-lg w-full h-auto m-auto py-[2rem]"
            src="images/overview-gizmo.png"
          ></img>
        </div>
      </div>
    </>
  );
};

export { MascotPage };
