import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tracks } from "@/data/tracks";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ArrowButton from "@/components/ui/arrow-button";
import { useNavigate } from "react-router-dom";
import CharacterCarousel from "@/components/character-carousel";
import TitleBanner from "@/components/ui/title-banner";

const ProcessPage = () => {
  const photo: string = "images/placeholder/placeholder.PNG";
  const navigate = useNavigate();

  return (
    <>
      <main className="mt-0 px-6 md:px-12 relative bg-[url(images/items-background.png)] bg-[#BBB] bg-fixed bg-repeat bg-blend-difference bg-size-[90%] md:bg-size-[80%] *:text-white">
        {/* About Project Section */}
        <div className="pt-5">
          <TitleBanner color="orange" text="The Process" className="mb-5" />
          <h1 className="text-header2 pt-4 mx-0 mb-4"> About the Project</h1>
          <div className="flex md:flex-row flex-col items-stretch">
            <p className="text-body mb-4">
              Gizmo Go-Kartz was constructed by a team of almost 50 RIT students
              of varying grade levels, as an Entrepreneurial Co-op over the
              summer of 2025 sponsored by RIT Professor Nicholas Buonarota. All
              students are split into 8 sub-teams by their specialty:
              <ul className="list-disc *:my-2 ml-5">
                <li>
                  <b className="font-bold text-[#fb923c]">Production:</b>{" "}
                  Oversees the entire team's work, assigning tasks and handling
                  marketing.
                </li>
                <li>
                  <b className="font-bold text-[#fb923c]">
                    Gameplay and Systems Programming:
                  </b>{" "}
                  Programs all of the game's features and mechanics in Unity.
                </li>
                <li>
                  <b className="font-bold text-[#fb923c]">Web Development:</b>{" "}
                  Programs the game's website, summarizing information and
                  displaying game statistics.
                </li>
                <li>
                  <b className="font-bold text-[#fb923c]">Level Design:</b>{" "}
                  Designs and iterates on the layouts and themes of the game's
                  tracks.
                </li>
                <li>
                  <b className="font-bold text-[#fb923c]">
                    Content Development:
                  </b>{" "}
                  Creates all the game's art assets and intellectual property.
                </li>
                <li>
                  <b className="font-bold text-[#fb923c]">Quality Assurance:</b>{" "}
                  Ensures code and documentation is well-organized through
                  frequent testing.
                </li>
                <li>
                  <b className="font-bold text-[#fb923c]">Support:</b> Assists
                  other teams in various areas and ensures progress doesn't slow
                  down.
                </li>
                <li>
                  <b className="font-bold text-[#fb923c]">
                    Research &amp; Development:
                  </b>{" "}
                  Researches construction of the game's arcade cabinet and
                  potential features.
                </li>
              </ul>
              The project and most of its students work in the school of
              Interactive Games and Media, which is incorporated into the game's
              marketing. A majority of the team works remotely, but team
              meetings occur on-campus with all local members present, and all
              remote members in a Zoom call. This project was developed over the
              course of 2.5 months, stretching from late May to mid-August of
              2025.
            </p>
            <div className="md:min-w-[400px] md:w-300">
              <img
                src="images/process/team-photo.jpg"
                alt="Photo of the team"
                className="md:ml-[2rem] md:mt-0 self-center md:self-end md:pr-4 w-[100%] h-[300px] mb-2"
              />
              <ArrowButton
                caption="Meet the team!"
                clickAction={() => navigate("/aboutUs")}
                className="absolute right-5 md:right-8 font-semibold px-6 mt-[1rem] px-10 py-3"
              />
            </div>
          </div>
        </div>

        {/* Designing Game Section */}
        <div>
          <h1 className="text-header2 mt-[6rem] m-4 mx-0 mb-4">
            Designing the Game
          </h1>
          <div className="flex md:flex-row flex-col items-stretch">
            <p className="mr-8 text-body mb-4">
              The look of Gizmo Go‑Kartz feels fun and nostalgic, echoing early
              3D kart racers like Mario Kart 64. We use a simple, low‑poly art
              style and a bold, RIT‑inspired color scheme, like warm reds,
              oranges, and yellows that really popped against cooler tones you
              see in other kart games. Our tracks take you to playful, cartoon
              versions of RIT landmarks like the SHED and Global Village, and
              racers are based on familiar IGM student characters—skaters,
              dining workers, orientation leaders, and so on. The UI emulates
              old‑school racing games, keeping everything clear and focused on
              your racer. Altogether, the design is meant to capture the unique,
              caffeine‑fuelled energy of IGM life in a fresh, polished
              experience.
            </p>
            <img
              src="images/RIT.jpg"
              alt="Picture of RIT"
              className="md:mt-0 self-center md:self-end md:w-[500px] w-full md:w-1/4 max-h-[400px]"
            />
          </div>
        </div>

        {/* Character Dev Info Section */}
        <div>
          <h1 className="text-header2 m-4 mx-0 mb-4">
            Designing our characters
          </h1>
          <p className="text-body">
            The roster of Gizmo Go-Kartz characters is designed to be both
            approachable and scalable. Characters are build using a standardized
            body base reminiscent of Nintendo's Miis, with heads and faces being
            easy to customize. This allows ease of character production for a
            high-quality base cast with room for future expansion. Character are
            also meant to have easily identifiable heads, as those are what will
            be most prominently seen by players in-game. The original plan for
            the roster was to include multiple RIT mascots, but this caused
            complications with requiring approval from third parties to include
            their mascots. As a result, most of the characters are original
            students, and only 2 are mascots with approval.
          </p>
          <div className="text-black">
            <CharacterCarousel
              contentClass="lg:max-w-[60%]"
              mappedContent={(c) => {
                return (
                  <div className="">
                    <DialogHeader className="text-left">
                      <DialogTitle>
                        <h3 className="text-header3 mb-[1rem]">
                          {c.name}
                          {c.occupation ? ` - ${c.occupation}` : ""}
                        </h3>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="h-[60vh] overflow-auto flex flex-col items-center text-center bg-gray-200">
                      <img
                        src={c.conceptImgUrl}
                        alt={`${c.name} concept`}
                        className="mb-[1rem] h-[70%]"
                      />
                      <DialogDescription>
                        <p className="text-body text-black">
                          {c.devDescription}
                        </p>
                      </DialogDescription>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>

        {/* Developing Game Section */}
        <div>
          <h1 className="text-header2 mt-[2rem] m-4 mx-0 mb-4">
            Developing the Game
          </h1>
          <div className="pb-[1rem] flex md:flex-row flex-col items-stretch">
            <img
              src="images/GSP.jpg"
              alt="Picture of GSP"
              className="md:mr-[2rem] mb-[2rem] md:mt-0 self-center md:self-end md:w-[400px] w-full md:w-1/4 max-h-[300px]"
            />
            <p className="text-body">
              Our Game Systems Programming (GSP) team is the backbone of our
              game's functionality. Given the scope of their work, they follow
              several practices to stay organized and efficient. To keep the
              GitHub repo clean and avoid merge conflicts, GSP uses feature
              branches and forks for development. All code pushed to main goes
              through a pull request and approval process, ensuring no broken
              code makes it into the daily builds. Daily builds of the game are
              created to quickly catch and resolve functionality issues, and to
              ensure there's always an updated version ready for playtesting.
              The team regularly peer programs, which helps with idea
              brainstorming, faster debugging, and overall productivity. As GSP
              remote lead Logan Larrondo said, “Peer programming helps
              brainstorm ideas, debug faster, and is often more efficient than
              working alone.” To stay on track, the team fills out daily Google
              Forms, logging progress and helping with planning. When major bugs
              appear, GSP tackles them together, through research, code reviews,
              or simply joining a call to talk things out.
            </p>
          </div>
        </div>

        {/* Tracks Section */}
        <h1 className="text-header2 m-4 mx-0 mb-4">Building our Tracks</h1>
        <p className="mb-8 text-body">
          The tracks of Gizmo Go-Kartz are largely based on real RIT locations
          with original twists. With an initial plan of 4 tracks per cup and
          some difficulty guidelines from the creative director, research into
          the location of basis and difficulty level is conducted. Once
          complete, sketches of the track layouts are created, then translated
          to a 3D model in Blender, with environmental background details being
          added as the finishing touch. In addition, track layouts are tweaked
          in response to feedback from playtesters.
        </p>

        <Tabs defaultValue="0" className="w-[90vw] pb-[2rem]">
          <TabsList className="flex flex-wrap h-full pl-0">
            {tracks.map((t) => {
              return (
                <TabsTrigger value={tracks.indexOf(t).toString()}>
                  {t.name}
                </TabsTrigger>
              );
            })}
            <TabsTrigger value="cut">Back Burner Content</TabsTrigger>
          </TabsList>
          {tracks.map((t) => {
            return (
              <TabsContent
                value={tracks.indexOf(t).toString()}
                className="text-white text-body"
              >
                <div className="bg-linear-to-b from-[#F66624] to-[#D84B3A] p-5 xl:rounded-e-2xl rounded-b-2xl mb-3 h-[70vh]">
                  {t.devDescription}
                </div>
              </TabsContent>
            );
          })}
          <TabsContent value="cut">
            <div className="bg-linear-to-b from-[#F66624] to-[#D84B3A] p-5 xl:rounded-e-2xl rounded-b-2xl mb-3 *:mb-5 h-[70vh] ">
              <div className="max-h-full overflow-y-auto">
                <h2 className="text-header3 mb-[1rem]">
                  On the back burner...
                </h2>
                <div className="flex flex-col md:flex-row">
                  <div className="md:mr-10">
                    <h3 className="text-header4 mb-3">Quarter-Mile</h3>
                    <p className="text-body mb-[1rem]">
                      A track based on RIT's Quarter Mile, a long pathway
                      connecting the dorm buildings to the academic buildings,
                      was developed and tested several times, but eventually cut
                      from the track roster. The layout's size and length made
                      it highly challenging to scale down to the level of a
                      track with 3 laps.
                    </p>
                  </div>
                  <div className="">
                    <img
                      src="images/tracks/dev-quarter-mile.jpg"
                      alt="Quarter Mile Sketch"
                      className="md:max-w-80 lg:max-w-[25vw] mb-[1rem]"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:ml-10">
                    <h1 className="text-header4 mb-3">Global Village</h1>
                    <p className="text-body mb-[1rem]">
                      A track based on RIT's Global Village was drafted early
                      into development, going through several proposed layouts
                      that emphasized several branching pathways. However, there
                      was no concrete plan for the track, and it ultimately was
                      not modeled or incorporated into the roster.
                    </p>
                  </div>
                  <div className="">
                    <img
                      src="images/tracks/dev-global-village.jpg"
                      alt="Global Village Sketch"
                      className="md:max-w-40 lg:max-w-[20vw] mb-[1rem]"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-header4 mb-3">
                    Other Cut Track Concepts
                  </h1>
                  <ul className="list-disc ml-5 *:mb-2 text-body">
                    <li>
                      <b>The SHED:</b> An early drafted track based on the
                      Student Hall for Exploration and Development (SHED). The
                      track was never given a proper layout and cut for similar
                      reasons to the Quarter Mile.
                    </li>
                    <li>
                      <b>RIT Woods:</b> A track was modeled and visualized based
                      on the woods near Grace Watson Hall to contrast with the
                      urban visuals of the other tracks. The design ended up not
                      aligning thematically or feeling recognizable as an RIT
                      location, and thus was cut.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
};
export default ProcessPage;
