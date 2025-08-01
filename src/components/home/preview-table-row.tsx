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
  className = "",
}: PreviewTableRowProps) => {
  return (
    <tr
      className={`w-full flex flex-row justify-between items-center text-gray-300 py-1 md:py-2 ${className}`}
    >
      <td className="w-[50%] flex flex-row items-center gap-2 sm:gap-4 md:gap-6">
        <h3
          className={`painterz text-[20px] xs:text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] ${color} min-w-[30px] xs:min-w-[40px] sm:min-w-[50px] md:min-w-[60px]`}
        >
          {place}
        </h3>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 min-w-0">
          <img
            src={imgPath}
            alt={`Photo of ${name}`}
            className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-[#38bdf8]"
          />
          <p
            className="font-racingMobileText sm:font-racingText 
             text-[10px] xs:text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 
             text-right whitespace-nowrap"
          >
            {name}
          </p>
        </div>
      </td>

      <td className="w-[25%] px-1 sm:px-2 min-w-0">
        <p
          className="font-racingMobileText lg:font-racingText 
             text-[10px] xs:text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 
             text-right whitespace-nowrap"
        >
          {time}
        </p>
      </td>

      <td className="w-[25%] px-1 sm:px-2 min-w-0">
        <p
          className="font-racingMobileText sm:font-racingText 
             text-[10px] xs:text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 
             text-right whitespace-nowrap"
        >
          {score}
        </p>
      </td>
    </tr>
  );
};

export default PreviewTableRow;
