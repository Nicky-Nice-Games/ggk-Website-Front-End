import { ContentNavigator } from "@/components/content/content-navigator";
import { BoostCard } from "@/components/content/boost-card";
import { DefenseCard } from "@/components/content/defense-card";
import { OffenseCard } from "@/components/content/offense-card";
import { TrapCard } from "@/components/content/trap-card";

const ItemsPage = () => {
  return (
    <>
      <ContentNavigator currentPage={"items"} />
      <main
        className="min-h-[73vh] bg-size-[110%] bg-blend-multiply w-[100%] bg-size-[90%] md:bg-size-[80%]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(104, 104, 104, 1),rgba(104, 104, 104, 1), rgba(160, 160, 160, 1)), url('images/items-background-darkoutline.png')",
        }}
      >
        <img
          src=" images/banners/items.png"
          className="mx-auto pt-8 w-full md:w-[40vw] mb-4"
        ></img>

        <h1 className="text-center text-[#fffbee] poppins font-semibold">
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
