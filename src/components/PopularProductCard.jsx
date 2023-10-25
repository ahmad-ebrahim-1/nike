import { star, info } from "../assets/icons";
import { useState } from "react";

const PopularProductCard = ({ imgURL, name, price, description }) => {
  const [detailsIsVisible, setDetailsIsVisible] = useState(false);

  return (
    <div
      className="flex flex-1 flex-col w-full max-sm:w-full transition-all shadow-lg
    p-3 rounded-lg cursor-pointer"
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start items-center gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
        <div className="relative">
          <img
            onMouseEnter={() => setDetailsIsVisible(true)}
            onMouseLeave={() => setDetailsIsVisible(false)}
            className="w-[24px] h-[24px]"
            src={info}
            alt="details"
          />
          {detailsIsVisible && (
            <span
              className="absolute left-[50%] translate-x-[-50%] top-8 w-44 bg-white shadow-xl p-4
            border rounded"
            >
              {description}
            </span>
          )}
        </div>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
