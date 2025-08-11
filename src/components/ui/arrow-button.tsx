interface ArrowButtonProps {
  caption?: string;
  clickAction?: () => void;
  className?: string;
  textSize?: "normal" | "large";
  direction?: "left" | "right";
  type?: "button" | "submit" | "reset";
}

const ArrowButton = ({
  caption,
  clickAction = () => {},
  className = "",
  textSize = "normal",
  direction = "right",
  type = "button",
}: ArrowButtonProps) => {
  return (
    <button
      type={type}
      onClick={() => {
        clickAction();
      }}
      className={`cursor-pointer text-button px-3 py-2 bg-[url(images/arrow.png)] bg-size-[100%_100%] transform transition duration-200 
    ${
      direction === "left"
        ? "rotate-180 hover:-translate-x-3"
        : "hover:translate-x-3"
    } ${className}`}
    >
      <h3
        className={`text-white ${direction === "left" ? "rotate-180" : ""} ${
          textSize === "large" ? "text-2xl" : ""
        }`}
      >
        {caption}
      </h3>
    </button>
  );
};

export default ArrowButton;
