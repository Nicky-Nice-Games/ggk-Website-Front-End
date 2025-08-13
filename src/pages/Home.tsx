import * as React from "react";
import { useNavigate } from "react-router-dom";
import InfiniteMovingCards from "@/components/ui/carousel-banner";
import ArrowButton from "@/components/ui/arrow-button";
import { fetchData } from "@/utils";
import PreviewLeaderboard from "@/components/home/preview-leaderboard";

interface HomePageParams {
  setCurrentPage: Function;
}

const HomePage = ({ setCurrentPage }: HomePageParams) => {
  const [previewLeaderboardData, setPreviewData] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    fetchData(
      "GET",
      //"data/leaderboard-data.json",
      "https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/leaderboard/%7Bmapid%7D?mapid=4",
      "json",
      (data: any) => {
        data = data.sort((a: any, b: any) => a.raceTime - b.raceTime);
        for (let p of data) {
          p.score = Math.floor(p.score);
        }
        setPreviewData(data.slice(0, 4));
      }
    );
  }, []);

  const bannerImages = [
    "images/in-game/one.png",
    "images/in-game/ten.png",
    "images/in-game/three.png",
    "images/in-game/nine.png",
    "images/in-game/five.png",
    "images/in-game/eight.png",
    "images/in-game/seven.png",
    "images/in-game/six.png",
    "images/in-game/nine.png",
    "images/in-game/two.png",
  ];

  return (
    <>
      <main className="overflow-hidden bg-[url('images/black-checker.png')] bg-fixed">
        <div className="relative w-full text-white bg-[url(images/splash-title-art.png)] bg-cover bg-no-repeat bg-top">
          {/* Header Text Section - always on top for medium screens */}
          <div className="flex flex-col w-full md:w-2/5 md:ml-auto items-center relative top-20 sm:top-5 md:top-13 xl:top-20">
            <img
              src="images/logo.png"
              className="w-4/5 md:w-full lg:w-4/5 min-w-70"
            />
            <ArrowButton
              caption="Download Now!"
              clickAction={() =>
                window.open(
                  "https://github.com/Nicky-Nice-Games/ggk-UnityProject/releases",
                  "_blank"
                )
              }
              className="w-70 h-16 font-bold mt-5"
              textSize="large"
            />
          </div>
          <div className="overflow-hidden rotate-6 w-[120%] h-75 origin-top-left flex relative top-24 sm:top-0">
            <InfiniteMovingCards
              items={bannerImages}
              direction="right"
              speed="verySlow"
            ></InfiniteMovingCards>
          </div>
        </div>

        <div
          id="introduction"
          className="pt-[20%] md:pt-[15%] pb-[10%] px-[4vw] md:px-[8vw] w-full 
                    bg-repeat bg-fixed bg-[url('images/black-checker.png')]
                    text-white flex flex-col items-center"
        >
          <h2 className="text-header2 m-4">Game Overview</h2>
          <p className="text-body m-4 text-center">
            Gizmo Go-Kartz is an arcade-style Kart Racer for IGM students to
            play at any time between classes. It has a retro cartoony style
            that's meant to be easily recognizable to students. While having
            RIT-themed inspirations, Gizmo Go-Kartz puts a chaotic twist to them
            and captures the excitement of many Kart Racers. It is a
            passion-fueled project with the goal of serving as a proof of
            concept for many future Co-ops to be created with the same IP and
            style.
          </p>
        </div>
        <div className="bg-fixed bg-repeat bg-[url('images/black-checker.png')] max-h-40 sm:max-h-full mb-10 sm:mb-0">
          <div className="overflow-hidden rotate-6 w-[120%] h-75 origin-top-left flex bottom-0">
            <InfiniteMovingCards
              items={bannerImages}
              direction="right"
              speed="verySlow"
              className="relative bottom-0 bg-fixed bg-cover bg-repeat bg-size-[90%] md:bg-size-[80%]"
            ></InfiniteMovingCards>
          </div>
        </div>
        <div
          id="lore"
          className="px-8 md:px-[8vw] text-center pt-[20%] bg-fixed bg-repeat pb-[20%]
          bg-[url('images/items-background.png')] bg-fixed bg-cover bg-repeat bg-size-[90%] md:bg-size-[80%]"
        >
          <h2 className="text-header2 m-4">The Lore</h2>
          <p className="text-body m-4">
            Gizmo, the spirit of IGM, has set up multiple game-style race tracks
            throughout the RIT campus! Joined by multiple students who have
            stayed local during the summer and the RGDC mascot Jamster, Gizmo
            seeks to have a fun time before the summer term comes to an end. But
            don't worry; he will restore the campus back to it's original state
            to welcome in students for their fall classes.
          </p>
        </div>
        <div
          className=" relative bg-[#BBB] bg-[url('images/items-background.png')] bg-fixed bg-cover bg-repeat 
            bg-blend-difference bg-size-[90%] md:bg-size-[80%] h-fit"
        >
          <div
            className="overflow-hidden -rotate-6 w-[120%] h-75 origin-bottom-left flex
            relative"
          >
            <InfiniteMovingCards
              items={bannerImages}
              direction="left"
              speed="verySlow"
            />
          </div>
        </div>
        <div
          className="pt-[5%] w-full relative relative bg-[#BBB] bg-[url('images/items-background.png')] bg-fixed bg-cover bg-repeat 
            bg-blend-difference bg-size-[90%] md:bg-size-[80%]"
        >
          <div
            id="topscores"
            className="relative flex flex-col justify-center items-center"
          >
            <PreviewLeaderboard data={previewLeaderboardData} />
            <div
              id="link-container"
              className="bg-black/80 absolute z-999 bottom-0 w-full p-4 text-white text-center"
            >
              <ArrowButton
                caption="See all scores!"
                clickAction={() => {
                  window.scrollTo({ top: 0, behavior: "instant" });
                  navigate("/leaderboard");
                  setCurrentPage("leaderboard");
                }}
                className="px-8 py-3 font-semibold"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default HomePage;
