import PreviewTableRow from "./preview-table-row";
import { formatPlacing, formatTime } from "@/utils";
import { pfpList } from "@/data/pfps";

// Takes the placement number and turns it into the appropriate color.
const getPlacementColor = (index: number): string => {
  switch (index) {
    case 0:
      return "text-[#facc15]";
    case 1:
      return "text-[#cbd5e1]";
    case 2:
      return "text-[#fdba74]";
    case 3:
      return "text-[#f59e0b]";
    default:
      return "text-white";
  }
};

const PreviewLeaderboard = ({ data }: { data: any }) => {
  return (
    <>
    <div className="top-0 z-0 w-full h-[80vh] lg:w-3/5 md:h-225 bg-[url('images/arcade-machine-2.png')] 
    xl:bg-[url('images/arcade-machine-wide.png')] bg-no-repeat bg-size-[100%_100%]">
    </div>
      <table
        id="scoreboard"
        className="absolute top-[27%] 
                    w-[70%] lg:w-[37%] h-125 
                    flex flex-col items-center m-8 z-10 mx-auto"
      >
        <tr className="w-full flex flex-row text-gray-200 text-center mx-auto">
          <th className="racingHeader text-[4vw] md:text-[3vw] lg:text-[2vw] w-[20%] text-center">
            Placing
          </th>
          <th className="racingHeader text-[4vw] md:text-[3vw] lg:text-[2vw] w-[20%] text-center">

          </th>
          <th className="racingHeader text-[4vw] md:text-[3vw] lg:text-[2vw] w-[20%] text-center">
            Player
          </th>
          <th className="racingHeader text-[4vw] md:text-[3vw] lg:text-[2vw] w-[20%] text-center">
            Time
          </th>
          <th className="racingHeader text-[4vw] md:text-[3vw] lg:text-[2vw] w-[20%] text-center">
            Score
          </th>
        </tr>
        {data.map((player: any, index: number) => {
          return (
            <PreviewTableRow
              place={formatPlacing(index + 1)}
              imgPath={pfpList[player.pfp].src}
              name={player.username}
              time={formatTime(player.raceTime)}
              score={player.score}
              color={getPlacementColor(index)}
              className=""
            />
          );
        })}
      </table>
    </>
  );
};
export default PreviewLeaderboard;
