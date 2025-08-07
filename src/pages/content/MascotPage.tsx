import { ContentNavigator } from "@/components/content/content-navigator";
import TitleBanner from "@/components/ui/title-banner";

const MascotPage = () => {
  return (
    <>
      <ContentNavigator currentPage="mascot" />
      <div
        className="flex flex-col min-h-[73vh] bg-size-[110%] bg-blend-multiply w-[100%] bg-size-[90%] md:bg-size-[80%] pt-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(104, 104, 104, 1),rgba(104, 104, 104, 1), rgba(160, 160, 160, 1)), url('images/items-background-darkoutline.png')",
        }}
      >
        <TitleBanner
          color="dark-gray"
          text="Gizmo The Ghost"
          className="mb-5 "
        />
        <div className="flex flex-col-reverse md:flex-row md:justify-between">
          <p
            className="m-3 mx-[2rem] mb-[3rem] p-4 md:p-8 rounded-xl md:max-w-[50%] 
    bg-[rgb(86,106,191)] text-white text-body border-3 border-black"
          >
            Gizmo is a curious spirit that lingers in the IGM Open Lab at RIT.
            They carved a life-sized wooden doll to possess, allowing them to
            express themselves with a physical form. Though Gizmo is quite
            timid, students find that Gizmo is very optimistic and believes in a
            good future for games as a form of entertainment. Additionally,
            Gizmo carries a small box of trinkets and knickknacks to share!
          </p>
          <img
            className="rounded-lg w-[50%] md:w-[20%] m-auto py-[2rem]"
            src="images/overview-gizmo.png"
          ></img>
        </div>
      </div>
    </>
  );
};

export { MascotPage };
