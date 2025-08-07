import type { AccountSchema } from "@/App";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { characters } from "@/data/characters";
import { tracks } from "@/data/tracks";
import { formatTime, sumNumberListObject } from "@/utils";
import Pfp from "@/components/stats/pfp";
//import { motion } from "framer-motion";
//const AnimatedCard = motion(Card);

const InfoPage = ({
  playerData,
  recentRaces,
  setActiveTab,
  setAccount,
  account,
}: {
  playerData: any;
  recentRaces: any;
  setActiveTab: (tab: "info" | "achievements") => void;
  setAccount: Function;
  account: AccountSchema;
}) => {
  interface Stat {
    name: string;
    value: string | number;
  }

  let favtrack = playerData.favoriteTrack - 1;
  if(favtrack < 0)
  {
    favtrack = 0;
  }

  const statsList1: Stat[] = [
    { name: "Most Used Character", value: characters[playerData.favoriteChara].name,},
    { name: "Most Played Track",value: tracks[favtrack].name,},
    { name: "Wins", value: playerData.firstPlace },
    { name: "Podium Finishes", value: playerData.podium },
    { name: "Races", value: playerData.totalRaces },
  ];

  const offenseUsed = sumNumberListObject(playerData.offenseUsage);
  const defenseUsed = sumNumberListObject(playerData.defenseUsage);
  const trapsUsed = sumNumberListObject(playerData.trapUsage);
  const boostsUsed = sumNumberListObject(playerData.boostUsage);

  const statsList2: Stat[] = [
    { name: "Item-Based Hits", value: offenseUsed + trapsUsed },
    { name: "Offensive Items Used", value: offenseUsed },
    { name: "Defensive Items Used", value: defenseUsed },
    { name: "Traps Used", value: trapsUsed },
    { name: "Boosts Used", value: boostsUsed },
  ];

  const statsList3: Stat[] = [
    { name: "Campus Circuit", value: formatTime(playerData.raceTime1) },
    { name: "Dorm Room Derby", value: formatTime(playerData.raceTime2) },
    { name: "Techhouse Turnpike", value: formatTime(playerData.raceTime3) },
    { name: "All Nighter Expressway", value: formatTime(playerData.raceTime4) },
  ];

  return (
        <div className="min-h-screen bg-[url('images/items-background.png')] 
    bg-[#BBB] bg-size-[90%] md:bg-size-[80%] bg-repeat bg-fixed bg-cover bg-blend-difference pt-[1rem] poppins">

      {/* Main container - wider */}
      <div className="w-full max-w-[1500px] mx-auto pr-8 pl-8">
        {/* Increased max width */}
        {/* Info Sub Page*/}
          <Card className="bg-opacity-90 border-none w-full mx-auto m-0 p-0 gap-0">
            {/* Header/class nav bar */}

            <Card className="h-auto w-full mx-auto rounded-t-lg bg-zinc-900/60 border-0">
              <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 h-full px-2 md:px-2 py-2">
                {/* Left side/Buttons */}
                <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 border-2 border-orange-500 bg-[#dc4d31]/90 p-2 rounded-md justify-center items-center">
                  <button
                    className="w-full sm:w-auto font-bold text-[#e7ee33] hover:text-[#FFFBEE] border-0 rounded-md py-1.5 px-3.5 text-sm md:text-xl transition-colors "
                    onClick={() => setActiveTab("info")}
                  >
                    Stats
                  </button>

                  <button
                    className="w-full sm:w-auto font-bold text-[#FFFBEE] hover:text-[#e7ee33] border-0 rounded-md py-1.5 px-3.5 text-sm md:text-xl transition-colors"
                    onClick={() => setActiveTab("achievements")}
                  >
                    Achievements
                  </button>
                </div>

                {/* Right side/Profile */}
                <div className="w-full flex flex-col items-center sm:flex-row sm:justify-end sm:items-center gap-2">
                  <h2 className="text-[#FFFBEE] text-lg md:text-2xl font-bold">
                    {account.username}
                  </h2>
                  <Pfp
                    account={account}
                    setAccount={setAccount}
                    showEdit={true}
                    className="relative z-50"
                  />
                </div>
              </CardContent>
            </Card>
            {/* Overall stats grid - wider and colorful */}
            <Card className="w-full mx-auto p-0 rounded-b-lg min-h-[16rem] bg-opacity-0 border-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-[14px] border-y-2 border-zinc-500/80 w-full h-full">
                {/* Section 1 */}
                <div className="flex items-center justify-center bg-zinc-900/80 border-x-2 border-zinc-500/80">
                  <div className="grid grid-cols-[65%_35%] gap-y-1 w-full h-full">
                    {statsList1.map((stat, idx) => (
                      <React.Fragment key={idx}>
                        <div className="sm:text-sm px-4 py-3 text-left text-[#FFFBEE] font-semibold text-base whitespace-nowrap border-b border-gray-700">
                          {stat.name}
                        </div>
                        <div className="sm:text-sm px-4 py-3 text-left text-[#FFFBEE] font-medium text-base md:whitespace-nowrap border-b border-gray-700">
                          {stat.value}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Section 2 */}
                <div className="flex items-center justify-center bg-zinc-900/80 border-x-2 border-zinc-500/80">
                  <div className="grid grid-cols-[65%_35%] gap-y-1 w-full h-full">
                    {statsList2.map((stat, idx) => (
                      <React.Fragment key={idx}>
                        <div className=" sm:text-sm px-4 py-3 text-left text-[#FFFBEE] font-semibold text-base whitespace-nowrap border-b border-gray-700">
                          {stat.name}
                        </div>
                        <div className="sm:text-sm px-4 py-3 text-left text-[#FFFBEE] font-medium text-base whitespace-nowrap border-b border-gray-700 ">
                          {stat.value}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Section 3 */}
                <div className="flex items-center justify-center bg-zinc-900/80 border-x-2 border-zinc-500/80">
                  <div className="grid grid-cols-[65%_35%] gap-y-1 w-full h-full">
                      <React.Fragment>
                        {/* Name: centered on xs, left-aligned from sm up */}
                        <div className="sm:text-lg px-4 py-3 text-left text-[#FFFBEE] font-bold text-base border-b border-gray-700">
                          Fastest Race Times
                        </div>
                        <div className="border-b border-gray-700"></div>
                        
                      </React.Fragment>
                    {statsList3.map((stat, idx) => (
                      <React.Fragment key={idx}>
                        {/* Name: centered on xs, left-aligned from sm up */}
                        <div className="sm:text-sm px-4 py-3 text-left text-[#FFFBEE] font-semibold text-base border-b border-gray-700">
                          {stat.name}
                        </div>
                        {/* Value: centered on xs, right-aligned from sm up */}
                        <div className="sm:text-sm  pr-4 py-3 text-left text-[#FFFBEE] font-medium text-base lg:whitespace-nowrap border-b border-gray-700">
                          {stat.value}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            {/* Recent Races Activity */}
            {recentRaces ? (
              <Card className="mx-4 mb-4 bg-zinc-900/80 border-0 rounded-none">
                <h2 className="ml-4 mb-4 text-xl font-semibold text-[#FFFBEE]">
                  Last Five Races
                </h2>
                <div className="space-y-2 px-4 pb-4 opacity-100">
                  {recentRaces.map((race: any) => {
                    return (
                      <div
                        key={race.id}
                        className="bg-[#dc4d31] hover:bg-[#f25c3f] mb-4 rounded-md p-3 flex justify-between text-[#FFFBEE] border-2 border-orange-500 transition-colors"
                      >
                        <span className="text-[#FFFBEE] font-bold">
                          {tracks[race.mapRaced - 1].name}
                        </span>
                        <span className="text-[#FFFBEE] font-medium">
                          {formatTime(race.raceTime)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ) : null}
          </Card>
      </div>
    </div>
  );
};

export default InfoPage;
