type PreviewTableRowProps = {
  place: string;
  imgPath: string;
  name: string;
  time: string;
  score: string;
  color: string;
  className?: string;
};

const PreviewTableRow = ({
  place,
  imgPath,
  name,
  time,
  score,
  color,
}: PreviewTableRowProps) => {
  return (
    <tr className="w-full flex flex-row justify-between items-center text-gray-300 my-1 md:my-4 2xl:my-3">
      <td className="w-[50%] flex flex-row items-center gap-4 md:gap-8">
        <h3
          className={`painterz text-[7vw] md:text-6xl ${color} min-w-[15vw] md:min-w-25`}
        >
          {place}
        </h3>
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src={imgPath}
            alt={`Photo of ${name}`}
            className="w-15 outline-[5px] outline-[#38bdf8] h-[60px] rounded-full"
          />
          <p className="racingUsername text-[5vw] md:text-[3vw] lg:text-[2vw] whitespace-nowrap">
            {name}
          </p>
        </div>
      </td>

      <td className="w-[25%] px-2">
        <p className="racingText text-[4vw] md:text-[3vw] lg:text-[2vw] text-center">
          {time}
        </p>
      </td>

      <td className="w-[25%] px-2">
        <p className="racingText text-[4vw] md:text-[3vw] lg:text-[2vw] text-right">
          {score}
        </p>
      </td>
    </tr>
  );
};

export default PreviewTableRow;
