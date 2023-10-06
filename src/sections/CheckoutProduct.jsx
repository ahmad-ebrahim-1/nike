import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { star } from "../assets/icons";

const CheckoutProduct = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const product = location.state;

  return (
    <section className="w-full bg-white-400 overflow-x-hidden">
      <div
        className="max-container flex-1 flex max-lg:flex-col justify-center items-center
        gap-11 max-sm:gap-4 p-16 max-sm:p-6"
      >
        <div
          className="w-[460px] max-sm:w-full relative before:content-['TOP_NOTCH'] before:absolute
          before:-top-1 before:-left-1 before:font-montserrat before:text-white before:text-xl
          max-sm:before:text-sm before:py-4 before:px-8 max-sm:before:py-2.5 before:bg-coral-red
          before:skew-x-6"
        >
          <img src={product.imgURL} alt="Product image" className="w-full" />
          <div
            className="absolute -bottom-1 right-1 bg-white-400 p-2 flex justify-start gap-2.5
           -skew-x-6"
          >
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat font-bold text-2xl leading-normal text-slate-gray">
              (4.5)
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-lg:gap-4">
          <h2
            className="font-bold font-palanquin text-[64px] max-md:text-[56px] max-sm:text-[35px]
            leading-normal"
          >
            {product.name}
          </h2>
          <div
            className="font-montserrat font-semibold text-coral-red text-[35px] max-sm:text-2xl
          flex justify-start items-center"
          >
            <p>{product.price}</p>
            <span className="ml-2.5 rounded-full bg-black text-white px-2.5 py-1 text-lg max-sm:text-sm">
              BEST DEAL
            </span>
          </div>
          <div
            className="font-montserrat text-slate-gray text-xl max-sm:text-[16px] leading-[1.6]
            lg:max-w-lg bg-white p-6 shadow-xl rounded-md"
          >
            <span className="font-bold text-black">Description</span>
            <p className="mt-1.5">{product.description}</p>
          </div>
          <div className="flex gap-4 max-[340px]:flex-col mt-2.5">
            <div onClick={() => navigate(-1)}>
              <Button
                label="Back"
                backgroundColor="bg-white"
                borderColor="border-slate-gray"
                textColor="text-slate-gray"
              />
            </div>
            <div>
              <Button label="Add to bag" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutProduct;
