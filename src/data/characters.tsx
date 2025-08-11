import type { ReactElement } from "react";

export interface Character {
  imgUrl: string;
  conceptImgUrl: string;
  name: string;
  occupation: string;
  description: ReactElement;
  devDescription: string;
}

// sample list of characters to display
export const characters: Character[] = [
  {
    imgUrl: "images/characters/gizmo.png",
    conceptImgUrl: "images/process/gizmo.png",
    name: "Gizmo",
    occupation: "Spirit of IGM",
    description: (
      <div>
        <b>Pronouns:</b> Any/All <br />
        <b>Height:</b> Short <br />
        <b>Year:</b> N/A <br />
        <b>Major:</b> N/A <br />
        <b>Likes:</b> Doohickeys, Creativity, Being helpful
        <br />
        <b>Dislikes:</b> Bugs, Bugs
        <br />
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=CFGLoQIhmow"
        >
          Lofi Hip Hop Beats To Relax/Study To
        </a>
      </div>
    ),
    devDescription:
      "Gizmo's design is based on the now-unused IGM logo from 2011-2018, specifically referencing the 'M' as Gizmo's head. The ghost form and toy form were orignally 2 different potential designs that eventually got merged into the same character. The toy form was inspired by wooden string dolls that have similar blocky features to the ghost form.",
  },
  {
    imgUrl: "images/characters/morgan.png",
    conceptImgUrl: "images/process/morgan.PNG",
    name: "Morgan",
    occupation: "Skater",
    description: (
      <div>
        <b>Pronouns:</b> She/They <br />
        <b>Height:</b> Average <br />
        <b>Year:</b> 1st
        <br />
        <b>Major:</b> Photography <br />
        <b>Likes:</b> Skating, Thrifting clothes, Going fast
        <br />
        <b>Dislikes:</b> 8AM classes, Wiping out
        <br />
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=TIy3n2b7V9k"
        >
          Sk8er Boi - Avril Lavigne
        </a>
      </div>
    ),
    devDescription:
      "Morgan is based on the character's designer Yazmin (Content Team Lead) during her first year at RIT: skating, baggy clothing, cool vibes. She represents a portion of the RIT population that uses alternative transportation to get around campus, as well as drawing influences from RIT Skate Club. Morgan was designed with fast travel in mind, wearing a tight beanie around her head.",
  },
  {
    imgUrl: "images/characters/reese.png",
    conceptImgUrl: "images/process/reese.png",
    name: "Reese",
    occupation: "Dining Worker",
    description: (
      <div>
        <b>Pronouns:</b> He/Him <br />
        <b>Height:</b> Average <br />
        <b>Year:</b> 2nd
        <br />
        <b>Major:</b> Packaging Science <br />
        <b>Likes:</b> Free stuff, Making mixtapes, Anime, Energy drinks <br />
        <b>Dislikes:</b> Angry customers, Waking up
        <br />
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=HyHNuVaZJ-k"
        >
          Feel Good Inc. - Gorillaz
        </a>
      </div>
    ),
    devDescription:
      "Reese is the only character in the roster who doesn't have visible eyes, which inspired his chill vibes and cheesy grin; the idea to make him a dining worker came later. His name also references Reese's™ peanut butter cups as a food pun.",
  },
  {
    imgUrl: "images/characters/emma.png",
    conceptImgUrl: "images/process/emma.png",
    name: "Emma",
    occupation: "Orientation Leader",
    description: (
      <div>
        <b>Pronouns:</b> She/Her <br />
        <b>Height:</b> Average
        <br />
        <b>Year:</b> 3rd
        <br />
        <b>Job:</b> Orientation Leader <br />
        <b>Major:</b> Game Design and Development <br />
        <b>Likes:</b> Pins, Early morning walks, Bucket hats <br />
        <b>Dislikes:</b> Loud music, Sleeping in <br />
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=LGpaGI99Xl0&list=RDLGpaGI99Xl0&start_radio=1"
        >
          Turbo Hustle - DJ Maestro
        </a>
      </div>
    ),
    devDescription:
      "Emma was inspired by an image of a real RIT orientation leader (pictured on the left) during the initial research. The character design is meant to feel welcoming, friendly, and cheerful by emphasizing rounded and curved shapes instead of sharp points. Her outfit also heavily uses RIT's main colors to show her enthusiasm towards school spirit.",
  },
  {
    imgUrl: "images/characters/kai.png",
    conceptImgUrl: "images/process/kai.PNG",
    name: "Kai",
    occupation: "Hockey Captain",
    description: (
      <div>
        <b>Pronouns:</b> They/Them
        <br />
        <b>Height:</b> Tall <br />
        <b>Year:</b> 4th
        <br />
        <b>Major:</b> Business
        <br />
        <b>Likes:</b> Playing hockey, Bandanas, Going on adventures
        <br />
        <b>Dislikes:</b> Boredom, Losing a contest
        <br />
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=btPJPFnesV4&list=RDbtPJPFnesV4&start_radio=1"
        >
          Eye of the Tiger - Survivor
        </a>
      </div>
    ),
    devDescription:
      "Kai's name and personality is based a high school friend from the characters designer Joshua (Assistant Content Team Lead). Their original design was more triangle-shaped with wide pants and slimmer shoulders, but the proportions were modified later to match the other characters. Kai's outfit is based on the RIT hockey team jerseys with a legally-distinct tiger logo on the front.",
  },
  {
    imgUrl: "images/characters/jamster.png",
    conceptImgUrl: "images/process/jamster.png",
    name: "Jamster",
    occupation: "RGDC Mascot",
    description: (
      <div>
        <b>Pronouns:</b> They/Them <br />
        <b>Height:</b> Short <br />
        <b>Year:</b> N/A
        <br />
        <b>Major:</b> N/A
        <br />
        <b>Likes:</b> Games, Jams, Game jams <br />
        <b>Dislikes:</b> Sitting still, Being hungry
        <br />
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=p3G5IXn0K7A"
        >
          Hamster Dance - Hampton and the Hamsters
        </a>
      </div>
    ),
    devDescription:
      "Jamster was designed by an RIT alum and former RIT Game Dev Club E-board member as a mascot for the club. Although the design was slightly modified, it still abides closely to RGDC's original guidelines. Jamster's magenta, cyan, and beige colors also had to be added to the color palette specifically for themselves.",
  },
];
