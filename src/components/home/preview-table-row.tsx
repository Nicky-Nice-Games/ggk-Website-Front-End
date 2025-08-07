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
      className={`w-full flex flex-row items-center text-gray-300 mx-[5%] py-1 md:py-2 ${className}`}
    >
      <td className="w-[25%] min-w-0 mx-auto text-center ">
        <h3
          className={`bravo text-[20px] xs:text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] ${color} min-w-[30px] xs:min-w-[40px] sm:min-w-[50px] md:min-w-[60px]  leader-text `}
        >
          {place}
        </h3>
      </td>

      <td className="w-[25%] min-w-0 mx-auto text-center">
        <div className="">
          <img
            src={imgPath}
            alt={`Photo of ${name}`}
            className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-[#38bdf8] mx-auto"
          />
        </div>
      </td>

      <td className="w-[25%] min-w-0 mx-auto text-center">
        <p
          className="font-racingMobileText sm:font-racingText 
             text-[11px] xs:text-[13px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px]"
        >
          {name}
        </p>
      </td>

      <td className="w-[25%] min-w-0 mx-auto text-center">
        <p
          className="font-racingMobileText lg:font-racingText 
             text-[11px] xs:text-[13px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] whitespace-nowrap"
        >
          {time}
        </p>
      </td>

      <td className="w-[25%] min-w-0 mx-auto text-center">
        <p
          className="font-racingMobileText sm:font-racingText 
             text-[11px] xs:text-[13px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] whitespace-nowrap"
        >
          {score}
        </p>
      </td>
    </tr>
  );
};

export default PreviewTableRow;
