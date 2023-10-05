import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { star } from "../assets/icons";

const CheckoutProduct = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const product = location.state;

  return (
    <section
      className="w-full min-h-screen bg-gradient-to-r from-white-400 to-pale-blue
    via-pale-blue overflow-x-hidden"
    >
      <div
        className="max-container h-full flex-1 flex max-lg:flex-col justify-center items-start
        gap-10 max-sm:gap-4 p-16 max-sm:p-6"
      >
        <div
          className="w-[480px] max-sm:w-full relative before:content-['TOP_NOTCH'] before:absolute
          before:-top-1 before:-left-1 before:font-montserrat before:text-white before:text-xl
          max-sm:before:text-sm  before:py-4 before:px-8 max-sm:before:py-2.5 before:bg-coral-red
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
        <div className="flex flex-col gap-6 max-lg:gap-4 max-sm:gap-2.5">
          <h2
            className="font-bold font-palanquin text-[64px] max-md:text-[56px] max-sm:text-[35px]
          leading-normal"
          >
            {product.name}
          </h2>
          <p className="font-montserrat font-semibold text-coral-red text-[32px] max-sm:text-2xl">
            {product.price}
          </p>
          <p
            className="font-montserrat text-slate-gray text-xl max-sm:text-[16px] leading-[1.6]
            lg:max-w-lg"
          >
            {product.description}
          </p>
          <div className="flex gap-2.5 max-[340px]:flex-col mt-2.5">
            <div onClick={() => navigate(-1)}>
              <Button
                label="Back"
                backgroundColor="bg-white"
                borderColor="border-slate-gray"
                textColor="text-slate-gray"
              />
            </div>
            <div>
              <Button label="Add to cart" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutProduct;
