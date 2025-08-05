// Achievement names and imgs
export interface AchievementData {
  name: string;
  requirement: string;
  img: string;
}

export const achievementData:AchievementData[] = [
  
    /* 1st Place Finishes*/
    { name: "First Win", requirement: "1 Win", img: "images/achieve/achieve-deans-1.svg" }, // Orange
    { name: "Amateur", requirement: "10 Win", img: "images/achieve/achieve-deans-2.svg" }, // Red
    { name: "Pro", requirement: "25 Win", img: "images/achieve/achieve-deans-3.svg" }, // Blue
    { name: "Elite Racer", requirement: "50 Win", img: "images/achieve/achieve-deans-4.svg" }, // Green
    { name: "Champion", requirement: "100 Win", img: "images/achieve/achieve-deans-5.svg" }, // Yellow

    /* Podium Finishes */
    {name: "Podium Debut", requirement: "Place in top 3 once", img: "images/achieve/achieve-honors-1.svg",},
    { name: "Bronze Contender", requirement: "Place in top 3 25 times", img: "images/achieve/achieve-honors-2.svg",}, // Red
    { name: "Silver Regular", requirement: "Place in top 3 50 times", img: "images/achieve/achieve-honors-3.svg",}, // Blue
    { name: "Podium Veteran", requirement: "Place in top 3 100", img: "images/achieve/achieve-honors-4.svg",}, // Green
    { name: "Podium Legend", requirement: "Place in top 3 200", img: "images/achieve/achieve-honors-5.svg",}, // Yellow

    /* Races Completed */
    {
      name: "Getting Started",
      requirement: "Complete 1 race",
      img: "images/achieve/achieve-pass-1.svg",
    }, // Orange
    {
      name: "Weekend Driver",
      requirement: "Complete 25 races",
      img: "images/achieve/achieve-pass-2.svg",
    }, // Red
    {
      name: "Track Regular",
      requirement: "Complete 50 races",
      img: "images/achieve/achieve-pass-3.svg",
    }, // Blue
    {
      name: "Seasoned Racer",
      requirement: "Complete 100 races",
      img: "images/achieve/achieve-pass-4.svg",
    }, // Green
    {
      name: "Road Warrior",
      requirement: "Complete 250 races",
      img: "images/achieve/achieve-pass-5.svg",
    }, // Yellow

    /* Items Collected */
    { name: "First Grab", requirement: "Collect 25 items", img: "images/achieve/achieve-hoarder-1.svg" },
    { name: "Collector", requirement: "Collect 75 items", img: "images/achieve/achieve-hoarder-2.svg" },
    {
      name: "Item Hoarder",
      requirement: "Collect 150 items",
      img: "images/achieve/achieve-hoarder-3.svg",
    },
    {
      name: "Supply Master",
      requirement: "Collect 200 items",
      img: "images/achieve/achieve-hoarder-4.svg",
    },
    {
      name: "Item Overlord",
      requirement: "Collect 350 items",
      img: "images/achieve/achieve-hoarder-5.svg",
    },
  ];