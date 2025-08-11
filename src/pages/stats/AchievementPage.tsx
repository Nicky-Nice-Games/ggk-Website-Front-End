import type { AccountSchema } from "@/App";
import { sumNumberListObject } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import Pfp from "@/components/stats/pfp";
import { achievementData } from "@/data/achievements";

//#region Helper Functions
const getTotalItemsUsed = (playerData: any): number => {
  return (
    sumNumberListObject(playerData.offenseUsage) +
    sumNumberListObject(playerData.trapUsage) +
    sumNumberListObject(playerData.boostUsage) +
    sumNumberListObject(playerData.defenseUsage)
  );
};

const checkAchievementProgress = (
  stat: number,
  milestones: number[]
): boolean[] => {
  let achievementStatus: boolean[] = [];
  for (let i = 0; i < milestones.length; i++) {
    achievementStatus.push(stat >= milestones[i]);
  }
  return achievementStatus;
};
//#endregion

type AchievementsPageProps = {
  account: AccountSchema;
  setAccount: Function;
  playerData: any;
  setActiveTab: (tab: "info" | "achievements") => void;
};

export const AchievementsPage = ({
  account,
  setAccount,
  playerData,
  setActiveTab,
}: AchievementsPageProps) => {
  const firstPlaceFinishes = playerData.firstPlace;
  const top3Finishes = playerData.podium;
  const totalRaces = playerData.totalRaces;
  const itemsUsed = getTotalItemsUsed(playerData);

  const firstPlaceAchievements = checkAchievementProgress(
    firstPlaceFinishes,
    [1, 10, 25, 50, 100]
  );
  const top3Achievements = checkAchievementProgress(
    top3Finishes,
    [1, 25, 50, 100, 200]
  );
  const totalRaceAchievements = checkAchievementProgress(
    totalRaces,
    [1, 25, 50, 100, 250]
  );
  const itemsUsedAchievements = checkAchievementProgress(
    itemsUsed,
    [25, 75, 150, 250, 450]
  );

  const achievementSections = [
    { name: "1st Place Finishes", progress: firstPlaceAchievements },
    { name: "Podium Finishes", progress: top3Achievements },
    { name: "Races", progress: totalRaceAchievements },
    { name: "Items Collected", progress: itemsUsedAchievements },
  ];

  return (
    <div
      className="min-h-screen bg-[url('images/items-background.png')] 
    bg-[#BBB] bg-size-[90%] md:bg-size-[80%] bg-repeat bg-fixed bg-cover bg-blend-difference pt-[1rem] poppins"
    >
      <div className="w-full max-w-[1500px] mx-auto pr-8 pl-8">
        <Card className="bg-opacity-90 border-none w-full mx-auto m-0 p-0 gap-0">
          {/* Header/nav bar - matches InfoPage */}
          <Card className="h-auto w-full mx-auto rounded-t-lg bg-zinc-900/60 border-0">
            <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 h-full px-2 md:px-2 py-2">
              {/* Left side/Buttons */}
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 border-2 border-orange-500 bg-[#dc4d31]/90 p-2 rounded-md justify-center items-center">
                <button
                  className="w-full sm:w-auto font-bold text-[#FFFBEE] hover:text-[#e7ee33] border-0 rounded-md py-1.5 px-3.5 text-sm md:text-xl transition-colors hover:cursor-pointer"
                  onClick={() => setActiveTab("info")}
                >
                  Stats
                </button>

                <button
                  className="w-full sm:w-auto font-bold text-[#e7ee33] border-0 rounded-md py-1.5 px-3.5 text-sm md:text-xl transition-colors"
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

          {/* Achievement sections */}
          <div className="p-4 md:p-6">
            {achievementSections.map((section, sectionIndex) => {
              const startIdx = sectionIndex * 5;
              const medals = achievementData.slice(startIdx, startIdx + 5);

              return (
                <div
                  key={section.name}
                  className="mx-4 mb-4 bg-zinc-900/80 border-0 rounded-md"
                >
                  <div className="mb-4 md:mb-6">
                    <h2 className="ml-4 pt-4 text-xl font-semibold text-[#FFFBEE]">
                      {section.name}
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 justify-items-center">
                    {section.progress.map((unlocked, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col items-center p-1 md:p-2 group"
                      >
                        {unlocked ? (
                          <div className="relative transform transition-transform hover:scale-110">
                            {/* Ribbon */}
                            {/* Hexagon medal */}
                            <div className="w-22 h-22 md:w-24 md:h-24 border-0 flex items-center justify-center">
                              <img
                                src={medals[idx].img}
                                alt="achievement icon"
                              />
                            </div>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-orange-300 text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-orange-500">
                              {medals[idx].name} – {medals[idx].requirement}
                            </div>
                          </div>
                        ) : (
                          <div className="relative">
                            <div className="w-22 h-22 md:w-24 md:h-24 border-0 flex items-center justify-center">
                              <img
                                src={medals[idx].lockimg}
                                alt="achievement icon"
                              />
                            </div>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#dc4d31] text-[#FFFBEE] font-semibold text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-orange-500">
                              {medals[idx].name}
                            </div>
                          </div>
                        )}
                        <p className="mt-2 text-md text-center text-orange-300 poppins font-bold">
                          {medals[idx].name}
                        </p>
                        <p className="mt-1 text-sm text-center text-[#FFFBEE]">
                          {medals[idx].requirement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AchievementsPage;
