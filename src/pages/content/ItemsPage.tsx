import { ContentNavigator } from "@/components/content/content-navigator";
import { BoostCard } from "@/components/content/boost-card";
import { DefenseCard } from "@/components/content/defense-card";
import { OffenseCard } from "@/components/content/offense-card";
import { TrapCard } from "@/components/content/trap-card";
import HeaderBanner from "@/components/ui/header-banner";

const ItemsPage = () => {
  return (
    <>
      <ContentNavigator currentPage={"items"} />
      <main
        className="pt-[1rem] min-h-[73vh] bg-size-[110%] bg-blend-multiply w-[100%] bg-size-[90%] md:bg-size-[80%]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(160, 160, 160, 1), rgba(104, 104, 104, 1)), url('images/items-background-darkoutline.png')",
        }}
      >
        <img
          src=" images/items-header.png"
          className="flex justify-self-center w-[40%] md:w-[40%] py-2"
        ></img>

        <h1 className="text-center text-[#fffbee] poppins text-xl">
          Click an item to view its effects and levels!
        </h1>

        <div className="flex flex-col lg:flex-row w-full m-auto items-center xl:items-start justify-center">
          <BoostCard />
          <DefenseCard />
          <OffenseCard />
          <TrapCard />
        </div>
      </main>
    </>
  );
};

export { ItemsPage };
