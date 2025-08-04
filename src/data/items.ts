export interface Item {
  imgUrl: string;
  name: string;
  level: number;
  category: string;
  description: string;
}

//list of items to display

export const items: Item[] = [
  {
    imgUrl: "images/items/boosts/level_one.png",
    name: "TigerClaw",
    level: 1,
    category: "boost",
    description: "This energy drink is quite familiar to students on campus. It gives the player a 1.25x boost to their speed for three seconds!",
  },
  {
    imgUrl: "images/items/boosts/level_two.png",
    name: "FizzyClaw",
    level: 2,
    category: "boost",
    description: "This alternate flavor of TigerClaw gives a LOT more energy... It gives the player a 1.5x boost to their speed for three seconds!",
  },
  {
    imgUrl: "images/items/boosts/level_three.png",
    name: "RocketClaw",
    level: 3,
    category: "boost",
    description:
      "Do you... even drink them at this point? RocketClaw gives the player a 1.75x boost to their speed for three seconds, but also makes them airborne, allowing for some cool tricks!",
  },
  {
    imgUrl: "images/items/boosts/level_four.png",
    name: "WarpClaw",
    level: 4,
    category: "boost",
    description:
      "Cracking open a WarpClaw teleports the player quite a distance on the course, and then leaves them with a TigerClaw boost. I wonder how many Dining Dollars these cost?",
  },
  {
    imgUrl: "images/items/shields/level_one.png",
    name: "Shield",
    level: 1,
    category: "defense",
    description: "This item generates a force field that will protect the user for four seconds.",
  },
  {
    imgUrl: "images/items/shields/level_two.png",
    name: "Tough Shield",
    level: 2,
    category: "defense",
    description: "This upgraded version of the shield protects the user for six seconds.",
  },
  {
    imgUrl: "images/items/shields/level_three.png",
    name: "Tougher Shield",
    level: 3,
    category: "defense",
    description: "This shield protects the user for eight seconds. Surely it can't get better than that...",
  },
  {
    imgUrl: "images/items/shields/level_four.png",
    name: "Toughest Shield",
    level: 4,
    category: "defense",
    description: "Whoa! This shield protects the user for ten seconds, but also stuns people that the user bumps into. I guess the best defense really IS a good offense...",
  },
  {
    imgUrl: "images/items/pucks/level_one.png",
    name: "Puck",
    level: 1,
    category: "offense",
    description:
      "A clean, offensive item you can throw in a straight line, to slow down an opponent if it lands. It even bounces off of walls!",
  },
  {
    imgUrl: "images/items/pucks/level_two.png",
    name: "Homing Puck",
    level: 2,
    category: "offense",
    description:
      "This upgraded version of the puck chases after the next player in front of you. No need to worry about aiming!",
  },
  {
    imgUrl: "images/items/pucks/level_three.png",
    name: "Spiky Pucks",
    level: 3,
    category: "offense",
    description:
      "What's better than one homing puck? Three of them! They've even got spikes now for an added OOMPH!",
  },
  {
    imgUrl: "images/items/pucks/level_four.png",
    name: "Flying Puck",
    level: 4,
    category: "offense",
    description:
      "This puck chases down whichever player is currently in first place, and then swoops down and hits them. That's just cruel...",
  },
  {
    imgUrl: "images/items/fake/level_one.png",
    name: "Oil Spill",
    level: 1,
    category: "trap",
    description:
      "Releases a puddle of oil behind your kart, stunning and causing anyone who runs into it to spin out.",
  },
  {
    imgUrl: "images/items/fake/level_four.png",
    name: "Fake Item Brick",
    level: 2,
    category: "trap",
    description: "This upgraded hazard places a fake item brick behind your kart, which will stun and spin out a player who tries to collect it. How evil!",
  },
  {
    imgUrl: "images/items/fake/level_two.png",
    name: "Cracked Brick Wall",
    level: 3,
    category: "trap",
    description: "This sizable brick wall is pretty tough for players to avoid. They can crash through it, but it will stun them. They can be destroyed by pucks, though.",
  },
  {
    imgUrl: "images/items/fake/level_three.png",
    name: "Blizzard",
    level: 4,
    category: "trap",
    description: "This spawns a large blizzard on the road, which is very difficult to avoid. Driving through it slows the players down a little bit, but their controls are reversed for awhile after they escape the blizzard.",
  },
];
