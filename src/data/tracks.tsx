import type { ReactElement } from "react";

//Track Interface with needed information
export interface Track {
  imgUrl: string;
  background: string;
  name: string;
  description: string;
  devDescription: ReactElement;
}

export const tracks: Track[] = [
  {
    imgUrl: "images/tracks/campus-circuit.png",
    background: `bg-[url(images/tracks/campus-circuit.png)]`,
    name: "Campus Circuit",

    description: `This fast-paced loop around the RIT campus is a perfect place for beginners to rev their engines and get a good feel for kart racing!  
      Whether you want to take a detour and head through the woods or stay on the main road, the Campus Circuit is an excellent place
       to practice.`,
    devDescription: (
      <div>
        <h2 className="text-header2 mb-[1rem]">Campus Circuit</h2>
        <div className="flex flex-col md:flex-row">
        <div className="md:max-w-60 lg:max-w-[20%] mb-[2rem]">
          <img
          src="images/tracks/dev-campus-circuit.jpg"
          alt="Outer Loop Sketch"
          className="w-[100%] h-[100%]"
          />
        </div>
        
        <p className="md:ml-10 text-center md:text-left text-body">
          Campus Circuit is inspired by RIT's "Outer Loop," a large road that
          encircles the entire campus. As such, the track features multiple
          landmarks around campus, such as the Dorm buildings and the Gene
          Polisseni Center. As the first track in the game, Campus Circuit was
          given an intentionally simplistic layout to allow beginner players to
          familiarize themselves with the game's mechanics.
        </p>
      </div>
      </div>
      
    ),
  },
  {
    imgUrl: "images/tracks/dorm-derby.png",
    background: `bg-[url(images/tracks/dorm-derby.png)]`,
    name: "Dorm Room Derby",
    description: `Gizmo seems to have built a miniature racetrack in their own dorm room! 
      Shrink down to toy-size and race between Gizmo's clean half of the dorm, 
      and their roommate's dirtier side. Huh... I wonder who Gizmo's roommate is?`,
    devDescription: (
      <div>
        
        <h2 className="text-header2 mb-[1rem]">Dorm Room Derby</h2>

        <div className="flex flex-col md:flex-row">
        <img
          src="images/tracks/dev-dorm-derby.jpg"
          alt="Dorm Room Sketch"
          className="md:max-w-60 lg:max-w-[20%] mb-[2rem]"
        />
        
        <p className="md:ml-10 text-center md:text-left text-body">
          The Dorm Room Derby is inspired by RIT's dorm rooms, where students
          make their second homes. Inspired by Mario Kart's Ribbon Road, the
          track was given a clean side and a messy side to its visuals,
          symbolizing a clean and messy roommate living in the same space. The
          track is of intermediate difficulty, testing players that have a basic
          familiarity with the game's mechanics.
        </p>
        </div>

      </div>
    ),
  },
  {
    imgUrl: "images/tracks/tech-house.png",
    background: `bg-[url(images/tracks/tech-house.png)]`,
    name: "Tech House Turnpike",
    description: `Try not to get lost as you navigate the college of technology! With many alternate routes and paths you can take,
      there are a lot of different ways to reach the finish line. You might not be able to RUN in the halls, but they 
      never said you couldn't drive...`,
    devDescription: (
      <div>
        <h2 className="text-header2 mb-[1rem]">Tech House Turnpike</h2>

        <div className="flex flex-col md:flex-row">
        <img
          src="images/tracks/dev-tech-house.jpg"
          alt="Tech House Sketch"
          className="md:max-w-60 lg:max-w-[20%] mb-[2rem]"
        />
        <p className="md:ml-10 text-body">
          Tech House Turnpike is based on Golisano Hall, the primary building
          where many classes for Game Design majors are held. The primary appeal
          of the track is its vertically structured layout, split into 3
          separate floors. Its goal is to be particularly recognizable to Game
          Design students, who frequently visit the building it's based on.
        </p>
      </div>
      </div>
    ),
  },
  {
    imgUrl: "images/tracks/all-nighter.png",
    background: `bg-[url(images/tracks/all-nighter.png)]`,
    name: "All-Nighter Expressway",
    description: `With the summer term coming to a close, final exams are just around the corner. 
    Gizmo has created a special track above the campus as means of nighttime celebration! 
    Not until after everyone has studied, of course... `,
    devDescription: (
      <div>
        <h2 className="text-header2 mb-[1rem]">All-Nighter Expressway</h2>

        <div className="flex flex-col md:flex-row">
        <img
          src="images/tracks/dev-all-nighter.jpg"
          alt="Final Brick Road Sketch"
          className="md:max-w-60 lg:max-w-[20%] mb-[2rem]"
        />
        <p className="md:ml-10 text-body">
          All-Nighter Expressway is heavily inspired by Mario Kart's Rainbow
          Road, in both aesthetics and challenge level. The track is set in
          nighttime to distinguish itself from the other tracks, which occur in
          daytime, as well as to symbolize the common practice of staying up
          late to finish assignments and study extensively. Much like its
          eponymous practice, All-Nighter Expressway is a final test of skill,
          encompassing the difficulty of all tracks before it.
        </p>
      </div>
      </div>
      
    ),
  },
];
