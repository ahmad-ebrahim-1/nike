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
        className="max-container h-full flex-1 flex max-lg:flex-col justify-center items-center
        gap-10 p-16 max-sm:p-6"
      >
        <div
          className="w-[480px] max-sm:w-[296px] relative before:content-['TOP_NOTCH'] before:absolute
          before:-top-1 before:-left-1 before:font-montserrat before:text-white before:text-xl
          before:bg-coral-red before:px-8 before:py-4 before:skew-x-6"
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
        <div className="flex flex-col gap-8 max-lg:gap-6">
          <h2
            className="font-bold font-palanquin text-[72px] max-md:text-[56px] max-sm:text-[35px]
          leading-normal"
          >
            {product.name}
          </h2>
          <p className="font-montserrat font-semibold text-coral-red text-4xl max-sm:text-2xl">
            {product.price}
          </p>
          <p
            className="font-montserrat text-slate-gray text-xl max-sm:text-[16px] leading-normal
            lg:max-w-lg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit
            ipsam rerum eum saepe earum voluptas optio reiciendis. Nostrum ipsam
            fugiat odio deserunt, atque animi consequatur vitae odit tempore!
            Delectus!
          </p>
          <div className="flex gap-4 max-[340px]:flex-col">
            <div>
              <Button label="Add to cart" />
            </div>
            <div onClick={() => navigate(-1)}>
              <Button
                label="Back"
                backgroundColor="bg-white"
                borderColor="border-slate-gray"
                textColor="text-slate-gray"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutProduct;
