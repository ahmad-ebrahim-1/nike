import { useState, useEffect } from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isVisible ? `fixed` : `hidden`
      } max-lg:bottom-6 max-lg:right-6 bottom-12 right-12 rounded-full -rotate-90 z-20`}
    >
      <Button iconURL={arrowRight} />
    </div>
  );
};

export default BackToTop;
